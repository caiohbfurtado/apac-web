import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type TextSize = "lg" | "md" | "sm" | "xs";
type TextTone = "default" | "muted" | "strong" | "brand";

export type TextProps<TAs extends ElementType = "p"> = {
  as?: TAs;
  size?: TextSize;
  tone?: TextTone;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<TAs>, "as" | "className" | "children">;

const sizeClasses: Record<TextSize, string> = {
  lg: "text-lead leading-lead",
  md: "text-body leading-body",
  sm: "text-small leading-small",
  xs: "text-caption leading-caption",
};

const toneClasses: Record<TextTone, string> = {
  default: "text-ink/80",
  muted: "text-ink/60",
  strong: "text-ink",
  brand: "text-brand-strong",
};

export function Text<TAs extends ElementType = "p">({
  as,
  size = "md",
  tone = "default",
  className,
  children,
  ...props
}: TextProps<TAs>) {
  const Component = (as ?? "p") as ElementType;

  return (
    <Component className={cn(sizeClasses[size], toneClasses[tone], className)} {...props}>
      {children}
    </Component>
  );
}

