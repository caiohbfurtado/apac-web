export const showcaseGroupIds = {
  primitives: "primitives",
  actions: "acoes",
  surfaces: "superficies",
  forms: "formularios",
  navigation: "navegacao",
} as const;

export const showcaseBadgeTones = ["default", "brand", "success", "info"] as const;

export const showcaseButtonSizes = ["sm", "md", "lg"] as const;

export const showcaseCardSamples = [
  {
    title: "Card default",
    description: "Base neutra para blocos de conteudo.",
    surface: "default",
    padding: "sm",
  },
  {
    title: "Card muted",
    description: "Superficie suave para agrupamentos secundarios.",
    surface: "muted",
    padding: "md",
  },
  {
    title: "Card brand",
    description: "Uso pontual para destacar um bloco institucional.",
    surface: "brand",
    padding: "lg",
  },
] as const;
