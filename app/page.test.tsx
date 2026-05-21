import Home from "@/app/page";
import { renderWithProviders } from "@/test/test-utils";

describe("Home", () => {
  it("remove o template padrao e apresenta a base institucional", () => {
    const { getByRole, getByText, getByLabelText } = renderWithProviders(<Home />);

    expect(getByText("Design system em fundacao")).toBeInTheDocument();
    expect(
      getByRole("heading", {
        name: /a base institucional da apac agora comeca por um tema unico/i,
      })
    ).toBeInTheDocument();
    expect(
      getByRole("link", {
        name: "Ver base atual",
      })
    ).toHaveAttribute("href", "#fundacao");
    expect(
      getByRole("link", {
        name: "Ver proximas entregas",
      })
    ).toHaveAttribute("href", "#proximos-passos");
    expect(
      getByRole("heading", {
        name: "Playground de formularios",
      })
    ).toBeInTheDocument();
    expect(
      getByRole("navigation", {
        name: "Links institucionais",
      })
    ).toBeInTheDocument();
    expect(getByLabelText(/Nome completo/i)).toBeInTheDocument();
    expect(getByText("Erro: Informe um e-mail valido para retorno.")).toBeInTheDocument();
  });
});
