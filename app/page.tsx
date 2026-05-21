import { Container, Section, Stack } from "@/components/layout";
import { Heading, PrimaryButton, SecondaryButton, Text, WhatsAppButton } from "@/components/ui";

export default function Home() {
  return (
    <Container as="main" className="py-16" size="content" gutter="md">
      <Stack gap="lg">
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
                className="inline-flex min-h-12 items-center justify-center rounded-button bg-brand px-6 py-3 text-base font-semibold text-surface transition hover:bg-brand-strong"
                href="#fundacao"
              >
                Ver base atual
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-button border border-line bg-surface px-6 py-3 text-base font-semibold text-ink transition hover:border-brand/40 hover:bg-brand-soft/40"
                href="#proximos-passos"
              >
                Ver proximas entregas
              </a>
            </Stack>
          }
        />
        <Section
          id="playground-botoes"
          heading={
            <Stack gap="sm">
              <Heading as="h2" size="lg">
                Playground de botoes
              </Heading>
              <Text tone="muted">
                Variacoes completas para validar tamanhos, estados, semantica e tons visuais.
              </Text>
            </Stack>
          }
        >
          <Stack gap="lg">
            <div className="grid gap-6 sm:grid-cols-2">
              <Stack gap="sm">
                <Text size="sm" tone="muted">
                  Primary (button)
                </Text>
                <Stack direction="vertical" gap="sm" className="sm:flex-row sm:items-center">
                  <PrimaryButton size="sm">Primary sm</PrimaryButton>
                  <PrimaryButton size="md">Primary md</PrimaryButton>
                  <PrimaryButton size="lg">Primary lg</PrimaryButton>
                </Stack>
                <Stack direction="vertical" gap="sm" className="sm:flex-row sm:items-center">
                  <PrimaryButton size="sm" disabled>
                    Primary sm
                  </PrimaryButton>
                  <PrimaryButton size="md" disabled>
                    Primary md
                  </PrimaryButton>
                  <PrimaryButton size="lg" disabled>
                    Primary lg
                  </PrimaryButton>
                </Stack>
              </Stack>
              <Stack gap="sm">
                <Text size="sm" tone="muted">
                  Primary (link)
                </Text>
                <Stack direction="vertical" gap="sm" className="sm:flex-row sm:items-center">
                  <PrimaryButton size="sm" href="#playground-botoes">
                    Primary sm
                  </PrimaryButton>
                  <PrimaryButton size="md" href="#playground-botoes">
                    Primary md
                  </PrimaryButton>
                  <PrimaryButton size="lg" href="#playground-botoes">
                    Primary lg
                  </PrimaryButton>
                </Stack>
                <Stack direction="vertical" gap="sm" className="sm:flex-row sm:items-center">
                  <PrimaryButton size="sm" href="#playground-botoes" disabled>
                    Primary sm
                  </PrimaryButton>
                  <PrimaryButton size="md" href="#playground-botoes" disabled>
                    Primary md
                  </PrimaryButton>
                  <PrimaryButton size="lg" href="#playground-botoes" disabled>
                    Primary lg
                  </PrimaryButton>
                </Stack>
              </Stack>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <Stack gap="sm">
                <Text size="sm" tone="muted">
                  Secondary (button)
                </Text>
                <Stack direction="vertical" gap="sm" className="sm:flex-row sm:items-center">
                  <SecondaryButton size="sm">Secondary sm</SecondaryButton>
                  <SecondaryButton size="md">Secondary md</SecondaryButton>
                  <SecondaryButton size="lg">Secondary lg</SecondaryButton>
                </Stack>
                <Stack direction="vertical" gap="sm" className="sm:flex-row sm:items-center">
                  <SecondaryButton size="sm" disabled>
                    Secondary sm
                  </SecondaryButton>
                  <SecondaryButton size="md" disabled>
                    Secondary md
                  </SecondaryButton>
                  <SecondaryButton size="lg" disabled>
                    Secondary lg
                  </SecondaryButton>
                </Stack>
              </Stack>
              <Stack gap="sm">
                <Text size="sm" tone="muted">
                  Secondary (link)
                </Text>
                <Stack direction="vertical" gap="sm" className="sm:flex-row sm:items-center">
                  <SecondaryButton size="sm" href="#playground-botoes">
                    Secondary sm
                  </SecondaryButton>
                  <SecondaryButton size="md" href="#playground-botoes">
                    Secondary md
                  </SecondaryButton>
                  <SecondaryButton size="lg" href="#playground-botoes">
                    Secondary lg
                  </SecondaryButton>
                </Stack>
                <Stack direction="vertical" gap="sm" className="sm:flex-row sm:items-center">
                  <SecondaryButton size="sm" href="#playground-botoes" disabled>
                    Secondary sm
                  </SecondaryButton>
                  <SecondaryButton size="md" href="#playground-botoes" disabled>
                    Secondary md
                  </SecondaryButton>
                  <SecondaryButton size="lg" href="#playground-botoes" disabled>
                    Secondary lg
                  </SecondaryButton>
                </Stack>
              </Stack>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <Stack gap="sm">
                <Text size="sm" tone="muted">
                  WhatsApp (button)
                </Text>
                <Stack direction="vertical" gap="sm" className="sm:flex-row sm:items-center">
                  <WhatsAppButton size="sm">WhatsApp sm</WhatsAppButton>
                  <WhatsAppButton size="md">WhatsApp md</WhatsAppButton>
                  <WhatsAppButton size="lg">WhatsApp lg</WhatsAppButton>
                </Stack>
                <Stack direction="vertical" gap="sm" className="sm:flex-row sm:items-center">
                  <WhatsAppButton size="sm" disabled>
                    WhatsApp sm
                  </WhatsAppButton>
                  <WhatsAppButton size="md" disabled>
                    WhatsApp md
                  </WhatsAppButton>
                  <WhatsAppButton size="lg" disabled>
                    WhatsApp lg
                  </WhatsAppButton>
                </Stack>
              </Stack>
              <Stack gap="sm">
                <Text size="sm" tone="muted">
                  WhatsApp (link)
                </Text>
                <Stack direction="vertical" gap="sm" className="sm:flex-row sm:items-center">
                  <WhatsAppButton size="sm" href="#playground-botoes">
                    WhatsApp sm
                  </WhatsAppButton>
                  <WhatsAppButton size="md" href="#playground-botoes">
                    WhatsApp md
                  </WhatsAppButton>
                  <WhatsAppButton size="lg" href="#playground-botoes">
                    WhatsApp lg
                  </WhatsAppButton>
                </Stack>
                <Stack direction="vertical" gap="sm" className="sm:flex-row sm:items-center">
                  <WhatsAppButton size="sm" href="#playground-botoes" disabled>
                    WhatsApp sm
                  </WhatsAppButton>
                  <WhatsAppButton size="md" href="#playground-botoes" disabled>
                    WhatsApp md
                  </WhatsAppButton>
                  <WhatsAppButton size="lg" href="#playground-botoes" disabled>
                    WhatsApp lg
                  </WhatsAppButton>
                </Stack>
              </Stack>
            </div>
          </Stack>
        </Section>
      </Stack>
    </Container>
  );
}
