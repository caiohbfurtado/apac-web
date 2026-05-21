import { render, screen } from "@testing-library/react";
import { Field } from "./Field";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

describe("Field, Input e Textarea", () => {
  it("associa label e input corretamente", () => {
    render(
      <Field label="Nome completo">
        <Input />
      </Field>,
    );

    expect(screen.getByLabelText("Nome completo")).toBeInTheDocument();
  });

  it("conecta hint e erro no aria-describedby e marca estado invalido", () => {
    render(
      <Field label="E-mail" hint="Use um e-mail ativo." error="Campo obrigatorio.">
        <Input />
      </Field>,
    );

    const input = screen.getByRole("textbox", { name: "E-mail" });
    const hint = screen.getByText("Use um e-mail ativo.");
    const error = screen.getByRole("alert");

    expect(input).toHaveAttribute(
      "aria-describedby",
      `${hint.getAttribute("id")} ${error.getAttribute("id")}`,
    );
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveClass("border-brand-strong");
    expect(error).toHaveTextContent("Erro: Campo obrigatorio.");
  });

  it("aplica required no campo e indicativo visual no label", () => {
    render(
      <Field label="Mensagem" required>
        <Textarea />
      </Field>,
    );

    const textarea = screen.getByRole("textbox", { name: "Mensagem" });
    expect(textarea).toBeRequired();
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("preserva composicao com ids customizados", () => {
    render(
      <Field id="campo-personalizado" label="Telefone" hint="DDD + numero">
        <Input />
      </Field>,
    );

    const input = screen.getByRole("textbox", { name: "Telefone" });
    expect(input).toHaveAttribute("id", "campo-personalizado");
    expect(input).toHaveAttribute("aria-describedby", "campo-personalizado-hint");
  });

  it("sincroniza htmlFor com id customizado do controle", () => {
    render(
      <Field label="Contato" hint="Informe um telefone de retorno">
        <Input id="custom-id" />
      </Field>,
    );

    expect(screen.getByLabelText("Contato")).toHaveAttribute("id", "custom-id");
    expect(screen.getByText("Contato").tagName).toBe("LABEL");
    expect(screen.getByText("Contato")).toHaveAttribute("for", "custom-id");
    expect(screen.getByRole("textbox", { name: "Contato" })).toHaveAttribute(
      "aria-describedby",
      "custom-id-hint",
    );
  });
});
