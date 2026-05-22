import {
  homeEditorialContent,
  shouldRenderCampaigns,
  shouldRenderSponsors,
} from "@/lib/home-editorial-content";

describe("home editorial content", () => {
  it("permite listas vazias sem forcar seções artificiais", () => {
    expect(
      shouldRenderCampaigns({
        section: {
          id: "campanhas",
          heading: "Campanhas em destaque",
        },
        items: [],
      }),
    ).toBe(false);
    expect(
      shouldRenderSponsors({
        section: {
          id: "patrocinadores",
          heading: "Patrocinadores e apoiadores",
        },
        items: [],
      }),
    ).toBe(false);
  });

  it("reconhece listas com conteúdo real", () => {
    expect(
      shouldRenderCampaigns({
        section: {
          id: "campanhas",
          heading: "Campanhas em destaque",
        },
        items: [
          {
            slug: "campanha-teste",
            badge: "Teste",
            title: "Campanha teste",
            description: "Descricao de teste",
            href: "#",
          },
        ],
      }),
    ).toBe(true);

    expect(
      shouldRenderSponsors({
        section: {
          id: "patrocinadores",
          heading: "Patrocinadores e apoiadores",
        },
        items: [
          {
            name: "Patrocinador teste",
            description: "Descricao de teste",
            href: "#",
            logoLabel: "PT",
          },
        ],
      }),
    ).toBe(true);

    expect(shouldRenderSponsors(homeEditorialContent.sponsors)).toBe(true);
  });
});
