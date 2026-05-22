import { PrimaryButton, SecondaryButton, WhatsAppButton } from "@/components/ui";
import { HeaderNavMobileMenu } from "./HeaderNavMobileMenu";

type NavItem = {
  href: string;
  label: string;
};

type HeaderNavCta = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
};

type HeaderNavContactCta = {
  href: string;
  label: string;
};

const defaultNavItems = [
  { href: "#fundacao", label: "Início" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#preciso-de-apoio", label: "Preciso de apoio" },
  { href: "#transparencia", label: "Transparência" },
  { href: "#como-ajudar", label: "Quero ajudar" },
] as const satisfies NavItem[];

const defaultCtas = [
  { href: "#preciso-de-apoio", label: "Preciso de apoio", variant: "primary" },
  { href: "#como-ajudar", label: "Quero ajudar", variant: "secondary" },
] as const satisfies HeaderNavCta[];

export type HeaderNavProps = {
  items?: NavItem[];
  ctas?: HeaderNavCta[];
  contactCta?: HeaderNavContactCta;
};

const defaultContactCta: HeaderNavContactCta = {
  href: "https://wa.me/5511999999999",
  label: "Falar no WhatsApp",
};

export function HeaderNav({
  items = [...defaultNavItems],
  ctas = [...defaultCtas],
  contactCta = defaultContactCta,
}: HeaderNavProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-surface/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-10 lg:px-16">
        <a href="#fundacao" className="inline-flex items-center gap-3 rounded-sm">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-pill bg-brand text-sm font-bold text-surface">
            AP
          </span>
          <span className="text-sm font-semibold tracking-[0.08em] text-ink uppercase">APAC</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm text-sm font-semibold text-ink underline-offset-4 transition hover:text-brand-strong hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {ctas.map((cta) =>
            cta.variant === "primary" ? (
              <PrimaryButton key={cta.href} href={cta.href} size="sm">
                {cta.label}
              </PrimaryButton>
            ) : (
              <SecondaryButton key={cta.href} href={cta.href} size="sm">
                {cta.label}
              </SecondaryButton>
            ),
          )}
          <WhatsAppButton
            href={contactCta.href}
            size="sm"
            target="_blank"
            rel="noreferrer noopener"
            className="whitespace-nowrap"
          >
            {contactCta.label}
          </WhatsAppButton>
        </div>

        <HeaderNavMobileMenu items={items} ctas={ctas} contactCta={contactCta} />
      </div>
    </header>
  );
}
