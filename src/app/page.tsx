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
  { href: `#${homeContent.institution.id}`, label: "Atuacao" },
  { href: `#${homeContent.support.id}`, label: "Apoio" },
  ...(hasCampaigns
    ? [{ href: `#${homeEditorialContent.campaigns.section.id}`, label: "Campanhas" }]
    : []),
  ...(hasSponsors
    ? [{ href: `#${homeEditorialContent.sponsors.section.id}`, label: "Patrocinadores" }]
    : []),
  { href: `#${homeContent.trust.id}`, label: "Transparencia" },
] as const;

const footerPrimaryLinks = {
  title: "Institucional",
  ariaLabel: "Links institucionais",
  links: [
    { href: `#${homeContent.hero.id}`, label: "Inicio" },
    { href: `#${homeContent.institution.id}`, label: "Atuacao" },
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

      <Container className="py-16" size="content" gutter="md">
        <Stack gap="lg">
          <HomeHeroSection content={homeContent.hero} />
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
