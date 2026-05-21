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
import {
  showcaseBadgeTones,
  showcaseButtonSizes,
  showcaseCardSamples,
  showcaseGroupIds,
} from "@/lib/design-system-showcase-fixtures";

export default function DesignSystemPage() {
  return (
    <main>
      <HeaderNav />
      <Container className="py-16" size="content" gutter="md">
        <Stack gap="lg">
          <Section
            heading={
              <Stack gap="sm">
                <Badge tone="brand">Playground canonico</Badge>
                <Heading as="h1" size="xl">
                  Design system APAC
                </Heading>
              </Stack>
            }
            description={
              <Text size="lg" className="max-w-2xl">
                Esta pagina centraliza primitives e componentes em estados representativos para
                revisao visual, manual e automatizada.
              </Text>
            }
          />

          <Section id={showcaseGroupIds.primitives} heading={<Heading as="h2" size="lg">Primitives</Heading>}>
            <Stack gap="md">
              <Heading as="h3" size="sm">Tipografia</Heading>
              <Text size="sm" tone="muted">Texto auxiliar para hierarquia e legibilidade.</Text>
              <Heading as="h3" size="sm">Layout</Heading>
              <Stack direction="horizontal" gap="sm" className="flex-wrap">
                <Badge tone="default">Stack</Badge>
                <Badge tone="info">Container</Badge>
                <Badge tone="success">Section</Badge>
              </Stack>
            </Stack>
          </Section>

          <Section id={showcaseGroupIds.actions} heading={<Heading as="h2" size="lg">Acoes</Heading>}>
            <Stack gap="lg">
              <div className="grid gap-6 sm:grid-cols-3">
                {showcaseButtonSizes.map((size) => (
                  <Stack key={size} gap="sm">
                    <Text size="sm" tone="muted">Tamanho {size}</Text>
                    <PrimaryButton size={size}>Primary {size}</PrimaryButton>
                    <SecondaryButton size={size}>Secondary {size}</SecondaryButton>
                    <WhatsAppButton size={size}>WhatsApp {size}</WhatsAppButton>
                  </Stack>
                ))}
              </div>
            </Stack>
          </Section>

          <Section id={showcaseGroupIds.surfaces} heading={<Heading as="h2" size="lg">Superficies</Heading>}>
            <Stack gap="lg">
              <div className="flex flex-wrap gap-3">
                {showcaseBadgeTones.map((tone) => (
                  <Badge key={tone} tone={tone}>
                    {tone}
                  </Badge>
                ))}
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {showcaseCardSamples.map((sample) => (
                  <Card
                    key={sample.title}
                    surface={sample.surface}
                    padding={sample.padding}
                    title={sample.title}
                    description={sample.description}
                    action={<Badge tone="brand">Amostra</Badge>}
                  />
                ))}
                <Card
                  interactive
                  title="Card interativo"
                  description="Valida foco visivel, hover e comportamento interativo."
                  action={<Badge tone="info">Ativo</Badge>}
                />
              </div>
            </Stack>
          </Section>

          <Section id={showcaseGroupIds.forms} heading={<Heading as="h2" size="lg">Formularios</Heading>}>
            <Stack gap="lg">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Nome completo" required hint="Use o nome do documento.">
                  <Input placeholder="Digite seu nome" />
                </Field>
                <Field label="Telefone" hint="Ex.: (11) 99999-9999">
                  <Input type="tel" placeholder="(11) 99999-9999" />
                </Field>
              </div>
              <Field label="Mensagem" hint="Descreva contexto e necessidade.">
                <Textarea placeholder="Escreva sua mensagem" />
              </Field>
            </Stack>
          </Section>

          <Section id={showcaseGroupIds.navigation} heading={<Heading as="h2" size="lg">Navegacao</Heading>}>
            <Stack gap="sm">
              <Text tone="muted">
                Header e footer desta propria rota funcionam como superficie oficial de validacao
                de navegacao institucional.
              </Text>
              <Stack direction="horizontal" gap="sm" className="flex-wrap">
                <PrimaryButton href="#primitives" size="sm">Ir para primitives</PrimaryButton>
                <SecondaryButton href="#acoes" size="sm">Ir para acoes</SecondaryButton>
              </Stack>
            </Stack>
          </Section>
        </Stack>
      </Container>
      <Footer />
    </main>
  );
}
