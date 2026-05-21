"use client";

import { useEffect } from "react";
import { Container, Section, Stack } from "@/components/layout";
import { Heading, Text } from "@/components/ui";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="pt-BR" className="h-full bg-canvas text-ink antialiased">
      <body className="min-h-full font-sans text-base leading-7">
        <div className="flex min-h-full flex-col py-16">
          <Container as="main" size="content" gutter="md">
            <Section
              heading={
                <Stack gap="sm">
                  <Heading as="h1" size="lg">
                    Algo deu errado.
                  </Heading>
                  <Text tone="muted">
                    Ocorreu um erro inesperado ao carregar esta pagina. Voce pode tentar novamente.
                  </Text>
                </Stack>
              }
              actions={
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand px-6 py-3 text-base font-semibold text-surface transition hover:bg-brand-strong"
                >
                  Tentar novamente
                </button>
              }
            >
              <div className="mt-6 rounded-md border border-line bg-surface/70 p-4 text-xs text-ink/70">
                <div className="font-semibold text-ink/80">Detalhes tecnicos</div>
                <pre className="mt-2 whitespace-pre-wrap break-words font-mono">
                  {error.digest ? `digest: ${error.digest}\n` : null}
                  {error.message}
                </pre>
              </div>
            </Section>
          </Container>
        </div>
      </body>
    </html>
  );
}
