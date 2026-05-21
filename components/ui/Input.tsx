import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export type InputProps = Omit<ComponentPropsWithoutRef<"input">, "size"> & {
  fieldHintId?: string;
  fieldErrorId?: string;
  fieldInvalid?: boolean;
  fieldRequired?: boolean;
};

export function Input({
  id,
  className,
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
  required,
  fieldHintId,
  fieldErrorId,
  fieldInvalid,
  fieldRequired,
  ...props
}: InputProps) {
  const isInvalid = ariaInvalid ?? fieldInvalid ?? false;
  const describedBy = [ariaDescribedBy, fieldHintId, fieldErrorId]
    .filter(Boolean)
    .join(" ");

  return (
    <input
      id={id}
      aria-describedby={describedBy || undefined}
      aria-invalid={isInvalid}
      required={required ?? fieldRequired}
      className={cn(
        "min-h-12 w-full rounded-md border border-line bg-surface px-4 py-3 text-body leading-body text-ink shadow-soft transition duration-200 ease-[var(--ease-standard)] placeholder:text-ink/45 focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:bg-surface-muted disabled:text-ink/60 disabled:opacity-100",
        isInvalid
          ? "border-brand-strong bg-brand-soft/35 focus-visible:border-brand-strong focus-visible:ring-brand-strong/35"
          : undefined,
        className,
      )}
      {...props}
    />
  );
}
