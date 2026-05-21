import { Container, Footer, HeaderNav, Stack } from "@/components/layout";
import {
  HomeCampaignsSection,
  HomeClosingSection,
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
  ...(hasCampaigns
    ? [{ href: `#${homeEditorialContent.campaigns.section.id}`, label: "Campanhas" }]
    : []),
  ...(hasSponsors
    ? [{ href: `#${homeEditorialContent.sponsors.section.id}`, label: "Patrocinadores" }]
    : []),
  { href: `#${homeContent.trust.id}`, label: "Transparência" },
] as const;

const footerPrimaryLinks = {
  title: "Institucional",
  ariaLabel: "Links institucionais",
  links: [
    { href: `#${homeContent.hero.id}`, label: "Início" },
    { href: `#${homeContent.institution.id}`, label: "Atuação" },
    { href: `#${homeContent.support.id}`, label: "Preciso de apoio" },
    { href: `#${homeContent.closing.id}`, label: "Quero ajudar" },
  ],
};

const footerContactLinks = {
  title: "Contato",
  ariaLabel: "Canais de contato",
  links: [
    { href: "tel:+551134560000", label: "(11) 3456-0000" },
    { href: "mailto:contato@apac.org.br", label: "contato@apac.org.br" },
    { href: homeContent.hero.ctas.whatsapp.href, label: "WhatsApp", external: true },
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
      />

      <Container className="py-8 sm:py-10 lg:py-12" size="wide" gutter="md">
        <HomeHeroSection content={homeContent.hero} />
      </Container>

      <Container className="pt-4 pb-16 sm:pt-6 sm:pb-18 lg:pt-8 lg:pb-20" size="wide" gutter="md">
        <Stack gap="md">
          <HomeInstitutionSection content={homeContent.institution} />
          <HomeSupportSection content={homeContent.support} />
          <HomeCampaignsSection content={homeEditorialContent.campaigns} />
          <HomeSponsorsSection content={homeEditorialContent.sponsors} />
          <HomeTrustSection content={homeContent.trust} />
          <HomeClosingSection content={homeContent.closing} />
        </Stack>
      </Container>

      <Footer primaryLinks={footerPrimaryLinks} contactLinks={footerContactLinks} />
    </main>
  );
}
