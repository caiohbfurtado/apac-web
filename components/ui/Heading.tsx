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
  xl: "text-h1 leading-h1 font-bold",
  lg: "text-h2 leading-h2 font-bold",
  md: "text-h3 leading-h3 font-semibold",
  sm: "text-h4 leading-h4 font-semibold",
  xs: "text-h5 leading-h5 font-bold",
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

