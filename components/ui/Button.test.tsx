import { render, screen } from "@testing-library/react";
import { Button, PrimaryButton, SecondaryButton, WhatsAppButton } from "./Button";

describe("Button", () => {
  it("renders as a button by default", () => {
    render(<Button>Acao</Button>);

    const button = screen.getByRole("button", { name: "Acao" });
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass("inline-flex");
  });

  it("renders as a link when href is provided", () => {
    render(
      <Button href="/contato" data-testid="link">
        Fale conosco
      </Button>,
    );

    const link = screen.getByRole("link", { name: "Fale conosco" });
    expect(link).toHaveAttribute("href", "/contato");
  });

  it("applies variant styles for primary, secondary, and whatsapp", () => {
    render(
      <div>
        <PrimaryButton>Primario</PrimaryButton>
        <SecondaryButton>Secundario</SecondaryButton>
        <WhatsAppButton>Whats</WhatsAppButton>
      </div>,
    );

    expect(screen.getByRole("button", { name: "Primario" })).toHaveClass("bg-brand");
    expect(screen.getByRole("button", { name: "Secundario" })).toHaveClass("bg-surface");
    expect(screen.getByRole("button", { name: "Whats" })).toHaveClass("bg-success");
  });

  it("handles disabled links with aria-disabled and tabIndex", () => {
    render(
      <Button href="/apoio" disabled>
        Apoio
      </Button>,
    );

    const link = screen.getByRole("link", { name: "Apoio" });
    expect(link).toHaveAttribute("aria-disabled", "true");
    expect(link).toHaveAttribute("tabindex", "-1");
  });
});
