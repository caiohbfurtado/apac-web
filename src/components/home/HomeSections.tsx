import { Section, Stack } from "@/components/layout";
import {
  Badge,
  Card,
  Heading,
  PrimaryButton,
  SecondaryButton,
  Text,
  WhatsAppButton,
} from "@/components/ui";
import { homeContent } from "@/lib/home-content";
import { homeEditorialContent } from "@/lib/home-editorial-content";

type HomeHeroContent = typeof homeContent.hero;
type HomeInstitutionContent = typeof homeContent.institution;
type HomeSupportContent = typeof homeContent.support;
type HomeTrustContent = typeof homeContent.trust;
type HomeClosingContent = typeof homeContent.closing;
type HomeCampaignsContent = typeof homeEditorialContent.campaigns;
type HomeSponsorsContent = typeof homeEditorialContent.sponsors;

type HomeHeroSectionProps = {
  content: HomeHeroContent;
};

type HomeInstitutionSectionProps = {
  content: HomeInstitutionContent;
};

type HomeSupportSectionProps = {
  content: HomeSupportContent;
};

type HomeTrustSectionProps = {
  content: HomeTrustContent;
};

type HomeClosingSectionProps = {
  content: HomeClosingContent;
};

type HomeCampaignsSectionProps = {
  content: HomeCampaignsContent;
};

type HomeSponsorsSectionProps = {
  content: HomeSponsorsContent;
};

export function HomeHeroSection({ content }: HomeHeroSectionProps) {
  return (
    <Section
      id={content.id}
      spacing="loose"
      heading={
        <Stack gap="sm">
          <Badge tone="brand">{content.badge}</Badge>
          <Heading as="h1" size="xl" className="max-w-3xl">
            {content.title}
          </Heading>
        </Stack>
      }
      description={
        <Text size="lg" className="max-w-2xl">
          {content.description}
        </Text>
      }
      actions={
        <Stack direction="vertical" gap="sm" className="sm:flex-row">
          <PrimaryButton href={content.ctas.support.href}>{content.ctas.support.label}</PrimaryButton>
          <SecondaryButton href={content.ctas.help.href}>{content.ctas.help.label}</SecondaryButton>
          <WhatsAppButton href={content.ctas.whatsapp.href}>
            {content.ctas.whatsapp.label}
          </WhatsAppButton>
        </Stack>
      }
    >
      <Card
        surface="brand"
        padding="lg"
        title="O que acontece no primeiro contato"
        description="Uma triagem simples para entender a necessidade e orientar o melhor proximo passo."
      >
        <ul className="space-y-3 text-sm text-ink/80">
          <li>Escuta inicial sem burocracia.</li>
          <li>Direcionamento para a rede certa.</li>
          <li>Canal humano para retorno rapido.</li>
        </ul>
      </Card>
    </Section>
  );
}

export function HomeInstitutionSection({ content }: HomeInstitutionSectionProps) {
  return (
    <Section
      id={content.id}
      surface="muted"
      heading={<Heading as="h2" size="lg">{content.heading}</Heading>}
      description={<Text tone="muted">{content.description}</Text>}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {content.cards.map((card) => (
          <Card key={card.title} title={card.title} description={card.description} />
        ))}
      </div>
    </Section>
  );
}

export function HomeSupportSection({ content }: HomeSupportSectionProps) {
  return (
    <Section
      id={content.id}
      heading={<Heading as="h2" size="lg">{content.heading}</Heading>}
      description={<Text tone="muted">{content.description}</Text>}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="grid gap-4 sm:grid-cols-3">
          {content.channels.map((channel) => {
            const interactive = "href" in channel && typeof channel.href === "string";

            return (
              <Card
                key={channel.label}
                as={interactive ? "a" : "article"}
                {...(interactive ? { href: channel.href, interactive: true } : {})}
                title={channel.label}
                description={channel.note}
              >
                <Text size="sm" className="font-semibold text-ink">
                  {channel.value}
                </Text>
              </Card>
            );
          })}
        </div>

        <Card
          surface="brand"
          padding="lg"
          title="Apoio direto para orientar a primeira conversa"
          description="Se a familia precisar de um caminho imediato, usamos WhatsApp e telefone para reduzir atrito e encaminhar rapido."
        >
          <Stack gap="sm">
            <Stack direction="vertical" gap="xs">
              <Text size="sm" className="font-semibold text-ink">
                Resposta inicial
              </Text>
              <Text size="sm" tone="muted">
                Primeiro contato humano para entender a urgencia e o contexto.
              </Text>
            </Stack>
            <Stack direction="vertical" gap="xs">
              <Text size="sm" className="font-semibold text-ink">
                Atendimento presencial
              </Text>
              <Text size="sm" tone="muted">
                Visitas sao combinadas antes para manter acolhimento e previsibilidade.
              </Text>
            </Stack>
            <Stack direction="vertical" gap="sm" className="pt-2 sm:flex-row">
              <PrimaryButton href={homeContent.hero.ctas.support.href}>
                {homeContent.hero.ctas.support.label}
              </PrimaryButton>
              <WhatsAppButton href={homeContent.hero.ctas.whatsapp.href}>
                {homeContent.hero.ctas.whatsapp.label}
              </WhatsAppButton>
            </Stack>
          </Stack>
        </Card>
      </div>
    </Section>
  );
}

export function HomeCampaignsSection({ content }: HomeCampaignsSectionProps) {
  if (content.items.length === 0) {
    return null;
  }

  return (
    <Section
      id={content.section.id}
      heading={<Heading as="h2" size="lg">{content.section.heading}</Heading>}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {content.items.map((card) => (
          <Card
            key={card.slug}
            title={card.title}
            description={card.description}
            action={<Badge tone="info">{card.badge}</Badge>}
          />
        ))}
      </div>
    </Section>
  );
}

export function HomeSponsorsSection({ content }: HomeSponsorsSectionProps) {
  if (content.items.length === 0) {
    return null;
  }

  return (
    <Section
      id={content.section.id}
      surface="muted"
      heading={<Heading as="h2" size="lg">{content.section.heading}</Heading>}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {content.items.map((sponsor) => (
          <Card
            key={sponsor.name}
            surface="muted"
            title={sponsor.name}
            description={sponsor.description}
            action={<Badge tone="brand">{sponsor.logoLabel}</Badge>}
          />
        ))}
      </div>
    </Section>
  );
}

export function HomeTrustSection({ content }: HomeTrustSectionProps) {
  return (
    <Section
      id={content.id}
      surface="muted"
      heading={<Heading as="h2" size="lg">{content.heading}</Heading>}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {content.cards.map((card) => (
          <Card key={card.title} title={card.title} description={card.description} />
        ))}
      </div>
    </Section>
  );
}

export function HomeClosingSection({ content }: HomeClosingSectionProps) {
  return (
    <Section
      id={content.id}
      heading={<Heading as="h2" size="lg">{content.heading}</Heading>}
      description={<Text tone="muted">{content.description}</Text>}
      actions={
        <Stack direction="vertical" gap="sm" className="sm:flex-row">
          <PrimaryButton href={homeContent.hero.ctas.help.href}>
            {homeContent.hero.ctas.help.label}
          </PrimaryButton>
          <SecondaryButton href={homeContent.hero.ctas.support.href}>
            {homeContent.hero.ctas.support.label}
          </SecondaryButton>
        </Stack>
      }
    />
  );
}
