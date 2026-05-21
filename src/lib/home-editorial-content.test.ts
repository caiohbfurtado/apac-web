import {
  homeEditorialContent,
  shouldRenderCampaigns,
  shouldRenderSponsors,
} from "@/lib/home-editorial-content";

describe("home editorial content", () => {
  it("permite listas vazias sem forcar seções artificiais", () => {
    expect(shouldRenderCampaigns([])).toBe(false);
    expect(shouldRenderSponsors([])).toBe(false);
  });

  it("reconhece listas com conteúdo real", () => {
    expect(
      shouldRenderCampaigns([
        {
          slug: "campanha-teste",
          badge: "Teste",
          title: "Campanha teste",
          description: "Descricao de teste",
          href: "#",
        },
      ])
    ).toBe(true);

    expect(
      shouldRenderSponsors([
        {
          name: "Patrocinador teste",
          description: "Descricao de teste",
          href: "#",
          logoLabel: "PT",
        },
      ])
    ).toBe(true);

    expect(shouldRenderSponsors(homeEditorialContent.sponsors.items)).toBe(true);
  });
});
