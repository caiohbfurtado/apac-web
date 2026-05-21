import { render, screen, within } from "@testing-library/react";
import {
  HomeClosingSection,
  HomeHeroSection,
  HomeInstitutionSection,
  HomeSupportSection,
  HomeTrustSection,
} from "./HomeSections";
import { homeContent } from "@/lib/home-content";

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
  it("renders a low-friction support path with explicit steps and contact channels", () => {
    render(<HomeSupportSection content={homeContent.support} />);

    expect(
      screen.getByRole("heading", {
        name: "Preciso de apoio",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Sem formulário longo nem espera desnecessária")).toBeInTheDocument();
    expect(screen.getByText("Escolha o canal")).toBeInTheDocument();
    expect(screen.getByText("Conte o contexto")).toBeInTheDocument();
    expect(screen.getByText("Receba orientação")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: homeContent.hero.ctas.support.label }),
    ).toHaveAttribute("href", homeContent.hero.ctas.support.href);
    expect(
      screen.getByRole("link", { name: homeContent.hero.ctas.whatsapp.label }),
    ).toHaveAttribute("href", homeContent.hero.ctas.whatsapp.href);
    expect(screen.getByRole("link", { name: /\(11\) 3456-0000/i })).toHaveAttribute(
      "href",
      "tel:+551134560000",
    );
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
