"use client";

import { useId, useRef, useState } from "react";
import { PrimaryButton, SecondaryButton } from "@/components/ui";
import { cn } from "@/lib/cn";

type NavItem = {
  href: string;
  label: string;
};

type HeaderNavMobileMenuProps = {
  items: NavItem[];
  ctas: {
    href: string;
    label: string;
    variant: "primary" | "secondary";
  }[];
};

export function HeaderNavMobileMenu({ items, ctas }: HeaderNavMobileMenuProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Fechar menu principal" : "Abrir menu principal"}
        className="inline-flex min-h-11 items-center justify-center rounded-button border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink shadow-soft transition hover:border-brand/40 hover:bg-brand-soft/35"
        ref={toggleRef}
        onClick={() => setOpen((previous) => !previous)}
      >
        {open ? "Fechar" : "Menu"}
      </button>
      <div
        id={menuId}
        hidden={!open}
        aria-hidden={!open}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            setOpen(false);
            toggleRef.current?.focus();
          }
        }}
        className={cn(
          "mt-4 overflow-hidden rounded-surface border border-line bg-surface px-4 py-5 shadow-card transition duration-200 ease-[var(--ease-standard)]",
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm px-1 py-2 text-sm font-semibold text-ink underline-offset-4 hover:text-brand-strong hover:underline"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-3 border-t border-line pt-4">
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
        </div>
      </div>
    </div>
  );
}
