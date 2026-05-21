import { Container, Section, Stack } from "@/components/layout";
import { Heading, Text } from "@/components/ui";

export default function Home() {
  return (
    <Container
      as="main"
      className="flex flex-1 items-center justify-center py-16"
      size="content"
      gutter="md"
    >
      <Section
        id="fundacao"
        className="animate-fade-in-up"
        heading={
          <Stack gap="sm">
            <span className="inline-flex w-fit rounded-full border border-brand/20 bg-brand-soft px-4 py-2 text-sm font-semibold tracking-[0.12em] text-brand-strong uppercase">
              Design system em fundacao
            </span>
            <Heading as="h1" size="xl" className="max-w-2xl">
              A base institucional da APAC agora comeca por um tema unico e consistente.
            </Heading>
          </Stack>
        }
        description={
          <Stack gap="md">
            <Text size="lg" className="max-w-2xl">
              Esta pagina temporaria remove os residuos do template padrao e prepara o terreno
              para as proximas etapas do design system, priorizando mobile-first, acessibilidade
              e uma presenca visual mais confiavel.
            </Text>
            <Text
              id="proximos-passos"
              size="sm"
              tone="muted"
              className="max-w-2xl font-medium tracking-[0.08em] uppercase"
            >
              Proximas entregas: primitives, componentes base, vitrine interna e reescrita
              institucional da home.
            </Text>
          </Stack>
        }
        actions={
          <Stack direction="vertical" gap="sm" className="sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-strong"
              href="#fundacao"
            >
              Ver base atual
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-line bg-white px-6 py-3 text-base font-semibold text-ink transition hover:border-brand/40 hover:bg-brand-soft/40"
              href="#proximos-passos"
            >
              Ver proximas entregas
            </a>
          </Stack>
        }
      />
    </Container>
  );
}
