import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeTone = "default" | "brand" | "success" | "info";

export type BadgeProps<TAs extends ElementType = "span"> = {
  as?: TAs;
  tone?: BadgeTone;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<TAs>, "as" | "className" | "children">;

const toneClasses: Record<BadgeTone, string> = {
  default: "border-line bg-surface-muted text-ink",
  brand: "border-brand/20 bg-brand-soft text-brand-strong",
  success: "border-success/20 bg-success/10 text-success",
  info: "border-info/20 bg-info/10 text-info",
};

export function Badge<TAs extends ElementType = "span">({
  as,
  tone = "default",
  className,
  children,
  ...props
}: BadgeProps<TAs>) {
  const Component = (as ?? "span") as ElementType;

  return (
    <Component
      className={cn(
        "inline-flex items-center rounded-pill border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] leading-none",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
