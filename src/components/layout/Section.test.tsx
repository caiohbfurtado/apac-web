import { render, screen } from "@testing-library/react";
import { Section } from "./Section";

describe("Section", () => {
  it("renders a semantic section by default and forwards id", () => {
    const { container } = render(<Section id="intro" data-testid="section" />);

    expect(container.firstElementChild?.tagName).toBe("SECTION");
    expect(screen.getByTestId("section")).toHaveAttribute("id", "intro");
  });

  it("supports surface and spacing variants", () => {
    render(<Section data-testid="section" surface="muted" spacing="tight" />);

    expect(screen.getByTestId("section")).toHaveClass("bg-surface-muted");
    expect(screen.getByTestId("section")).toHaveClass("p-6");
    expect(screen.getByTestId("section")).toHaveClass("rounded-card");
  });

  it("renders heading, description, actions, and children with predictable structure", () => {
    render(
      <Section
        heading={<h2>Heading</h2>}
        description={<p>Descricao</p>}
        actions={<a href="#acao">Acao</a>}
      >
        <div>Conteudo</div>
      </Section>,
    );

    expect(screen.getByText("Heading")).toBeInTheDocument();
    expect(screen.getByText("Descricao")).toBeInTheDocument();
    expect(screen.getByText("Acao")).toHaveAttribute("href", "#acao");
    expect(screen.getByText("Conteudo")).toBeInTheDocument();
  });
});

