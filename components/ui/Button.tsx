import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonSize = "sm" | "md" | "lg";

type SharedButtonProps = {
  size?: ButtonSize;
  className?: string;
  children?: ReactNode;
};

type ButtonLinkProps = {
  href: string;
  disabled?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "className" | "children" | "href" | "onClick">;

type ButtonActionProps = {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export type ButtonProps = SharedButtonProps & (ButtonLinkProps | ButtonActionProps);

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md border text-sm font-semibold transition duration-200 ease-[var(--ease-standard)]";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2",
  md: "px-5 py-3",
  lg: "px-6 py-3.5 text-base",
};

const variantClasses = {
  primary:
    "bg-brand text-surface border-brand shadow-soft hover:bg-brand-strong hover:border-brand-strong",
  secondary: "bg-surface text-ink border-line hover:bg-surface-muted",
  whatsapp: "bg-success text-surface border-success hover:bg-success/90",
};

function getButtonClasses(size: ButtonSize, className?: string) {
  return cn(
    baseClasses,
    sizeClasses[size],
    "disabled:cursor-not-allowed disabled:opacity-60 aria-disabled:pointer-events-none aria-disabled:opacity-60",
    className,
  );
}

export function Button({ size = "md", className, children, ...props }: ButtonProps) {
  if ("href" in props && props.href) {
    const { href, disabled, tabIndex, ...rest } = props;

    return (
      <a
        href={href}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : tabIndex}
        className={getButtonClasses(size, className)}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const { type = "button", ...rest } = props as ButtonActionProps;

  return (
    <button type={type} className={getButtonClasses(size, className)} {...rest}>
      {children}
    </button>
  );
}

export function PrimaryButton({ className, ...props }: ButtonProps) {
  return <Button {...props} className={cn(variantClasses.primary, className)} />;
}

export function SecondaryButton({ className, ...props }: ButtonProps) {
  return <Button {...props} className={cn(variantClasses.secondary, className)} />;
}

export function WhatsAppButton({ className, ...props }: ButtonProps) {
  return <Button {...props} className={cn(variantClasses.whatsapp, className)} />;
}
