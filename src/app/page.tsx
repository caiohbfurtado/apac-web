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
import { homeContent } from "@/lib/home-content";
import { hasCampaigns, homeEditorialContent } from "@/lib/home-editorial-content";

const headerItems = [
  { href: `#${homeContent.institution.id}`, label: "Atuacao" },
  { href: `#${homeContent.support.id}`, label: "Apoio" },
  ...(hasCampaigns
    ? [{ href: `#${homeEditorialContent.campaigns.section.id}`, label: "Campanhas" }]
    : []),
  { href: `#${homeContent.trust.id}`, label: "Transparencia" },
] as const;

export default function Home() {
  return (
    <main>
      <HeaderNav items={[...headerItems]} ctas={[
        { href: homeContent.hero.ctas.support.href, label: homeContent.hero.ctas.support.label, variant: "primary" },
        { href: homeContent.hero.ctas.help.href, label: homeContent.hero.ctas.help.label, variant: "secondary" },
      ]} />

      <Container className="py-16" size="content" gutter="md">
        <Stack gap="lg">
          <Section
            id="fundacao"
            heading={
              <Stack gap="sm">
                <Badge tone="brand">{homeContent.hero.badge}</Badge>
                <Heading as="h1" size="xl" className="max-w-3xl">
                  {homeContent.hero.title}
                </Heading>
              </Stack>
            }
            description={
              <Text size="lg" className="max-w-2xl">
                {homeContent.hero.description}
              </Text>
            }
            actions={
              <Stack direction="vertical" gap="sm" className="sm:flex-row">
                <PrimaryButton href={homeContent.hero.ctas.support.href}>
                  {homeContent.hero.ctas.support.label}
                </PrimaryButton>
                <SecondaryButton href={homeContent.hero.ctas.help.href}>
                  {homeContent.hero.ctas.help.label}
                </SecondaryButton>
                <WhatsAppButton href={homeContent.hero.ctas.whatsapp.href}>
                  {homeContent.hero.ctas.whatsapp.label}
                </WhatsAppButton>
              </Stack>
            }
          />

          <Section
            id={homeContent.institution.id}
            surface="muted"
            heading={<Heading as="h2" size="lg">{homeContent.institution.heading}</Heading>}
            description={<Text tone="muted">{homeContent.institution.description}</Text>}
          >
            <div className="grid gap-6 md:grid-cols-3">
              {homeContent.institution.cards.map((card) => (
                <Card key={card.title} title={card.title} description={card.description} />
              ))}
            </div>
          </Section>

          <Section
            id={homeContent.support.id}
            heading={<Heading as="h2" size="lg">{homeContent.support.heading}</Heading>}
            description={<Text tone="muted">{homeContent.support.description}</Text>}
          >
            <Stack gap="lg">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Nome completo" hint="Use o mesmo nome do documento." required>
                  <Input placeholder="Digite seu nome" />
                </Field>
                <Field label="Telefone" hint="Ex.: (11) 99999-9999">
                  <Input type="tel" placeholder="(11) 99999-9999" />
                </Field>
              </div>
              <Field label="Mensagem" hint="Compartilhe o contexto principal da sua necessidade.">
                <Textarea placeholder="Descreva como podemos ajudar" />
              </Field>
              <div className="flex flex-wrap gap-3">
                <PrimaryButton>{homeContent.hero.ctas.support.label}</PrimaryButton>
                <WhatsAppButton href={homeContent.hero.ctas.whatsapp.href}>
                  {homeContent.hero.ctas.whatsapp.label}
                </WhatsAppButton>
              </div>
            </Stack>
          </Section>

          {hasCampaigns ? (
            <Section
              id={homeEditorialContent.campaigns.section.id}
              heading={<Heading as="h2" size="lg">{homeEditorialContent.campaigns.section.heading}</Heading>}
            >
              <div className="grid gap-6 md:grid-cols-2">
                {homeEditorialContent.campaigns.items.map((card) => (
                  <Card
                    key={card.slug}
                    title={card.title}
                    description={card.description}
                    action={<Badge tone="info">{card.badge}</Badge>}
                  />
                ))}
              </div>
            </Section>
          ) : null}

          <Section
            id={homeContent.trust.id}
            surface="muted"
            heading={<Heading as="h2" size="lg">{homeContent.trust.heading}</Heading>}
          >
            <div className="grid gap-6 md:grid-cols-2">
              {homeContent.trust.cards.map((card) => (
                <Card key={card.title} title={card.title} description={card.description} />
              ))}
            </div>
          </Section>

          <Section
            id={homeContent.closing.id}
            heading={<Heading as="h2" size="lg">{homeContent.closing.heading}</Heading>}
            description={<Text tone="muted">{homeContent.closing.description}</Text>}
            actions={
              <Stack direction="vertical" gap="sm" className="sm:flex-row">
                <PrimaryButton href={homeContent.hero.ctas.help.href}>
                  {homeContent.hero.ctas.help.label}
                </PrimaryButton>
                <SecondaryButton href="/design-system">Ver playground em /design-system</SecondaryButton>
              </Stack>
            }
          />
        </Stack>
      </Container>

      <Footer
        primaryLinks={{
          title: "Institucional",
          ariaLabel: "Links institucionais",
          links: [
            { href: `#${homeContent.institution.id}`, label: "Atuacao" },
            { href: `#${homeContent.support.id}`, label: "Preciso de apoio" },
            { href: `#${homeContent.closing.id}`, label: "Quero ajudar" },
            { href: `#${homeContent.trust.id}`, label: "Transparencia" },
          ],
        }}
      />
    </main>
  );
}
