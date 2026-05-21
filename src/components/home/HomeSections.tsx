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
type HomeSupportStep = HomeSupportContent["steps"][number];

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

function SupportStepRow({ step, index }: { step: HomeSupportStep; index: number }) {
  return (
    <li className="flex gap-4">
      <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand/20 bg-brand-soft text-xs font-semibold text-brand-strong">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0">
        <Text as="p" size="sm" className="font-semibold text-ink">
          {step.title}
        </Text>
        <Text as="p" size="sm" tone="muted" className="mt-1">
          {step.description}
        </Text>
      </div>
    </li>
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

        <div className="relative min-h-[18rem] lg:min-h-[22rem]">
          <Card surface="default" padding="md" className="w-full max-w-sm lg:ml-auto lg:mt-2">
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
    <section id={content.id} className="space-y-8 pb-12 sm:pb-14 lg:pb-16">
      <div className="space-y-3">
        <Badge tone="brand" className="w-fit">
          Visão institucional
        </Badge>
        <Heading as="h2" size="lg" className="max-w-none">
          {content.heading}
        </Heading>
        <Text tone="muted" className="max-w-3xl">
          {content.description}
        </Text>
      </div>

      <ol className="space-y-8 pl-6">
        {content.highlights.map((highlight, index) => {
          const audienceText =
            index === 0
              ? "para pessoas em tratamento"
              : index === 1
                ? "para famílias e cuidadores"
                : "para quem apoia a rede";

          return (
            <li key={highlight.title} className="space-y-3">
              <Badge tone={index === 0 ? "brand" : index === 1 ? "info" : "default"} className="w-fit">
                {String(index + 1).padStart(2, "0")}
              </Badge>
              <Heading as="h3" size="sm">
                {highlight.title}
              </Heading>
              <Text size="sm" tone="muted" className="max-w-2xl">
                {audienceText} - {highlight.description}
              </Text>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export function HomeSupportSection({ content }: HomeSupportSectionProps) {
  return (
    <Section
      id={content.id}
      heading={<Heading as="h2" size="lg">{content.heading}</Heading>}
      description={<Text tone="muted">{content.description}</Text>}
    >
      <div className="grid gap-10 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <Stack gap="md">
          <Badge tone="brand" className="w-fit">
            Acesso sem fricção
          </Badge>
          <Heading as="h3" size="sm" className="max-w-xl">
            Sem formulário longo nem espera desnecessária
          </Heading>
          <Text size="sm" tone="muted" className="max-w-xl">
            Conte o que estiver conseguindo agora e a equipe ajuda a organizar o próximo passo.
          </Text>

          <ol className="mt-2 space-y-4 border-l border-line/70 pl-5">
            {content.steps.map((step, index) => (
              <SupportStepRow key={step.title} step={step} index={index} />
            ))}
          </ol>

          <Stack direction="vertical" gap="sm" className="pt-2 sm:flex-row">
            <PrimaryButton href={homeContent.hero.ctas.support.href}>
              {homeContent.hero.ctas.support.label}
            </PrimaryButton>
            <WhatsAppButton href={homeContent.hero.ctas.whatsapp.href}>
              {homeContent.hero.ctas.whatsapp.label}
            </WhatsAppButton>
          </Stack>
        </Stack>

        <div className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <Heading as="h3" size="sm">
              Canais diretos
            </Heading>
            <Text size="sm" tone="muted">
              Escolha o canal mais simples para começar.
            </Text>
          </div>

          <ul className="divide-y divide-line/70 border-y border-line/70">
            {content.channels.map((channel) => {
              const interactive = "href" in channel && typeof channel.href === "string";

              return (
                <li key={channel.label} className="py-4 first:pt-0 last:pb-0">
                  {interactive ? (
                    <a
                      href={channel.href}
                      className="group flex items-start justify-between gap-4 rounded-sm transition hover:text-brand-strong"
                    >
                      <span className="min-w-0">
                        <Text size="sm" className="font-semibold text-ink group-hover:text-brand-strong">
                          {channel.label}
                        </Text>
                        <Text size="sm" tone="muted" className="mt-1">
                          {channel.note}
                        </Text>
                      </span>
                      <Text size="sm" className="shrink-0 font-semibold text-ink">
                        {channel.value}
                      </Text>
                    </a>
                  ) : (
                    <div className="flex items-start justify-between gap-4">
                      <span className="min-w-0">
                        <Text size="sm" className="font-semibold text-ink">
                          {channel.label}
                        </Text>
                        <Text size="sm" tone="muted" className="mt-1">
                          {channel.note}
                        </Text>
                      </span>
                      <Text size="sm" className="shrink-0 font-semibold text-ink">
                        {channel.value}
                      </Text>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
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
    <section id={content.id} className="space-y-6">
      <div className="max-w-3xl space-y-3">
        <Badge tone="default" className="w-fit">
          Transparência
        </Badge>
        <Heading as="h2" size="lg">
          {content.heading}
        </Heading>
        <Text tone="muted">{content.description}</Text>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {content.cards.map((card, index) => (
          <article key={card.title} className="space-y-3 border-l border-line/70 pl-5">
            <Badge tone={index === 0 ? "default" : index === 1 ? "info" : "brand"} className="w-fit">
              {String(index + 1).padStart(2, "0")}
            </Badge>
            <Heading as="h3" size="sm">
              {card.title}
            </Heading>
            <Text size="sm" tone="muted">
              {card.description}
            </Text>
          </article>
        ))}
      </div>
    </section>
  );
}

export function HomeClosingSection({ content }: HomeClosingSectionProps) {
  return (
    <section id={content.id} className="space-y-6">
      <div className="max-w-3xl space-y-3">
        <Badge tone="brand" className="w-fit">
          Ação final
        </Badge>
        <Heading as="h2" size="lg">
          {content.heading}
        </Heading>
        <Text tone="muted">{content.description}</Text>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_auto] lg:items-center">
        <Text size="lg" tone="strong" className="max-w-xl font-semibold text-balance">
          Escolha um caminho e siga com a gente.
        </Text>

        <Stack direction="vertical" gap="sm" className="sm:flex-row lg:flex-col">
          <PrimaryButton href={homeContent.hero.ctas.help.href}>
            {homeContent.hero.ctas.help.label}
          </PrimaryButton>
          <SecondaryButton href={homeContent.hero.ctas.support.href}>
            {homeContent.hero.ctas.support.label}
          </SecondaryButton>
        </Stack>
      </div>
    </section>
  );
}
