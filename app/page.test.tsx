import Home from "@/app/page";
import { renderWithProviders } from "@/test/test-utils";

describe("Home", () => {
  it("renderiza landing institucional com landmarks, regioes e CTAs principais", () => {
    const { getByRole, getAllByRole, queryByRole, getByLabelText } = renderWithProviders(<Home />);

    expect(getByRole("banner")).toBeInTheDocument();
    expect(getByRole("contentinfo")).toBeInTheDocument();

    expect(
      getByRole("heading", {
        name: /apoio humano para familias em tratamento oncol/i,
      })
    ).toBeInTheDocument();
    expect(getByRole("heading", { name: "Como atuamos" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Precisa de apoio agora?" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Campanhas em andamento" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Confianca e transparencia" })).toBeInTheDocument();

    expect(getAllByRole("link", { name: "Preciso de apoio" }).length).toBeGreaterThan(0);
    expect(getAllByRole("link", { name: "Quero ajudar" }).length).toBeGreaterThan(0);
    const whatsappLinks = getAllByRole("link", { name: "Falar no WhatsApp" });
    expect(whatsappLinks.length).toBeGreaterThan(0);
    whatsappLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "https://wa.me/5511999999999");
    });

    expect(getByRole("link", { name: "Ver playground em /design-system" })).toHaveAttribute(
      "href",
      "/design-system"
    );

    expect(queryByRole("heading", { name: "Playground de botoes" })).not.toBeInTheDocument();
    expect(queryByRole("heading", { name: "Playground de badges e cards" })).not.toBeInTheDocument();
    expect(queryByRole("heading", { name: "Playground de formularios" })).not.toBeInTheDocument();

    expect(getByLabelText(/Nome completo/i)).toBeInTheDocument();
  });
});
