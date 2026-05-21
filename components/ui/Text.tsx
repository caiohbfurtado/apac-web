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
  lg: "text-lg leading-relaxed sm:text-xl",
  md: "text-base leading-7",
  sm: "text-sm leading-6",
  xs: "text-xs leading-5",
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

