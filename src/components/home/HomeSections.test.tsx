import { render, screen, within } from "@testing-library/react";
import {
  HomeCampaignsSection,
  HomeClosingSection,
  HomeHeroSection,
  HomeInstitutionSection,
  HomeSponsorsSection,
  HomeSupportSection,
  HomeTrustSection,
} from "./HomeSections";
import { homeContent } from "@/lib/home-content";
import { homeEditorialContent } from "@/lib/home-editorial-content";

describe("HomeHeroSection", () => {
  it("renders the hero narrative and the prioritized CTAs", () => {
    render(<HomeHeroSection content={homeContent.hero} />);

    expect(
      screen.getByRole("heading", {
        name: /acolhimento, apoio e esperança para pessoas em tratamento contra o câncer/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: homeContent.hero.ctas.support.label }),
    ).toHaveAttribute("href", homeContent.hero.ctas.support.href);
    expect(
      screen.getByRole("link", { name: homeContent.hero.ctas.help.label }),
    ).toHaveAttribute("href", homeContent.hero.ctas.help.href);
    expect(
      screen.getByRole("link", { name: homeContent.hero.ctas.whatsapp.label }),
    ).toHaveAttribute("href", homeContent.hero.ctas.whatsapp.href);
  });

  it("renders the institutional contact block and stable visual placeholder", () => {
    render(<HomeHeroSection content={homeContent.hero} />);

    const contactCard = screen.getByRole("heading", { name: "Fale com a APAC" }).closest("article");
    expect(contactCard).toBeTruthy();
    expect(screen.getByText(homeContent.hero.contact.description)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /\(11\) 3456-0000/i })).toHaveAttribute(
      "href",
      "tel:+551134560000",
    );
    expect(screen.getByText(/escuta inicial, rede de apoio e acompanhamento contínuo/i)).toBeInTheDocument();
    expect(screen.queryByText(/espaço visual reservado/i)).not.toBeInTheDocument();

    if (contactCard) {
      expect(within(contactCard).getByText(homeContent.hero.contact.items[0].note)).toBeInTheDocument();
    }
  });
});

describe("HomeInstitutionSection", () => {
  it("renders the highlight band and the explanatory cards", () => {
    render(<HomeInstitutionSection content={homeContent.institution} />);

    expect(
      screen.getByRole("heading", {
        name: "Como a APAC ajuda",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Acolhimento inicial")).toBeInTheDocument();
    expect(screen.getByText("Orientação prática")).toBeInTheDocument();
    expect(screen.getByText("Acompanhamento contínuo")).toBeInTheDocument();
    expect(screen.getByText(/para pessoas em tratamento/i)).toBeInTheDocument();
    expect(screen.getByText(/para famílias e cuidadores/i)).toBeInTheDocument();
    expect(screen.getByText(/para quem apoia a rede/i)).toBeInTheDocument();
  });
});

describe("HomeSupportSection", () => {
  it("renders a low-friction support path with a rail layout and clear CTAs", () => {
    render(<HomeSupportSection content={homeContent.support} />);

    expect(
      screen.getByRole("heading", {
        name: "Preciso de apoio",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Acesso direto")).toBeInTheDocument();
    expect(screen.getByText("Comece por aqui")).toBeInTheDocument();
    expect(screen.getByText("Escolha o canal")).toBeInTheDocument();
    expect(screen.getByText("Conte o contexto")).toBeInTheDocument();
    expect(screen.getByText(/Depois do primeiro contato/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: homeContent.hero.ctas.whatsapp.label }),
    ).toHaveAttribute("href", homeContent.hero.ctas.whatsapp.href);
    expect(
      screen.getByRole("link", { name: "Ligar agora" }),
    ).toHaveAttribute("href", "tel:+551134560000");
  });
});

describe("HomeTrustSection", () => {
  it("renders the credibility block with clear supporting claims", () => {
    render(<HomeTrustSection content={homeContent.trust} />);

    expect(
      screen.getByRole("heading", {
        name: "Transparência e confiança",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Prestacao de contas")).toBeInTheDocument();
    expect(screen.getByText("Rede parceira")).toBeInTheDocument();
    expect(screen.getByText("Governança clara")).toBeInTheDocument();
  });
});

describe("HomeCampaignsSection", () => {
  it("renders highlighted campaigns with an explicit CTA for each card", () => {
    render(<HomeCampaignsSection content={homeEditorialContent.campaigns} />);

    expect(
      screen.getByRole("heading", {
        name: "Campanhas em destaque",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/ações sazonais e mobilizações que aparecem na home/i),
    ).toBeInTheDocument();
    expect(screen.getByText("Cesta de cuidado")).toBeInTheDocument();
    expect(screen.getByText("Voluntariado de escuta")).toBeInTheDocument();

    const campaignLinks = screen.getAllByRole("link", { name: "Saiba mais" });
    expect(campaignLinks).toHaveLength(homeEditorialContent.campaigns.items.length);
    expect(campaignLinks[0]).toHaveAttribute(
      "href",
      homeEditorialContent.campaigns.items[0].href,
    );
    expect(campaignLinks[1]).toHaveAttribute(
      "href",
      homeEditorialContent.campaigns.items[1].href,
    );
  });

  it("returns null when there are no campaign items", () => {
    const { container } = render(
      <HomeCampaignsSection
        content={{
          section: {
            id: "campanhas",
            heading: "Campanhas em destaque",
          },
          items: [],
        }}
      />,
    );

    expect(container).toBeEmptyDOMElement();
  });
});

describe("HomeSponsorsSection", () => {
  it("renders sponsors as a compact grid of logo tiles with contextual copy", () => {
    render(<HomeSponsorsSection content={homeEditorialContent.sponsors} />);

    expect(
      screen.getByRole("heading", {
        name: "Patrocinadores e apoiadores",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/tiles leves, com espaço reservado para logos/i),
    ).toBeInTheDocument();
    expect(screen.getByText("Marca parceira")).toBeInTheDocument();
    expect(screen.getByText("Apoiador local")).toBeInTheDocument();
    expect(screen.getByText("Rede solidária")).toBeInTheDocument();
    expect(screen.getByText("Patrocínio institucional")).toBeInTheDocument();

    const sponsorLinks = screen.getAllByRole("link", { name: /ver apoio/i });
    expect(sponsorLinks).toHaveLength(homeEditorialContent.sponsors.items.length);
    expect(screen.getByText("MP")).toBeInTheDocument();
    expect(screen.getByText("AL")).toBeInTheDocument();
    expect(screen.getByText("RS")).toBeInTheDocument();
    expect(screen.getByText("PI")).toBeInTheDocument();
  });

  it("returns null when there are no sponsor items", () => {
    const { container } = render(
      <HomeSponsorsSection
        content={{
          section: {
            id: "patrocinadores",
            heading: "Patrocinadores e apoiadores",
            description: "Lista vazia para validar a renderizacao condicional.",
          },
          items: [],
        }}
      />,
    );

    expect(container).toBeEmptyDOMElement();
  });
});

describe("HomeClosingSection", () => {
  it("renders the closing CTA surface and the final help actions", () => {
    render(<HomeClosingSection content={homeContent.closing} />);

    expect(
      screen.getByRole("heading", {
        name: /sua contribuição amplia o cuidado\./i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(homeContent.closing.description)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: homeContent.hero.ctas.help.label }),
    ).toHaveAttribute("href", homeContent.hero.ctas.help.href);
    expect(
      screen.getByRole("link", { name: homeContent.hero.ctas.support.label }),
    ).toHaveAttribute("href", homeContent.hero.ctas.support.href);
  });
});
