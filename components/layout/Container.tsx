import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerSize = "content" | "wide" | "full";
type ContainerGutter = "none" | "sm" | "md";

export type ContainerProps<TAs extends ElementType = "div"> = {
  as?: TAs;
  size?: ContainerSize;
  gutter?: ContainerGutter;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<TAs>, "as" | "className" | "children">;

const sizeClasses: Record<ContainerSize, string> = {
  content: "max-w-5xl",
  wide: "max-w-6xl",
  full: "max-w-none",
};

const gutterClasses: Record<ContainerGutter, string> = {
  none: "px-0",
  sm: "px-4 sm:px-6 lg:px-10",
  md: "px-6 sm:px-10 lg:px-16",
};

export function Container<TAs extends ElementType = "div">({
  as,
  size = "content",
  gutter = "md",
  className,
  children,
  ...props
}: ContainerProps<TAs>) {
  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      className={cn("mx-auto w-full", sizeClasses[size], gutterClasses[gutter], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
