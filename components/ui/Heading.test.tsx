import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

describe("Heading", () => {
  it("renders as h2 by default with default size and tone", () => {
    const { container } = render(<Heading data-testid="heading">Titulo</Heading>);

    expect(container.firstElementChild?.tagName).toBe("H2");
    expect(screen.getByTestId("heading")).toHaveClass("text-h3");
    expect(screen.getByTestId("heading")).toHaveClass("text-ink");
  });

  it("supports as, size and tone variants", () => {
    const { container } = render(
      <Heading as="h1" size="xl" tone="brand">
        Titulo principal
      </Heading>,
    );

    expect(container.firstElementChild?.tagName).toBe("H1");
    expect(screen.getByText("Titulo principal")).toHaveClass("text-h1");
    expect(screen.getByText("Titulo principal")).toHaveClass("text-brand-strong");
  });
});

