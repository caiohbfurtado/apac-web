import { HomePage } from "@/app/page";
import { homeContent } from "@/lib/home-content";
import { type HomeEditorialContent, homeEditorialContent } from "@/lib/home-editorial-content";
import { renderWithProviders } from "@/test/test-utils";
import { within } from "@testing-library/react";

function createEditorialContent(
  overrides: Partial<HomeEditorialContent> = {},
): HomeEditorialContent {
  return {
    campaigns: overrides.campaigns ?? homeEditorialContent.campaigns,
    sponsors: overrides.sponsors ?? homeEditorialContent.sponsors,
  };
}

describe("HomePage", () => {
  it("renderiza landing institucional com landmarks, regioes e CTAs principais", () => {
    const { getByRole, getAllByRole, queryByRole, queryByText } = renderWithProviders(<HomePage />);
    const banner = getByRole("banner");
    const main = getByRole("main");
    const headerNav = getByRole("navigation", { name: "Principal" });
    const footerNav = getByRole("contentinfo");

    expect(getByRole("banner")).toBeInTheDocument();
    expect(main).toHaveAttribute("id", "main-content");
    expect(getByRole("contentinfo")).toBeInTheDocument();
    expect(main).not.toContainElement(banner);
    expect(main).not.toContainElement(footerNav);

    expect(
      getByRole("heading", {
        level: 1,
        name: /acolhimento, apoio e esperança para pessoas em tratamento contra o câncer/i,
      })
    ).toBeInTheDocument();
    expect(getByRole("heading", { level: 2, name: "Como a APAC ajuda" })).toBeInTheDocument();
    expect(getByRole("heading", { level: 2, name: "Preciso de apoio" })).toBeInTheDocument();
    expect(getByRole("heading", { level: 2, name: "Como ajudar" })).toBeInTheDocument();
    expect(getByRole("heading", { level: 2, name: "Campanhas em destaque" })).toBeInTheDocument();
    expect(getByRole("heading", { level: 2, name: "Transparência e confiança" })).toBeInTheDocument();
    expect(getByRole("heading", { level: 2, name: "Patrocinadores e apoiadores" })).toBeInTheDocument();
    expect(
      getByRole("heading", {
        level: 2,
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
    expect(within(headerNav).getByRole("link", { name: "Quero ajudar" })).toHaveAttribute(
      "href",
      `#${homeContent.contribution.id}`,
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
    expect(
      within(banner)
        .getAllByRole("link", { name: "Quero ajudar" })
        .some((link) => link.getAttribute("href") === `#${homeContent.contribution.id}`),
    ).toBe(true);

    [
      homeContent.hero.id,
      homeContent.institution.id,
      homeContent.support.id,
      homeContent.contribution.id,
      homeEditorialContent.campaigns.section.id,
      homeContent.trust.id,
      homeEditorialContent.sponsors.section.id,
      homeContent.closing.id,
    ].forEach((sectionId) => {
      expect(document.getElementById(sectionId)).toBeInTheDocument();
    });

    const narrativeOrder = [
      homeContent.hero.id,
      homeContent.institution.id,
      homeContent.support.id,
      homeContent.contribution.id,
      homeEditorialContent.campaigns.section.id,
      homeContent.trust.id,
      homeEditorialContent.sponsors.section.id,
      homeContent.closing.id,
    ].map((sectionId) => document.getElementById(sectionId));

    narrativeOrder.forEach((section) => {
      expect(section).not.toBeNull();
    });
    expect(
      narrativeOrder.every((section, index, sections) => {
        if (!section || index === 0) {
          return true;
        }

        const previousSection = sections[index - 1];
        return previousSection ? previousSection.compareDocumentPosition(section) & Node.DOCUMENT_POSITION_FOLLOWING : false;
      }),
    ).toBe(true);

    const heroSection = document.getElementById(homeContent.hero.id);
    const supportSection = document.getElementById(homeContent.support.id);

    expect(heroSection).not.toBeNull();
    expect(supportSection).not.toBeNull();

    if (heroSection) {
      const heroLinks = within(heroSection).getAllByRole("link");
      const heroCtas = heroLinks
        .map((link) => link.textContent?.trim())
        .filter((label): label is string =>
          [
            homeContent.hero.ctas.support.label,
            homeContent.hero.ctas.help.label,
            homeContent.hero.ctas.whatsapp.label,
          ].includes(label ?? ""),
        );

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
      expect(heroCtas).toEqual([
        homeContent.hero.ctas.support.label,
        homeContent.hero.ctas.help.label,
        homeContent.hero.ctas.whatsapp.label,
      ]);
    }

    if (supportSection) {
      expect(within(supportSection).getByRole("link", { name: homeContent.hero.ctas.whatsapp.label })).toHaveAttribute(
        "href",
        homeContent.hero.ctas.whatsapp.href,
      );
      expect(within(supportSection).getByRole("link", { name: "Ligar agora" })).toHaveAttribute(
        "href",
        "tel:+551534560000",
      );
    }

    expect(getAllByRole("link", { name: "Saiba mais" }).length).toBeGreaterThan(0);
    const whatsappLinks = getAllByRole("link", { name: "Falar no WhatsApp" });
    expect(whatsappLinks.length).toBeGreaterThan(0);
    whatsappLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "https://wa.me/5515997268405");
    });

    expect(queryByRole("heading", { name: "Playground de botoes" })).not.toBeInTheDocument();
    expect(queryByRole("heading", { name: "Playground de badges e cards" })).not.toBeInTheDocument();
    expect(queryByRole("heading", { name: "Playground de formularios" })).not.toBeInTheDocument();
    expect(getByRole("heading", { name: "Patrocinadores e apoiadores" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Marca parceira" })).toBeInTheDocument();
    expect(queryByText(/Nome completo/i)).not.toBeInTheDocument();

    expect(within(footerNav).getByRole("navigation", { name: "Links institucionais" })).toBeInTheDocument();
    expect(within(footerNav).getByRole("navigation", { name: "Canais de contato" })).toBeInTheDocument();
    expect(within(footerNav).getByRole("link", { name: "Transparência" })).toHaveAttribute(
      "href",
      `#${homeContent.trust.id}`,
    );
    expect(within(footerNav).getByRole("link", { name: "Falar no WhatsApp" })).toHaveAttribute(
      "href",
      homeContent.hero.ctas.whatsapp.href,
    );

    const closingSection = document.getElementById(homeContent.closing.id);
    expect(closingSection).not.toBeNull();

    if (closingSection) {
      const closingCtas = within(closingSection)
        .getAllByRole("link")
        .map((link) => link.textContent?.trim());

      expect(closingCtas).toEqual([
        homeContent.hero.ctas.help.label,
        homeContent.hero.ctas.support.label,
        homeContent.hero.ctas.whatsapp.label,
      ]);
    }
  });

  it("omite a secao de campanhas e o link de ancora quando nao houver campanhas", () => {
    const editorialContent = createEditorialContent({
      campaigns: {
        ...homeEditorialContent.campaigns,
        items: [],
      },
    });

    const { getByRole, queryByRole } = renderWithProviders(
      <HomePage editorialContent={editorialContent} />,
    );
    const headerNav = getByRole("navigation", { name: "Principal" });

    expect(queryByRole("heading", { name: "Campanhas em destaque" })).not.toBeInTheDocument();
    expect(within(headerNav).queryByRole("link", { name: "Campanhas" })).not.toBeInTheDocument();
    expect(document.getElementById(homeEditorialContent.campaigns.section.id)).not.toBeInTheDocument();
    expect(getByRole("heading", { name: "Patrocinadores e apoiadores" })).toBeInTheDocument();
  });

  it("omite a secao de apoiadores e o link de ancora quando nao houver patrocinadores", () => {
    const editorialContent = createEditorialContent({
      sponsors: {
        ...homeEditorialContent.sponsors,
        items: [],
      },
    });

    const { getByRole, queryByRole } = renderWithProviders(
      <HomePage editorialContent={editorialContent} />,
    );
    const headerNav = getByRole("navigation", { name: "Principal" });

    expect(queryByRole("heading", { name: "Patrocinadores e apoiadores" })).not.toBeInTheDocument();
    expect(within(headerNav).queryByRole("link", { name: "Patrocinadores" })).not.toBeInTheDocument();
    expect(document.getElementById(homeEditorialContent.sponsors.section.id)).not.toBeInTheDocument();
    expect(getByRole("heading", { name: "Campanhas em destaque" })).toBeInTheDocument();
  });

  it("mantem a narrativa equilibrada quando campanhas e apoiadores nao estiverem disponiveis", () => {
    const editorialContent = createEditorialContent({
      campaigns: {
        ...homeEditorialContent.campaigns,
        items: [],
      },
      sponsors: {
        ...homeEditorialContent.sponsors,
        items: [],
      },
    });

    const { getByRole, queryByRole } = renderWithProviders(
      <HomePage editorialContent={editorialContent} />,
    );
    const headerNav = getByRole("navigation", { name: "Principal" });

    expect(queryByRole("heading", { name: "Campanhas em destaque" })).not.toBeInTheDocument();
    expect(queryByRole("heading", { name: "Patrocinadores e apoiadores" })).not.toBeInTheDocument();
    expect(within(headerNav).queryByRole("link", { name: "Campanhas" })).not.toBeInTheDocument();
    expect(within(headerNav).queryByRole("link", { name: "Patrocinadores" })).not.toBeInTheDocument();

    const supportSection = document.getElementById(homeContent.support.id);
    const trustSection = document.getElementById(homeContent.trust.id);
    const closingSection = document.getElementById(homeContent.closing.id);

    expect(supportSection).not.toBeNull();
    expect(trustSection).not.toBeNull();
    expect(closingSection).not.toBeNull();

    if (supportSection && trustSection && closingSection) {
      expect(supportSection.compareDocumentPosition(trustSection) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
      expect(trustSection.compareDocumentPosition(closingSection) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    }
  });
});
