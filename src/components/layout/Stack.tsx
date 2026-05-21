import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type StackDirection = "vertical" | "horizontal";
type StackAlign = "start" | "center" | "end" | "stretch";
type StackJustify = "start" | "center" | "end" | "between";
type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";

export type StackProps<TAs extends ElementType = "div"> = {
  as?: TAs;
  direction?: StackDirection;
  align?: StackAlign;
  justify?: StackJustify;
  gap?: StackGap;
  wrap?: boolean;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<TAs>, "as" | "className" | "children">;

const gapClasses: Record<StackGap, string> = {
  none: "gap-0",
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
};

const alignClasses: Record<StackAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const justifyClasses: Record<StackJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
};

export function Stack<TAs extends ElementType = "div">({
  as,
  direction = "vertical",
  align = "stretch",
  justify = "start",
  gap = "md",
  wrap = false,
  className,
  children,
  ...props
}: StackProps<TAs>) {
  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      className={cn(
        "flex",
        direction === "vertical" ? "flex-col" : "flex-row",
        wrap ? "flex-wrap" : "flex-nowrap",
        gapClasses[gap],
        alignClasses[align],
        justifyClasses[justify],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
