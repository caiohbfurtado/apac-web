import Home from "@/app/page";
import { renderWithProviders } from "@/test/test-utils";

describe("Home", () => {
  it("renderiza landing institucional com landmarks, regioes e CTAs principais", () => {
    const { getByRole, getAllByRole, queryByRole, queryByText } = renderWithProviders(<Home />);

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

    expect(getAllByRole("link", { name: "Preciso de apoio" }).length).toBeGreaterThan(0);
    expect(getAllByRole("link", { name: "Quero ajudar" }).length).toBeGreaterThan(0);
    expect(getAllByRole("link", { name: "Saiba mais" }).length).toBeGreaterThan(0);
    const whatsappLinks = getAllByRole("link", { name: "Falar no WhatsApp" });
    expect(whatsappLinks.length).toBeGreaterThan(0);
    whatsappLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "https://wa.me/5511999999999");
    });

    expect(queryByRole("heading", { name: "Playground de botoes" })).not.toBeInTheDocument();
    expect(queryByRole("heading", { name: "Playground de badges e cards" })).not.toBeInTheDocument();
    expect(queryByRole("heading", { name: "Playground de formularios" })).not.toBeInTheDocument();
    expect(queryByRole("heading", { name: "Patrocinadores e apoiadores" })).not.toBeInTheDocument();
    expect(queryByText(/Nome completo/i)).not.toBeInTheDocument();
  });
});
