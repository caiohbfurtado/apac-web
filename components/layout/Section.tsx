import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionSurface = "default" | "muted";
type SectionSpacing = "tight" | "normal" | "loose";

export type SectionProps<TAs extends ElementType = "section"> = {
  as?: TAs;
  id?: string;
  surface?: SectionSurface;
  spacing?: SectionSpacing;
  heading?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<TAs>, "as" | "className" | "children">;

const surfaceClasses: Record<SectionSurface, string> = {
  default: "bg-surface border-line shadow-card",
  muted: "bg-surface-muted border-line shadow-soft",
};

const spacingClasses: Record<SectionSpacing, string> = {
  tight: "p-6 sm:p-8 lg:p-10",
  normal: "p-8 sm:p-12 lg:p-16",
  loose: "p-10 sm:p-14 lg:p-20",
};

export function Section<TAs extends ElementType = "section">({
  as,
  id,
  surface = "default",
  spacing = "normal",
  heading,
  description,
  actions,
  className,
  children,
  ...props
}: SectionProps<TAs>) {
  const Component = (as ?? "section") as ElementType;
  const hasHeader = Boolean(heading || description || actions);

  return (
    <Component
      id={id}
      className={cn(
        "w-full rounded-card border",
        surfaceClasses[surface],
        spacingClasses[spacing],
        className,
      )}
      {...props}
    >
      {hasHeader ? (
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1 max-w-3xl">
            {heading ? <div>{heading}</div> : null}
            {description ? <div className="mt-3 max-w-2xl">{description}</div> : null}
          </div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>
      ) : null}
      {children ? <div className={cn(hasHeader ? "mt-10" : undefined)}>{children}</div> : null}
    </Component>
  );
}
