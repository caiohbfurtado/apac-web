import { render, screen } from "@testing-library/react";
import { Stack } from "./Stack";

describe("Stack", () => {
  it("defaults to a vertical stack", () => {
    render(
      <Stack data-testid="stack">
        <span>Um</span>
        <span>Dois</span>
      </Stack>,
    );

    expect(screen.getByTestId("stack")).toHaveClass("flex", "flex-col");
  });

  it("supports horizontal direction and gap variants", () => {
    render(
      <Stack data-testid="stack" direction="horizontal" gap="sm">
        <span>Um</span>
        <span>Dois</span>
      </Stack>,
    );

    expect(screen.getByTestId("stack")).toHaveClass("flex-row", "gap-3");
  });
});

