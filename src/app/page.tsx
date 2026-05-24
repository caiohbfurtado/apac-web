import { Container, Footer, HeaderNav, Stack } from "@/components/layout";
import {
  HomeCampaignsSection,
  HomeClosingSection,
  HomeContributionSection,
  HomeHighlightsBand,
  HomeHeroSection,
  HomeInstitutionSection,
  HomeSponsorsSection,
  HomeSupportSection,
  HomeTrustSection,
} from "@/components/home";
import { homeContent } from "@/lib/home-content";
import {
  homeEditorialContent,
  shouldRenderCampaigns,
  shouldRenderSponsors,
  type HomeEditorialContent,
} from "@/lib/home-editorial-content";

const footerContactLinks = {
  title: "Contato",
  ariaLabel: "Canais de contato",
  links: [
    { href: "tel:+551534560000", label: "(15) 3456-0000" },
    { href: "mailto:contato@apac.org.br", label: "contato@apac.org.br" },
  ],
};

type HomePageProps = {
  editorialContent?: HomeEditorialContent;
};

function buildHeaderItems(editorialContent: HomeEditorialContent) {
  const hasCampaigns = shouldRenderCampaigns(editorialContent.campaigns);
  const hasSponsors = shouldRenderSponsors(editorialContent.sponsors);

  return [
    { href: `#${homeContent.hero.id}`, label: "Início" },
    { href: `#${homeContent.institution.id}`, label: "Atuação" },
    { href: `#${homeContent.support.id}`, label: "Preciso de apoio" },
    { href: `#${homeContent.contribution.id}`, label: "Quero ajudar" },
    ...(hasCampaigns
      ? [{ href: `#${editorialContent.campaigns.section.id}`, label: "Campanhas" }]
      : []),
    { href: `#${homeContent.trust.id}`, label: "Transparência" },
    ...(hasSponsors
      ? [{ href: `#${editorialContent.sponsors.section.id}`, label: "Patrocinadores" }]
      : []),
  ] as const;
}

const footerPrimaryLinks = {
  title: "Institucional",
  ariaLabel: "Links institucionais",
  links: [
    { href: `#${homeContent.hero.id}`, label: "Início" },
    { href: `#${homeContent.institution.id}`, label: "Atuação" },
    { href: `#${homeContent.support.id}`, label: "Preciso de apoio" },
    { href: `#${homeContent.trust.id}`, label: "Transparência" },
    { href: `#${homeContent.contribution.id}`, label: "Quero ajudar" },
  ],
};

export function HomePage({ editorialContent = homeEditorialContent }: HomePageProps) {
  const hasCampaigns = shouldRenderCampaigns(editorialContent.campaigns);
  const hasSponsors = shouldRenderSponsors(editorialContent.sponsors);

  return (
    <>
      <HeaderNav
        items={[...buildHeaderItems(editorialContent)]}
        ctas={[
          {
            href: homeContent.hero.ctas.support.href,
            label: homeContent.hero.ctas.support.label,
            variant: "primary",
          },
          {
            href: homeContent.hero.ctas.help.href,
            label: homeContent.hero.ctas.help.label,
            variant: "secondary",
          },
        ]}
        contactCta={homeContent.hero.ctas.whatsapp}
      />

      <main id="main-content">
        <Container className="py-8 sm:py-10 lg:py-12" size="wide" gutter="md">
          <HomeHeroSection content={homeContent.hero} />
          <HomeHighlightsBand content={homeContent.hero} />
        </Container>

        <Container className="pt-4 pb-16 sm:pt-6 sm:pb-18 lg:pt-8 lg:pb-20" size="wide" gutter="md">
          <Stack gap="xl">
            <HomeInstitutionSection content={homeContent.institution} />
            <HomeSupportSection content={homeContent.support} />
            <HomeContributionSection content={homeContent.contribution} />
            {hasCampaigns ? <HomeCampaignsSection content={editorialContent.campaigns} /> : null}
            <HomeTrustSection content={homeContent.trust} />
            {hasSponsors ? <HomeSponsorsSection content={editorialContent.sponsors} /> : null}
            <HomeClosingSection content={homeContent.closing} />
          </Stack>
        </Container>
      </main>

      <Footer
        primaryLinks={footerPrimaryLinks}
        contactLinks={footerContactLinks}
        contactCta={homeContent.hero.ctas.whatsapp}
      />
    </>
  );
}

export default function Home() {
  return <HomePage />;
}
