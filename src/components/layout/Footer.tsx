import { Heading, Text } from "@/components/ui";
import { Container } from "./Container";
import { Stack } from "./Stack";

type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

type FooterLinkGroup = {
  title: string;
  links: FooterLink[];
  ariaLabel: string;
};

const defaultPrimaryLinks: FooterLinkGroup = {
  title: "Institucional",
  ariaLabel: "Links institucionais",
  links: [
    { href: "#fundacao", label: "Fundacao" },
    { href: "#preciso-apoio", label: "Preciso de apoio" },
    { href: "#quero-ajudar", label: "Quero ajudar" },
    { href: "#playground-badges-cards", label: "Transparencia" },
  ],
};

const defaultContactLinks: FooterLinkGroup = {
  title: "Contato",
  ariaLabel: "Canais de contato",
  links: [
    { href: "tel:+551134560000", label: "(11) 3456-0000" },
    { href: "mailto:contato@apac.org.br", label: "contato@apac.org.br" },
    { href: "https://wa.me/5511999999999", label: "WhatsApp", external: true },
  ],
};

const defaultSocialLinks: FooterLink[] = [
  { href: "https://www.instagram.com", label: "Instagram", external: true },
  { href: "https://www.facebook.com", label: "Facebook", external: true },
  { href: "https://www.youtube.com", label: "YouTube", external: true },
];

export type FooterProps = {
  primaryLinks?: FooterLinkGroup;
  contactLinks?: FooterLinkGroup;
  socialLinks?: FooterLink[];
};

export function Footer({
  primaryLinks = defaultPrimaryLinks,
  contactLinks = defaultContactLinks,
  socialLinks = defaultSocialLinks,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="mt-20 border-t border-line bg-surface-muted/60">
      <Container size="content" gutter="md" className="py-12 sm:py-14 lg:py-16">
        <Stack gap="lg">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <Stack gap="sm">
              <span className="inline-flex w-fit rounded-pill border border-brand/20 bg-brand-soft px-3 py-1 text-small font-semibold tracking-[0.1em] text-brand-strong uppercase">
                APAC
              </span>
              <Heading as="h2" size="sm">
                Apoio, acolhimento e orientacao para familias em tratamento.
              </Heading>
              <Text size="sm" tone="muted">
                Rua Exemplo, 123 - Sao Paulo/SP. Atendimento de segunda a sexta, das 8h as 18h.
              </Text>
            </Stack>

            <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:col-span-2">
              <Stack gap="sm">
                <Heading as="h3" size="xs" className="tracking-[0.08em] uppercase">
                  {primaryLinks.title}
                </Heading>
                <nav aria-label={primaryLinks.ariaLabel}>
                  <ul className="space-y-2">
                    {primaryLinks.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="rounded-sm text-small font-medium text-ink transition hover:text-brand-strong hover:underline"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Stack>

              <Stack gap="sm">
                <Heading as="h3" size="xs" className="tracking-[0.08em] uppercase">
                  {contactLinks.title}
                </Heading>
                <nav aria-label={contactLinks.ariaLabel}>
                  <ul className="space-y-2">
                    {contactLinks.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="rounded-sm text-small font-medium text-ink transition hover:text-brand-strong hover:underline"
                          {...(link.external
                            ? { target: "_blank", rel: "noreferrer noopener" }
                            : undefined)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Stack>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-line/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Text size="xs" tone="muted">
              APAC - Associacao de Apoio. {year}. Todos os direitos reservados.
            </Text>

            <nav aria-label="Redes sociais da APAC">
              <ul className="flex flex-wrap items-center gap-4">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded-sm text-small font-semibold text-ink transition hover:text-brand-strong hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Stack>
      </Container>
    </footer>
  );
}
