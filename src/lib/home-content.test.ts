import { homeContent } from "@/lib/home-content";

describe("home content", () => {
  it("expõe contratos locais ricos para hero, apoio e contribuição", () => {
    expect(homeContent.hero.highlights).toHaveLength(4);
    expect(homeContent.hero.contact.notice).toMatch(/confirmados diretamente com a APAC/i);
    expect(homeContent.support.notice).toMatch(/não coleta dados sensíveis/i);
    expect(homeContent.support.channels).toHaveLength(3);
    expect(homeContent.support.ctas.whatsapp.label).toBe("Falar no WhatsApp");
    expect(homeContent.support.ctas.phone.label).toBe("Ligar agora");
    expect(homeContent.contribution.trails).toHaveLength(4);
    expect(homeContent.contribution.trails[0].title).toBe("Doação financeira");
    expect(homeContent.contribution.trails[3].href).toContain("empresa");
    expect(homeContent.closing.id).toBe("fechamento");
  });
});
