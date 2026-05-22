import { Stack } from "@/components/layout";
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
type HomeContributionContent = typeof homeContent.contribution;
type HomeTrustContent = typeof homeContent.trust;
type HomeClosingContent = typeof homeContent.closing;
type HomeCampaignsContent = typeof homeEditorialContent.campaigns;
type HomeSponsorsContent = typeof homeEditorialContent.sponsors;
type HomeSupportStep = HomeSupportContent["steps"][number];
type HomeSupportChannel = HomeSupportContent["channels"][number];
type HomeContributionTrail = HomeContributionContent["trails"][number];

type HomeHeroSectionProps = {
  content: HomeHeroContent;
};

type HomeHighlightsBandProps = {
  content: HomeHeroContent;
};

type HomeInstitutionSectionProps = {
  content: HomeInstitutionContent;
};

type HomeSupportSectionProps = {
  content: HomeSupportContent;
};

type HomeContributionSectionProps = {
  content: HomeContributionContent;
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

type IconName =
  | "arrow"
  | "building"
  | "clock"
  | "gift"
  | "hair"
  | "hands"
  | "heart"
  | "home"
  | "map"
  | "network"
  | "people"
  | "phone"
  | "receipt"
  | "ribbon"
  | "shield";

function HomeIcon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const commonProps = {
    "aria-hidden": true,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  if (name === "arrow") {
    return (
      <svg {...commonProps}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    );
  }

  if (name === "building") {
    return (
      <svg {...commonProps}>
        <path d="M4 20V6.8c0-.7.4-1.3 1.1-1.6l5.8-2.1c.7-.2 1.4-.2 2.1.1l5.9 2.6c.7.3 1.1.9 1.1 1.6V20" />
        <path d="M8 10h2M14 10h2M8 14h2M14 14h2M10 20v-3h4v3" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg {...commonProps}>
        <path d="M12 7v5l3 2" />
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    );
  }

  if (name === "gift") {
    return (
      <svg {...commonProps}>
        <path d="M4 11h16v9H4z" />
        <path d="M3 7h18v4H3zM12 7v13" />
        <path d="M12 7c-1.7 0-4.2-.4-4.2-2.2C7.8 3.8 8.6 3 9.7 3 11.1 3 12 4.4 12 7Z" />
        <path d="M12 7c1.7 0 4.2-.4 4.2-2.2 0-1-.8-1.8-1.9-1.8C12.9 3 12 4.4 12 7Z" />
      </svg>
    );
  }

  if (name === "hair") {
    return (
      <svg {...commonProps}>
        <path d="M9 4c3 2 3 6.5.6 9.7-1.3 1.8-1.4 4 .7 5.8" />
        <path d="M15 4c-3 2-3 6.5-.6 9.7 1.3 1.8 1.4 4-.7 5.8" />
        <path d="M8 13h8" />
      </svg>
    );
  }

  if (name === "hands") {
    return (
      <svg {...commonProps}>
        <path d="M7 12.5 4.8 10.3a2 2 0 0 1 2.8-2.8L12 11.9l4.4-4.4a2 2 0 0 1 2.8 2.8L17 12.5" />
        <path d="M5 14.5c2.7 3.3 11.3 3.3 14 0" />
        <path d="M8 18.5c2.2 1.6 5.8 1.6 8 0" />
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <svg {...commonProps}>
        <path d="M20.8 8.6c0 5-8.8 10.4-8.8 10.4S3.2 13.6 3.2 8.6A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.3Z" />
      </svg>
    );
  }

  if (name === "home") {
    return (
      <svg {...commonProps}>
        <path d="m3 11 9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-5h4v5" />
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

  if (name === "network") {
    return (
      <svg {...commonProps}>
        <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="m8.7 8.7 2 7M15.3 8.7l-2 7M10 18H5.5M14 18h4.5" />
      </svg>
    );
  }

  if (name === "people") {
    return (
      <svg {...commonProps}>
        <path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM17 10a2.8 2.8 0 1 0 0-5.6" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
        <path d="M14.5 14.5a5 5 0 0 1 6 5" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg {...commonProps}>
        <path d="M7.5 4.5c-.4-.8-1.3-1.2-2.2-1l-1.7.4c-.9.2-1.5 1.1-1.3 2 1.2 5.9 6.1 10.8 12 12 .9.2 1.8-.4 2-1.3l.4-1.7c.2-.9-.2-1.8-1-2.2l-2.3-1.1c-.7-.3-1.5-.2-2 .4l-.7.8c-.6.6-1.5.8-2.2.4-1.2-.7-2.4-1.9-3.1-3.1-.4-.7-.2-1.6.4-2.2l.8-.7c.6-.5.7-1.3.4-2L7.5 4.5Z" />
      </svg>
    );
  }

  if (name === "receipt") {
    return (
      <svg {...commonProps}>
        <path d="M7 3h10v18l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3L5 21V5a2 2 0 0 1 2-2Z" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </svg>
    );
  }

  if (name === "ribbon") {
    return (
      <svg {...commonProps}>
        <path d="M12 3c3.5 0 6 2.7 6 6.4 0 5.6-6 11.6-6 11.6S6 15 6 9.4C6 5.7 8.5 3 12 3Z" />
        <path d="M9 6.8c2.4 3.3 4.8 6.7 6 10.2M15 6.8c-2.4 3.3-4.8 6.7-6 10.2" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M12 3 5 6v5c0 4.4 2.8 8.1 7 10 4.2-1.9 7-5.6 7-10V6l-7-3Z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </svg>
  );
}

function getHeroContactIcon(label: string): IconName {
  if (label === "Telefone") {
    return "phone";
  }

  if (label === "Endereço") {
    return "map";
  }

  return "clock";
}

function getHighlightIcon(index: number): IconName {
  return (["heart", "home", "ribbon", "people"] as const)[index] ?? "heart";
}

function getContributionIcon(index: number): IconName {
  return (["gift", "hair", "hands", "building"] as const)[index] ?? "heart";
}

function getTrustIcon(index: number): IconName {
  return (["receipt", "network", "shield"] as const)[index] ?? "shield";
}

function ArrowMark() {
  return <HomeIcon name="arrow" className="h-4 w-4" />;
}

function HeroContactRow({ item }: { item: HomeHeroContactItem }) {
  const sharedClasses =
    "group flex items-start gap-3 rounded-xl border border-line/70 bg-surface/85 p-3 transition duration-200 ease-[var(--ease-standard)] hover:border-brand/25 hover:bg-brand-soft/30";

  const content = (
    <>
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/20 bg-brand-soft/50 text-brand-strong">
        <HomeIcon name={getHeroContactIcon(item.label)} />
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

function SupportStepRow({ step, index }: { step: HomeSupportStep; index: number }) {
  return (
    <li className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 bg-brand-soft text-xs font-semibold text-brand-strong">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0 border-b border-line/70 pb-5 last:pb-0">
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

function SupportChannelItem({ channel }: { channel: HomeSupportChannel }) {
  const iconName = channel.label === "WhatsApp" ? "heart" : channel.label === "Telefone" ? "phone" : "map";
  const content = (
    <>
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-success/20 bg-success/10 text-success">
        <HomeIcon name={iconName} />
      </span>
      <span className="min-w-0">
        <Text as="span" size="sm" className="block font-semibold text-ink">
          {channel.label}
        </Text>
        <Text as="span" size="sm" tone="muted" className="mt-1 block">
          {channel.description}
        </Text>
        <Text as="span" size="xs" tone="brand" className="mt-2 block font-semibold">
          {channel.note}
        </Text>
      </span>
    </>
  );

  if ("href" in channel && channel.href) {
    return (
      <li>
        <a
          href={channel.href}
          className="group flex items-start gap-4 py-5 transition duration-200 ease-[var(--ease-standard)] hover:text-success focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {content}
        </a>
      </li>
    );
  }

  return (
    <li className="flex items-start gap-4 py-5">
      {content}
    </li>
  );
}

function ContributionTrail({ trail, index }: { trail: HomeContributionTrail; index: number }) {
  return (
    <a
      href={trail.href}
      className="group grid gap-4 border-b border-line/70 py-5 transition duration-200 ease-[var(--ease-standard)] first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:items-start"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/20 bg-brand-soft/55 text-brand-strong transition duration-200 group-hover:border-brand/30 group-hover:bg-brand-soft">
        <HomeIcon name={getContributionIcon(index)} />
      </span>
      <span className="min-w-0">
        <Heading as="h3" size="sm">
          {trail.title}
        </Heading>
        <Text as="span" size="sm" tone="muted" className="mt-2 block max-w-xl">
          {trail.description}
        </Text>
      </span>
      <Text
        as="span"
        size="sm"
        tone="brand"
        className="inline-flex items-center gap-2 font-semibold text-brand-strong sm:pt-1"
      >
        Quero participar
        <ArrowMark />
      </Text>
    </a>
  );
}

function SponsorTile({ sponsor }: { sponsor: HomeSponsorsContent["items"][number] }) {
  return (
    <a
      href={sponsor.href}
      className="group flex h-full flex-col justify-between rounded-card border border-line bg-surface p-5 shadow-soft transition duration-200 ease-[var(--ease-standard)] hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transform-none"
    >
      <div className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand/20 bg-brand-soft/35 text-xs font-semibold tracking-[0.18em] text-brand-strong">
            {sponsor.logoLabel}
          </span>
          <Badge tone="default" className="shrink-0">
            Apoio
          </Badge>
        </div>

        <div className="space-y-2">
          <Heading as="h3" size="sm" className="max-w-[14rem]">
            {sponsor.name}
          </Heading>
          <Text size="sm" tone="muted" className="max-w-[18rem]">
            {sponsor.description}
          </Text>
        </div>
      </div>

      <Text
        as="span"
        size="sm"
        tone="brand"
        className="mt-4 inline-flex items-center gap-2 font-semibold text-brand-strong"
      >
        Ver apoio
        <ArrowMark />
      </Text>
    </a>
  );
}

export function HomeHeroSection({ content }: HomeHeroSectionProps) {
  const titleHighlight = "esperança";
  const titleParts = content.title.split(titleHighlight);
  const hasTitleHighlight = titleParts.length > 1;

  return (
    <section id={content.id} className="relative overflow-hidden py-8 sm:py-10 lg:py-14">
      <div className="pointer-events-none absolute left-[45%] top-8 hidden h-36 w-36 rounded-full border border-brand/20 lg:block" />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] lg:items-center">
        <Stack gap="lg" className="max-w-2xl animate-fade-in-up">
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
            <WhatsAppButton
              href={content.ctas.whatsapp.href}
              target="_blank"
              rel="noreferrer noopener"
              className="w-full sm:w-auto"
            >
              {content.ctas.whatsapp.label}
            </WhatsAppButton>
          </Stack>

          <Text size="sm" tone="muted" className="max-w-xl">
            Escuta inicial, rede de apoio e acompanhamento contínuo para orientar o próximo passo.
          </Text>
        </Stack>

        <div className="relative animate-rise-soft lg:min-h-[28rem]">
          <div className="absolute inset-x-6 bottom-4 top-12 rounded-[2rem] bg-gradient-to-br from-brand-soft via-surface to-success/10 shadow-soft" />
          <div className="relative mx-auto max-w-md lg:ml-auto">
            <div className="rounded-[2rem] border border-brand/15 bg-surface/85 p-5 shadow-elevated">
              <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-line bg-gradient-to-br from-brand-soft via-surface to-surface-muted">
                <div className="flex h-full flex-col justify-end p-6">
                  <div className="mb-auto flex justify-end text-brand-strong">
                    <HomeIcon name="ribbon" className="h-16 w-16" />
                  </div>
                  <Text size="lg" tone="strong" className="max-w-xs font-semibold text-balance">
                    Aqui você não está sozinho. Estamos aqui para acolher.
                  </Text>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <Badge tone="default" className="w-fit">
                  {content.contact.title}
                </Badge>
                <Heading as="h2" size="sm">
                  Fale com a APAC Boituva
                </Heading>
                <Text size="sm" tone="muted">
                  {content.contact.description}
                </Text>
                <div className="space-y-3">
                  {content.contact.items.map((item) => (
                    <HeroContactRow key={item.label} item={item} />
                  ))}
                </div>
                <Text size="xs" tone="muted" className="rounded-xl border border-warning bg-warning/50 p-3">
                  {content.contact.notice}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeHighlightsBand({ content }: HomeHighlightsBandProps) {
  return (
    <section aria-label="Destaques da atuação da APAC" className="py-2">
      <div className="grid gap-3 rounded-[1.5rem] border border-line bg-surface/80 p-3 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {content.highlights.map((highlight, index) => (
          <article
            key={highlight.title}
            className="flex gap-4 rounded-[1.125rem] p-4 transition duration-200 ease-[var(--ease-standard)] hover:bg-brand-soft/35"
          >
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand/20 bg-brand-soft text-brand-strong">
              <HomeIcon name={getHighlightIcon(index)} />
            </span>
            <div className="min-w-0">
              <Text as="p" size="sm" tone="strong" className="font-bold">
                {highlight.title}
              </Text>
              <Text size="xs" tone="muted" className="mt-1">
                {highlight.description}
              </Text>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function HomeInstitutionSection({ content }: HomeInstitutionSectionProps) {
  return (
    <section id={content.id} className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <Badge tone="brand" className="w-fit">
          Visão institucional
        </Badge>
        <Heading as="h2" size="lg" className="max-w-2xl">
          {content.heading}
        </Heading>
        <Text tone="muted" className="max-w-xl">
          {content.description}
        </Text>
      </div>

      <div className="space-y-8">
        <ol className="space-y-7">
          {content.highlights.map((highlight, index) => (
            <li key={highlight.title} className="grid gap-4 border-b border-line/70 pb-7 last:border-b-0 sm:grid-cols-[4rem_minmax(0,1fr)]">
              <Badge tone={index === 0 ? "brand" : index === 1 ? "info" : "default"} className="h-fit w-fit">
                {String(index + 1).padStart(2, "0")}
              </Badge>
              <div className="min-w-0">
                <Heading as="h3" size="sm">
                  {highlight.title}
                </Heading>
                <Text size="sm" tone="muted" className="mt-2 max-w-2xl">
                  {highlight.description}
                </Text>
              </div>
            </li>
          ))}
        </ol>

        <div className="grid gap-4 md:grid-cols-3">
          {content.cards.map((card, index) => (
            <Card key={card.title} surface={index === 0 ? "brand" : "default"} padding="sm" className="h-full">
              <Heading as="h3" size="xs">
                {card.title}
              </Heading>
              <Text size="sm" tone="muted" className="mt-3">
                {card.description}
              </Text>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeSupportSection({ content }: HomeSupportSectionProps) {
  return (
    <section id={content.id} className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <Badge tone="success" className="w-fit">
          Acesso direto
        </Badge>
        <Heading as="h2" size="lg" className="max-w-2xl">
          {content.heading}
        </Heading>
        <Text tone="muted" className="max-w-xl">
          {content.description}
        </Text>
      </div>

      <div className="grid gap-10 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:items-start">
        <div className="space-y-6 border-l border-line/70 pl-5 sm:pl-6">
          <Text size="sm" tone="strong" className="font-semibold uppercase tracking-[0.08em]">
            Comece por aqui
          </Text>
          <ol className="space-y-5">
            {content.steps.map((step, index) => (
              <SupportStepRow key={step.title} step={step} index={index} />
            ))}
          </ol>
          <Text size="sm" tone="muted" className="max-w-xl">
            Depois do primeiro contato, a equipe orienta o caminho mais simples para seguir.
          </Text>
        </div>

        <div className="space-y-7">
          <ul className="divide-y divide-line/70 border-y border-line/70">
            {content.channels.map((channel) => (
              <SupportChannelItem key={channel.label} channel={channel} />
            ))}
          </ul>

          <Text size="sm" tone="muted" className="rounded-xl border border-warning bg-warning/50 p-4">
            {content.notice} Em caso de emergência médica, procure atendimento de saúde imediatamente.
          </Text>

          <Stack direction="vertical" gap="sm" className="sm:flex-row">
            <WhatsAppButton
              href={content.ctas.whatsapp.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              {content.ctas.whatsapp.label}
            </WhatsAppButton>
            <SecondaryButton href={content.ctas.phone.href}>{content.ctas.phone.label}</SecondaryButton>
          </Stack>
        </div>
      </div>
    </section>
  );
}

export function HomeContributionSection({ content }: HomeContributionSectionProps) {
  return (
    <section id={content.id} className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
      <div className="space-y-4">
        <Badge tone="brand" className="w-fit">
          Rede de contribuição
        </Badge>
        <Heading as="h2" size="lg" className="max-w-md">
          {content.heading}
        </Heading>
        <Text tone="muted" className="max-w-xl">
          {content.description}
        </Text>
      </div>

      <div className="rounded-[1.5rem] border border-line bg-surface/85 p-6 shadow-soft sm:p-8">
        {content.trails.map((trail, index) => (
          <ContributionTrail key={trail.title} trail={trail} index={index} />
        ))}
      </div>
    </section>
  );
}

export function HomeCampaignsSection({ content }: HomeCampaignsSectionProps) {
  if (content.items.length === 0) {
    return null;
  }

  return (
    <section id={content.section.id} className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)] lg:items-end">
        <div className="space-y-4">
          <Badge tone="info" className="w-fit">
            Agenda solidária
          </Badge>
          <Heading as="h2" size="lg" className="max-w-md">
            {content.section.heading}
          </Heading>
        </div>
        {content.section.description ? (
          <Text tone="muted" className="max-w-2xl lg:ml-auto">
            {content.section.description}
          </Text>
        ) : null}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {content.items.map((card, index) => (
          <Card
            key={card.slug}
            surface={index === 0 ? "brand" : "default"}
            padding="md"
            className="h-full overflow-hidden"
          >
            <Stack gap="sm">
              <Badge tone="info" className="w-fit">
                {card.badge}
              </Badge>
              <Heading as="h3" size="sm" className="max-w-sm">
                {card.title}
              </Heading>
              <Text size="sm" tone="muted" className="max-w-sm">
                {card.description}
              </Text>
              <SecondaryButton href={card.href} size="sm" className="w-fit">
                Saiba mais
              </SecondaryButton>
            </Stack>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function HomeTrustSection({ content }: HomeTrustSectionProps) {
  return (
    <section id={content.id} className="rounded-[1.75rem] border border-line bg-surface-muted/70 p-6 shadow-soft sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:items-start">
        <div className="space-y-4">
          <Badge tone="success" className="w-fit">
            Transparência
          </Badge>
          <Heading as="h2" size="lg" className="max-w-md">
            {content.heading}
          </Heading>
          <Text tone="muted" className="max-w-xl">
            {content.description}
          </Text>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {content.cards.map((card, index) => (
            <article
              key={card.title}
              className="rounded-card border border-line bg-surface p-5 shadow-soft"
            >
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-success/20 bg-success/10 text-success">
                <HomeIcon name={getTrustIcon(index)} />
              </span>
              <Heading as="h3" size="sm">
                {card.title}
              </Heading>
              <Text size="sm" tone="muted" className="mt-3">
                {card.description}
              </Text>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeSponsorsSection({ content }: HomeSponsorsSectionProps) {
  if (content.items.length === 0) {
    return null;
  }

  return (
    <section id={content.section.id} className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] lg:items-end">
        <div className="space-y-4">
          <Badge tone="default" className="w-fit">
            Rede parceira
          </Badge>
          <Heading as="h2" size="lg" className="max-w-md">
            {content.section.heading}
          </Heading>
        </div>
        {content.section.description ? (
          <Text tone="muted" className="max-w-2xl lg:ml-auto">
            {content.section.description}
          </Text>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {content.items.map((sponsor) => (
          <SponsorTile key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>
    </section>
  );
}

export function HomeClosingSection({ content }: HomeClosingSectionProps) {
  return (
    <section id={content.id} className="relative overflow-hidden rounded-[1.75rem] bg-brand p-6 text-surface shadow-elevated sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border border-surface/25" />
      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="space-y-3">
          <Badge tone="default" className="w-fit border-surface/25 bg-surface/15 text-surface">
            Próximo passo
          </Badge>
          <Heading as="h2" size="lg" className="max-w-xl text-surface">
            {content.heading}
          </Heading>
          <Text className="max-w-2xl text-surface/85">{content.description}</Text>
        </div>

        <Stack direction="vertical" gap="sm" className="sm:flex-row lg:flex-col">
          <PrimaryButton
            href={homeContent.hero.ctas.help.href}
            className="border-surface bg-surface text-brand-strong hover:border-surface hover:bg-surface/90"
          >
            {homeContent.hero.ctas.help.label}
          </PrimaryButton>
          <SecondaryButton
            href={homeContent.hero.ctas.support.href}
            className="border-surface/60 bg-transparent text-surface hover:bg-surface/10"
          >
            {homeContent.hero.ctas.support.label}
          </SecondaryButton>
          <WhatsAppButton
            href={homeContent.hero.ctas.whatsapp.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {homeContent.hero.ctas.whatsapp.label}
          </WhatsAppButton>
        </Stack>
      </div>
    </section>
  );
}
