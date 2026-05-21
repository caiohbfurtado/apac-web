import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardSurface = "default" | "muted" | "brand";
type CardPadding = "sm" | "md" | "lg";

export type CardProps<TAs extends ElementType = "article"> = {
  as?: TAs;
  surface?: CardSurface;
  padding?: CardPadding;
  interactive?: boolean;
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<TAs>, "as" | "className" | "children">;

const surfaceClasses: Record<CardSurface, string> = {
  default: "bg-surface border-line shadow-card",
  muted: "bg-surface-muted border-line shadow-soft",
  brand: "border-brand/20 bg-brand-soft/40 shadow-soft",
};

const paddingClasses: Record<CardPadding, string> = {
  sm: "p-5 sm:p-6",
  md: "p-6 sm:p-8",
  lg: "p-8 sm:p-10",
};

export function Card<TAs extends ElementType = "article">({
  as,
  surface = "default",
  padding = "md",
  interactive = false,
  icon,
  title,
  description,
  action,
  className,
  children,
  ...props
}: CardProps<TAs>) {
  const Component = (as ?? (interactive ? "button" : "article")) as ElementType;
  const hasHeader = Boolean(icon || title || description || action);

  const interactiveClasses = interactive
    ? "cursor-pointer text-left hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transform-none"
    : undefined;

  // Add aria-label if interactive and title exists but no as is provided
  const accessibilityProps =
    interactive && !as && typeof title === "string" ? { "aria-label": title } : {};

  const buttonProps =
    Component === "button"
      ? ((() => {
          const { type = "button", ...rest } = props as ComponentPropsWithoutRef<"button">;
          return { type, ...rest };
        })() as ComponentPropsWithoutRef<"button">)
      : props;

  const buttonLayoutClasses =
    Component === "button" ? "flex flex-col items-stretch justify-start" : undefined;

  return (
    <Component
      className={cn(
        "group block w-full rounded-card border transition duration-200 ease-[var(--ease-standard)]",
        surfaceClasses[surface],
        paddingClasses[padding],
        buttonLayoutClasses,
        interactiveClasses,
        className,
      )}
      {...accessibilityProps}
      {...buttonProps}
    >
      {hasHeader ? (
        <div
          className={cn(
            "flex w-full items-start justify-between gap-4",
            interactive ? "text-left" : undefined,
          )}
        >
          <div className="flex min-w-0 flex-1 gap-4">
            {icon ? (
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-brand-strong">
                {icon}
              </div>
            ) : null}
            <div className="min-w-0 space-y-2">
              {title ? (
                <div className="text-h4 leading-h4 font-semibold text-ink">
                  {title}
                </div>
              ) : null}
              {description ? (
                <div className="text-body leading-body text-ink/75">
                  {description}
                </div>
              ) : null}
            </div>
          </div>
          {action ? <div className="shrink-0">{action}</div> : null}
        </div>
      ) : null}
      {children ? (
        <div className={cn(hasHeader ? "mt-6" : undefined, interactive ? "text-left" : undefined)}>
          {children}
        </div>
      ) : null}
    </Component>
  );
}
