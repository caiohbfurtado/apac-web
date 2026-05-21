import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { Card } from "./Card";
import { Heading, Text } from "./index";
import { Section } from "../layout";

describe("Card", () => {
  it("renders as an article by default with default surface and padding", () => {
    const { container } = render(<Card data-testid="card">Conteudo</Card>);

    expect(container.firstElementChild?.tagName).toBe("ARTICLE");
    expect(screen.getByTestId("card")).toHaveClass("bg-surface");
    expect(screen.getByTestId("card")).toHaveClass("p-6");
  });

  it("supports surface, padding and interactive classes", () => {
    const { container } = render(<Card data-testid="card" surface="muted" padding="lg" interactive />);

    expect(container.firstElementChild?.tagName).toBe("BUTTON");
    expect(screen.getByTestId("card")).toHaveClass("bg-surface-muted");
    expect(screen.getByTestId("card")).toHaveClass("p-8");
    expect(screen.getByTestId("card")).toHaveClass("cursor-pointer");
    expect(screen.getByTestId("card")).toHaveClass("focus-visible:ring-2");
    expect(screen.getByTestId("card")).toHaveAttribute("type", "button");
  });

  it("adds aria-label and manages focus when interactive and title is string", () => {
    const onClick = jest.fn();
    render(
      <Card data-testid="card" interactive title="Cartão Interativo" onClick={onClick}>
        Conteudo
      </Card>,
    );

    const card = screen.getByTestId("card");
    expect(card).toHaveAttribute("aria-label", "Cartão Interativo");
    
    card.focus();
    expect(card).toHaveFocus();
    
    fireEvent.click(card);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders icon, title, description, action and children in a predictable composition", () => {
    render(
      <Card
        icon={<span aria-hidden="true">*</span>}
        title="Titulo do card"
        description="Descricao do card"
        action={<Badge tone="brand">Novo</Badge>}
      >
        <a href="/saiba-mais">Saiba mais</a>
      </Card>,
    );

    expect(screen.getByText("*")).toBeInTheDocument();
    expect(screen.getByText("Titulo do card")).toBeInTheDocument();
    expect(screen.getByText("Descricao do card")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Saiba mais" })).toHaveAttribute("href", "/saiba-mais");
    expect(screen.getByText("Novo")).toBeInTheDocument();
  });

  it("supports polymorphic rendering", () => {
    const { container } = render(
      <Card as="a" href="/campanhas" interactive>
        Campanhas
      </Card>,
    );

    expect(container.firstElementChild?.tagName).toBe("A");
    expect(screen.getByRole("link", { name: "Campanhas" })).toHaveAttribute(
      "href",
      "/campanhas",
    );
  });

  it("composes with Section, Heading, Text and Button primitives", () => {
    render(
      <Section
        heading={<Heading as="h2" size="lg">Blocos de apoio</Heading>}
        description={<Text tone="muted">Componentes reutilizaveis em conjunto.</Text>}
      >
        <Card
          title="Acolhimento"
          description={<Text size="sm">Texto secundario do card.</Text>}
          action={<Button>Explorar</Button>}
        >
          <Text size="sm">Conteudo complementar do bloco.</Text>
        </Card>
      </Section>,
    );

    expect(screen.getByRole("heading", { name: "Blocos de apoio" })).toBeInTheDocument();
    expect(screen.getByText("Componentes reutilizaveis em conjunto.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Explorar" })).toBeInTheDocument();
    expect(screen.getByText("Conteudo complementar do bloco.")).toBeInTheDocument();
  });
});
