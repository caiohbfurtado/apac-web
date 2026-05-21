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

type HomeHeroContactItem = {
  label: string;
  value: string;
  note: string;
  href?: string;
};

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

function HeroIcon({ name }: { name: "phone" | "map" | "spark" }) {
  const commonProps = {
    "aria-hidden": true,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-5 w-5",
  };

  if (name === "phone") {
    return (
      <svg {...commonProps}>
        <path d="M7.5 4.5c-.4-.8-1.3-1.2-2.2-1l-1.7.4c-.9.2-1.5 1.1-1.3 2 1.2 5.9 6.1 10.8 12 12 .9.2 1.8-.4 2-1.3l.4-1.7c.2-.9-.2-1.8-1-2.2l-2.3-1.1c-.7-.3-1.5-.2-2 .4l-.7.8c-.6.6-1.5.8-2.2.4-1.2-.7-2.4-1.9-3.1-3.1-.4-.7-.2-1.6.4-2.2l.8-.7c.6-.5.7-1.3.4-2L7.5 4.5Z" />
      </svg>
    );
  }

  if (name === "map") {
    return (
      <svg {...commonProps}>
        <path d="M12 21s6-5.2 6-10.5a6 6 0 1 0-12 0C6 15.8 12 21 12 21Z" />
        <path d="M12 11.2a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M12 7v5l3 2" />
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function HeroContactRow({ item }: { item: HomeHeroContactItem }) {
  const sharedClasses =
    "group flex items-start gap-3 rounded-xl border border-line/70 bg-surface-muted/70 p-3 transition duration-200 ease-[var(--ease-standard)] hover:border-brand/25 hover:bg-brand-soft/25";

  const content = (
    <>
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/20 bg-surface text-brand-strong">
        <HeroIcon name={item.label === "Telefone" ? "phone" : item.label === "Endereço" ? "map" : "spark"} />
      </span>
      <span className="min-w-0">
        <Text as="span" size="sm" className="block font-semibold text-ink">
          {item.label}
        </Text>
        <Text as="span" size="sm" tone="strong" className="mt-0.5 block">
          {item.value}
        </Text>
        <Text as="span" size="xs" tone="muted" className="mt-1 block">
          {item.note}
        </Text>
      </span>
    </>
  );

  if (item.href) {
    return (
      <a href={item.href} className={sharedClasses}>
        {content}
      </a>
    );
  }

  return <div className={sharedClasses}>{content}</div>;
}

export function HomeHeroSection({ content }: HomeHeroSectionProps) {
  const titleHighlight = "esperança";
  const titleParts = content.title.split(titleHighlight);
  const hasTitleHighlight = titleParts.length > 1;

  return (
    <section id={content.id} className="relative overflow-hidden py-10 sm:py-12 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:items-start">
        <Stack gap="lg" className="max-w-2xl">
          <Stack gap="sm">
            <Badge tone="brand">{content.badge}</Badge>
            <Heading as="h1" size="xl" className="max-w-3xl text-balance">
              {hasTitleHighlight ? (
                <>
                  {titleParts[0]}
                  <span className="text-brand-strong">{titleHighlight}</span>
                  {titleParts.slice(1).join(titleHighlight)}
                </>
              ) : (
                content.title
              )}
            </Heading>
            <Text size="lg" className="max-w-2xl text-balance">
              {content.description}
            </Text>
          </Stack>

          <Stack direction="vertical" gap="sm" className="sm:flex-row sm:flex-wrap">
            <PrimaryButton href={content.ctas.support.href} className="w-full sm:w-auto">
              {content.ctas.support.label}
            </PrimaryButton>
            <SecondaryButton href={content.ctas.help.href} className="w-full sm:w-auto">
              {content.ctas.help.label}
            </SecondaryButton>
            <WhatsAppButton href={content.ctas.whatsapp.href} className="w-full sm:w-auto">
              {content.ctas.whatsapp.label}
            </WhatsAppButton>
          </Stack>

          <Text size="sm" tone="muted" className="max-w-xl">
            Escuta inicial, rede de apoio e acompanhamento contínuo para orientar o próximo passo.
          </Text>
        </Stack>

        <div className="relative min-h-[26rem] lg:min-h-[34rem]">
          <Card surface="default" padding="md" className="w-full max-w-sm sm:top-6">
            <Stack gap="sm">
              <Stack gap="xs">
                <Badge tone="default" className="w-fit">
                  {content.contact.title}
                </Badge>
                <Heading as="h2" size="sm">
                  Fale com a APAC
                </Heading>
                <Text size="sm" tone="muted">
                  {content.contact.description}
                </Text>
              </Stack>

              <div className="space-y-3">
                {content.contact.items.map((item) => (
                  <HeroContactRow key={item.label} item={item} />
                ))}
              </div>
            </Stack>
          </Card>
        </div>
      </div>
    </section>
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
