import type { ReactElement, ReactNode } from "react";
import RootLayout, { metadata } from "@/app/layout";

describe("RootLayout", () => {
  it("aplica idioma institucional e estrutura base do sistema", () => {
    const layout = RootLayout({
      children: <main>Conteudo institucional</main>,
    }) as ReactElement<{
      children: ReactElement<{
        children: [ReactElement<{ href: string; children: ReactNode }>, ReactElement<{ children: ReactNode; className: string }>];
        className: string;
      }>;
      className: string;
      lang: string;
    }>;

    expect(layout.props.lang).toBe("pt-BR");
    expect(layout.props.className).toContain("bg-canvas");

    const body = layout.props.children;
    const [skipLink, wrapper] = body.props.children;

    expect(body.props.className).toContain("font-sans");
    expect(body.props.className).toContain("leading-7");
    expect(skipLink.props.href).toBe("#main-content");
    expect(skipLink.props.children).toBe("Pular para o conteúdo principal");
    expect(wrapper.props.className).toContain("flex");
  });

  it("expõe metadata institucional base", () => {
    expect(metadata.applicationName).toBe("APAC");
    expect(metadata.description).toContain("Base institucional da APAC");

    if (typeof metadata.title === "object" && metadata.title) {
      expect(metadata.title.default).toBe("APAC | Presenca institucional digital");
      expect(metadata.title.template).toBe("%s | APAC");
    } else {
      throw new Error("Metadata title deveria usar objeto com default e template");
    }
  });
});
