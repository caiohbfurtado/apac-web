import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
  it("renders as p by default with default size and tone", () => {
    const { container } = render(<Text data-testid="text">Conteudo</Text>);

    expect(container.firstElementChild?.tagName).toBe("P");
    expect(screen.getByTestId("text")).toHaveClass("text-body");
    expect(screen.getByTestId("text")).toHaveClass("text-ink/80");
  });

  it("supports element, size and tone variants", () => {
    const { container } = render(
      <Text as="span" size="sm" tone="muted">
        Microcopy
      </Text>,
    );

    expect(container.firstElementChild?.tagName).toBe("SPAN");
    expect(screen.getByText("Microcopy")).toHaveClass("text-small");
    expect(screen.getByText("Microcopy")).toHaveClass("text-ink/60");
  });
});

