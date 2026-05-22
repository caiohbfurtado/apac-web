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
import { hasCampaigns, hasSponsors, homeEditorialContent } from "@/lib/home-editorial-content";

const headerItems = [
  { href: `#${homeContent.hero.id}`, label: "Início" },
  { href: `#${homeContent.institution.id}`, label: "Atuação" },
  { href: `#${homeContent.support.id}`, label: "Preciso de apoio" },
  { href: `#${homeContent.contribution.id}`, label: "Quero ajudar" },
  ...(hasCampaigns
    ? [{ href: `#${homeEditorialContent.campaigns.section.id}`, label: "Campanhas" }]
    : []),
  { href: `#${homeContent.trust.id}`, label: "Transparência" },
  ...(hasSponsors
    ? [{ href: `#${homeEditorialContent.sponsors.section.id}`, label: "Patrocinadores" }]
    : []),
] as const;

const footerPrimaryLinks = {
  title: "Institucional",
  ariaLabel: "Links institucionais",
  links: [
    { href: `#${homeContent.hero.id}`, label: "Início" },
    { href: `#${homeContent.institution.id}`, label: "Atuação" },
    { href: `#${homeContent.support.id}`, label: "Preciso de apoio" },
    { href: `#${homeContent.contribution.id}`, label: "Quero ajudar" },
  ],
};

const footerContactLinks = {
  title: "Contato",
  ariaLabel: "Canais de contato",
  links: [
    { href: "tel:+551534560000", label: "(15) 3456-0000" },
    { href: "mailto:contato@apac.org.br", label: "contato@apac.org.br" },
  ],
};

export default function Home() {
  return (
    <main>
      <HeaderNav
        items={[...headerItems]}
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

      <Container className="py-8 sm:py-10 lg:py-12" size="wide" gutter="md">
        <HomeHeroSection content={homeContent.hero} />
        <HomeHighlightsBand content={homeContent.hero} />
      </Container>

      <Container className="pt-4 pb-16 sm:pt-6 sm:pb-18 lg:pt-8 lg:pb-20" size="wide" gutter="md">
        <Stack gap="xl">
          <HomeInstitutionSection content={homeContent.institution} />
          <HomeSupportSection content={homeContent.support} />
          <HomeContributionSection content={homeContent.contribution} />
          <HomeCampaignsSection content={homeEditorialContent.campaigns} />
          <HomeTrustSection content={homeContent.trust} />
          <HomeSponsorsSection content={homeEditorialContent.sponsors} />
          <HomeClosingSection content={homeContent.closing} />
        </Stack>
      </Container>

      <Footer
        primaryLinks={footerPrimaryLinks}
        contactLinks={footerContactLinks}
        contactCta={homeContent.hero.ctas.whatsapp}
      />
    </main>
  );
}
