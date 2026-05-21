import { Container, Footer, HeaderNav, Section, Stack } from "@/components/layout";
import {
  Badge,
  Card,
  Field,
  Heading,
  Input,
  PrimaryButton,
  SecondaryButton,
  Text,
  Textarea,
  WhatsAppButton,
} from "@/components/ui";

export default function Home() {
  return (
    <main>
      <HeaderNav />
      <Container className="py-16" size="content" gutter="md">
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
        <Section
          id="playground-badges-cards"
          heading={
            <Stack gap="sm">
              <Heading as="h2" size="lg">
                Playground de badges e cards
              </Heading>
              <Text tone="muted">
                Variacoes representativas para validar tom, superficie, padding e estados interativos.
              </Text>
            </Stack>
          }
        >
          <Stack gap="lg">
            <div className="space-y-3">
              <Text size="sm" tone="muted">
                Badge (tones)
              </Text>
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone="default">Default</Badge>
                <Badge tone="brand">Brand</Badge>
                <Badge tone="success">Success</Badge>
                <Badge tone="info">Info</Badge>
              </div>
            </div>
            <div className="space-y-3">
              <Text size="sm" tone="muted">
                Card (surfaces e padding)
              </Text>
              <div className="grid gap-6 sm:grid-cols-2">
                <Card
                  surface="default"
                  padding="sm"
                  title="Card default sm"
                  description="Base neutra para blocos institucionais."
                  action={<PrimaryButton size="sm">Explorar</PrimaryButton>}
                >
                  <Text size="sm" tone="muted">
                    Conteudo livre para descricao complementar.
                  </Text>
                </Card>
                <Card
                  surface="muted"
                  padding="md"
                  title="Card muted md"
                  description="Superficie suave para agrupamentos recorrentes."
                  action={<SecondaryButton size="sm">Saiba mais</SecondaryButton>}
                />
                <Card
                  surface="brand"
                  padding="lg"
                  title="Card brand lg"
                  description="Destaque institucional com camada de marca."
                  action={<Badge tone="brand">Destaque</Badge>}
                >
                  <Text size="sm" tone="muted">
                    Use com parcimonia para nao competir com o CTA principal.
                  </Text>
                </Card>
                <Card
                  interactive
                  title="Card interativo"
                  description="Valida foco visivel, hover e semantica segura."
                  action={<Badge tone="info">Ativo</Badge>}
                />
              </div>
            </div>
            <div className="space-y-3">
              <Text size="sm" tone="muted">
                Card (link)
              </Text>
              <Card
                as="a"
                href="#playground-badges-cards"
                interactive
                title="Card como link"
                description="Exemplo de card acionavel com semantica de link."
                action={<Badge tone="info">Ancora</Badge>}
              />
            </div>
          </Stack>
        </Section>
        <Section
          id="quero-ajudar"
          heading={
            <Stack gap="sm">
              <Heading as="h2" size="lg">
                Playground de formularios
              </Heading>
              <Text tone="muted">
                Estados essenciais de field, input e textarea com associacao semantica e foco visivel.
              </Text>
            </Stack>
          }
        >
          <Stack gap="lg">
            <div id="preciso-apoio" className="grid gap-6 sm:grid-cols-2">
              <Field
                label="Nome completo"
                hint="Use o mesmo nome do documento para agilizar o atendimento."
                required
              >
                <Input placeholder="Digite seu nome" />
              </Field>
              <Field label="Telefone" hint="Ex.: (11) 99999-9999">
                <Input type="tel" placeholder="(11) 99999-9999" />
              </Field>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field
                label="E-mail"
                error="Informe um e-mail valido para retorno."
                required
              >
                <Input
                  type="email"
                  placeholder="nome@exemplo.org"
                  defaultValue="contato@"
                />
              </Field>
              <Field label="Campo desabilitado" hint="Exemplo de estado neutro sem hover.">
                <Input disabled defaultValue="Sem permissao de edicao" />
              </Field>
            </div>
            <Field
              label="Mensagem"
              hint="Compartilhe o contexto principal para receber apoio adequado."
            >
              <Textarea placeholder="Descreva sua necessidade..." />
            </Field>
          </Stack>
        </Section>
        </Stack>
      </Container>
      <Footer />
    </main>
  );
}
