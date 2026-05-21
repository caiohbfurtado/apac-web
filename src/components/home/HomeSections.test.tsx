import { render, screen, within } from "@testing-library/react";
import { HomeHeroSection } from "./HomeSections";
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
