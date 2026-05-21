import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const nextBin = path.join(process.cwd(), "node_modules", ".bin", "next");
const noOutputTimeoutMs = Number(
  process.env.NEXT_BUILD_NO_OUTPUT_TIMEOUT_MS ?? 20000
);
const childEnv = { ...process.env };

delete childEnv.NODE_ENV;

if (!existsSync(nextBin)) {
  console.error("Could not find the local Next.js binary at node_modules/.bin/next");
  process.exit(1);
}

const child = spawn(nextBin, ["build"], {
  env: childEnv,
  stdio: ["inherit", "pipe", "pipe"],
});

let lastOutputAt = Date.now();
let timedOut = false;

function forward(stream, target) {
  stream.on("data", (chunk) => {
    lastOutputAt = Date.now();
    target.write(chunk);
  });
}

forward(child.stdout, process.stdout);
forward(child.stderr, process.stderr);

const watchdog = setInterval(() => {
  if (Date.now() - lastOutputAt < noOutputTimeoutMs) {
    return;
  }

  timedOut = true;
  clearInterval(watchdog);

  console.error("");
  console.error(
    `Build produced no output for ${Math.round(noOutputTimeoutMs / 1000)}s and was stopped to avoid hanging indefinitely.`
  );
  console.error(
    "In sandboxed agent environments this usually means the Next.js build got stuck on an environment limitation, not necessarily on application code."
  );
  console.error(
    "Retry `npm run build` with escalated permissions, or use `npm run build:direct` from a normal local terminal."
  );

  child.kill("SIGTERM");

  setTimeout(() => {
    child.kill("SIGKILL");
  }, 3000).unref();
}, 1000);

function relaySignal(signal) {
  process.on(signal, () => {
    child.kill(signal);
  });
}

relaySignal("SIGINT");
relaySignal("SIGTERM");

child.on("close", (code, signal) => {
  clearInterval(watchdog);

  if (timedOut) {
    process.exit(124);
  }

  if (signal) {
    process.exit(1);
  }

  process.exit(code ?? 1);
});
