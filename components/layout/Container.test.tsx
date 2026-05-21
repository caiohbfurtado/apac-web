import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

describe("Container", () => {
  it("renders as div by default and applies size + gutter classes", () => {
    const { container } = render(
      <Container data-testid="container" size="content" gutter="md">
        Conteudo
      </Container>,
    );

    expect(container.firstElementChild?.tagName).toBe("DIV");
    expect(screen.getByTestId("container")).toHaveClass("max-w-5xl");
    expect(screen.getByTestId("container")).toHaveClass("px-6");
  });

  it("supports semantic element via as", () => {
    const { container } = render(
      <Container as="main" data-testid="container">
        Conteudo
      </Container>,
    );

    expect(container.firstElementChild?.tagName).toBe("MAIN");
  });
});

