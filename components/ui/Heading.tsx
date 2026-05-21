import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type HeadingAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingSize = "xl" | "lg" | "md" | "sm" | "xs";
export type HeadingTone = "default" | "muted" | "brand";

export type HeadingProps = {
  as?: HeadingAs;
  size?: HeadingSize;
  tone?: HeadingTone;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<HeadingAs>, "as" | "className" | "children">;

const sizeClasses: Record<HeadingSize, string> = {
  xl: "text-4xl leading-tight font-bold sm:text-5xl",
  lg: "text-3xl leading-tight font-bold sm:text-4xl",
  md: "text-2xl leading-snug font-semibold sm:text-3xl",
  sm: "text-xl leading-snug font-semibold sm:text-2xl",
  xs: "text-lg leading-snug font-semibold",
};

const toneClasses: Record<HeadingTone, string> = {
  default: "text-ink",
  muted: "text-ink/75",
  brand: "text-brand-strong",
};

export function Heading({
  as = "h2",
  size = "md",
  tone = "default",
  className,
  children,
  ...props
}: HeadingProps) {
  const Component = as;

  return (
    <Component className={cn(sizeClasses[size], toneClasses[tone], className)} {...props}>
      {children}
    </Component>
  );
}

