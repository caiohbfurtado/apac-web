import { PrimaryButton, SecondaryButton } from "@/components/ui";
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

const defaultNavItems = [
  { href: "#fundacao", label: "Fundacao" },
  { href: "#playground-botoes", label: "Acoes" },
  { href: "#playground-badges-cards", label: "Conteudo" },
  { href: "#quero-ajudar", label: "Contato" },
] as const satisfies NavItem[];

const defaultCtas = [
  { href: "#preciso-apoio", label: "Preciso de apoio", variant: "primary" },
  { href: "#quero-ajudar", label: "Quero ajudar", variant: "secondary" },
] as const satisfies HeaderNavCta[];

export type HeaderNavProps = {
  items?: NavItem[];
  ctas?: HeaderNavCta[];
};

export function HeaderNav({ items = [...defaultNavItems], ctas = [...defaultCtas] }: HeaderNavProps) {
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
        </div>

        <HeaderNavMobileMenu items={items} ctas={ctas} />
      </div>
    </header>
  );
}
