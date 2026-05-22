import Home from "@/app/page";
import { homeContent } from "@/lib/home-content";
import { homeEditorialContent } from "@/lib/home-editorial-content";
import { renderWithProviders } from "@/test/test-utils";
import { within } from "@testing-library/react";

describe("Home", () => {
  it("renderiza landing institucional com landmarks, regioes e CTAs principais", () => {
    const { getByRole, getAllByRole, queryByRole, queryByText } = renderWithProviders(<Home />);
    const banner = getByRole("banner");
    const headerNav = getByRole("navigation", { name: "Principal" });
    const footerNav = getByRole("contentinfo");

    expect(getByRole("banner")).toBeInTheDocument();
    expect(getByRole("contentinfo")).toBeInTheDocument();

    expect(
      getByRole("heading", {
        name: /acolhimento, apoio e esperança para pessoas em tratamento contra o câncer/i,
      })
    ).toBeInTheDocument();
    expect(getByRole("heading", { name: "Como a APAC ajuda" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Preciso de apoio" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Campanhas em destaque" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Transparência e confiança" })).toBeInTheDocument();
    expect(
      getByRole("heading", {
        name: "Sua contribuição amplia o cuidado.",
      }),
    ).toBeInTheDocument();

    expect(within(headerNav).getByRole("link", { name: "Início" })).toHaveAttribute(
      "href",
      `#${homeContent.hero.id}`,
    );
    expect(within(headerNav).getByRole("link", { name: "Atuação" })).toHaveAttribute(
      "href",
      `#${homeContent.institution.id}`,
    );
    expect(within(headerNav).getByRole("link", { name: "Preciso de apoio" })).toHaveAttribute(
      "href",
      `#${homeContent.support.id}`,
    );
    expect(within(headerNav).getByRole("link", { name: "Campanhas" })).toHaveAttribute(
      "href",
      `#${homeEditorialContent.campaigns.section.id}`,
    );
    expect(within(headerNav).getByRole("link", { name: "Patrocinadores" })).toHaveAttribute(
      "href",
      `#${homeEditorialContent.sponsors.section.id}`,
    );
    expect(within(headerNav).getByRole("link", { name: "Transparência" })).toHaveAttribute(
      "href",
      `#${homeContent.trust.id}`,
    );
    expect(within(banner).getByRole("link", { name: "Falar no WhatsApp" })).toHaveAttribute(
      "href",
      homeContent.hero.ctas.whatsapp.href,
    );
    expect(within(banner).getByRole("link", { name: "Quero ajudar" })).toHaveAttribute(
      "href",
      `#${homeContent.closing.id}`,
    );

    [
      homeContent.hero.id,
      homeContent.institution.id,
      homeContent.support.id,
      homeEditorialContent.campaigns.section.id,
      homeEditorialContent.sponsors.section.id,
      homeContent.trust.id,
      homeContent.closing.id,
    ].forEach((sectionId) => {
      expect(document.getElementById(sectionId)).toBeInTheDocument();
    });

    const heroSection = document.getElementById(homeContent.hero.id);
    const supportSection = document.getElementById(homeContent.support.id);

    expect(heroSection).not.toBeNull();
    expect(supportSection).not.toBeNull();

    if (heroSection) {
      expect(within(heroSection).getByRole("link", { name: homeContent.hero.ctas.support.label })).toHaveAttribute(
        "href",
        homeContent.hero.ctas.support.href,
      );
      expect(within(heroSection).getByRole("link", { name: homeContent.hero.ctas.help.label })).toHaveAttribute(
        "href",
        homeContent.hero.ctas.help.href,
      );
      expect(within(heroSection).getByRole("link", { name: homeContent.hero.ctas.whatsapp.label })).toHaveAttribute(
        "href",
        homeContent.hero.ctas.whatsapp.href,
      );
    }

    if (supportSection) {
      expect(within(supportSection).getByRole("link", { name: homeContent.hero.ctas.whatsapp.label })).toHaveAttribute(
        "href",
        homeContent.hero.ctas.whatsapp.href,
      );
      expect(within(supportSection).getByRole("link", { name: "Ligar agora" })).toHaveAttribute(
        "href",
        "tel:+551134560000",
      );
    }

    expect(getAllByRole("link", { name: "Saiba mais" }).length).toBeGreaterThan(0);
    const whatsappLinks = getAllByRole("link", { name: "Falar no WhatsApp" });
    expect(whatsappLinks.length).toBeGreaterThan(0);
    whatsappLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "https://wa.me/5511999999999");
    });

    expect(queryByRole("heading", { name: "Playground de botoes" })).not.toBeInTheDocument();
    expect(queryByRole("heading", { name: "Playground de badges e cards" })).not.toBeInTheDocument();
    expect(queryByRole("heading", { name: "Playground de formularios" })).not.toBeInTheDocument();
    expect(getByRole("heading", { name: "Patrocinadores e apoiadores" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Marca parceira" })).toBeInTheDocument();
    expect(queryByText(/Nome completo/i)).not.toBeInTheDocument();

    expect(within(footerNav).getByRole("navigation", { name: "Links institucionais" })).toBeInTheDocument();
    expect(within(footerNav).getByRole("navigation", { name: "Canais de contato" })).toBeInTheDocument();
    expect(within(footerNav).getByRole("link", { name: "Falar no WhatsApp" })).toHaveAttribute(
      "href",
      homeContent.hero.ctas.whatsapp.href,
    );
  });
});
