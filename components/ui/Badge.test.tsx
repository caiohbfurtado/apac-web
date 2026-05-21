import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders as a span by default with default tone classes", () => {
    const { container } = render(<Badge data-testid="badge">Categoria</Badge>);

    expect(container.firstElementChild?.tagName).toBe("SPAN");
    expect(screen.getByTestId("badge")).toHaveClass("rounded-pill");
    expect(screen.getByTestId("badge")).toHaveClass("bg-surface-muted");
  });

  it("supports tone variants and polymorphic rendering", () => {
    const { container } = render(
      <Badge as="a" href="/ajuda" tone="brand">
        Apoio
      </Badge>,
    );

    expect(container.firstElementChild?.tagName).toBe("A");
    expect(screen.getByRole("link", { name: "Apoio" })).toHaveAttribute("href", "/ajuda");
    expect(screen.getByRole("link", { name: "Apoio" })).toHaveClass("bg-brand-soft");
  });

  it("uses functional tones for success and info states", () => {
    render(
      <div>
        <Badge tone="success">Ativo</Badge>
        <Badge tone="info">Novo</Badge>
      </div>,
    );

    expect(screen.getByText("Ativo")).toHaveClass("text-success");
    expect(screen.getByText("Novo")).toHaveClass("text-info");
  });
});
