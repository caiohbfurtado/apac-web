import { render, screen, within } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders contentinfo landmark and institutional messaging", () => {
    render(<Footer />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /apoio, acolhimento/i })).toBeInTheDocument();
    expect(
      screen.getByText(/atendimento de segunda a sexta, das 8h as 18h/i),
    ).toBeInTheDocument();
  });

  it("exposes primary and contact navigation links", () => {
    render(<Footer />);

    const institutionalNav = screen.getByRole("navigation", { name: "Links institucionais" });
    const contactNav = screen.getByRole("navigation", { name: "Canais de contato" });

    expect(within(institutionalNav).getByRole("link", { name: "Início" })).toHaveAttribute(
      "href",
      "#fundacao",
    );
    expect(within(institutionalNav).getByRole("link", { name: "Atuação" })).toHaveAttribute(
      "href",
      "#atuacao",
    );
    expect(
      within(institutionalNav).getByRole("link", { name: "Preciso de apoio" }),
    ).toHaveAttribute("href", "#preciso-de-apoio");
    expect(within(institutionalNav).getByRole("link", { name: "Transparência" })).toHaveAttribute(
      "href",
      "#transparencia",
    );
    expect(within(institutionalNav).getByRole("link", { name: "Quero ajudar" })).toHaveAttribute(
      "href",
      "#como-ajudar",
    );

    expect(within(contactNav).getByRole("link", { name: "(11) 3456-0000" })).toHaveAttribute(
      "href",
      "tel:+551134560000",
    );
    expect(
      within(contactNav).getByRole("link", { name: "contato@apac.org.br" }),
    ).toHaveAttribute("href", "mailto:contato@apac.org.br");
  });

  it("renders social links with secure external attributes", () => {
    render(<Footer />);

    const socialNav = screen.getByRole("navigation", { name: "Redes sociais da APAC" });
    const instagramLink = within(socialNav).getByRole("link", { name: "Instagram" });

    expect(instagramLink).toHaveAttribute("href", "https://www.instagram.com");
    expect(instagramLink).toHaveAttribute("target", "_blank");
    expect(instagramLink).toHaveAttribute("rel", "noreferrer noopener");
  });
});
