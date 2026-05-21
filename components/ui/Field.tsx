import { Children, cloneElement, isValidElement, useId } from "react";
import type { ReactElement, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type FieldProps = {
  id?: string;
  label: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  className?: string;
  children: ReactNode;
};

type FieldControlInjectionProps = {
  id?: string;
  fieldHintId?: string;
  fieldErrorId?: string;
  fieldInvalid?: boolean;
  fieldRequired?: boolean;
};

function isFieldControlElement(child: ReactNode): child is ReactElement<FieldControlInjectionProps> {
  return isValidElement(child);
}

export function Field({
  id,
  label,
  hint,
  error,
  required = false,
  className,
  children,
}: FieldProps) {
  const autoId = useId();
  const defaultFieldId = id ?? `field-${autoId}`;
  const isInvalid = Boolean(error);
  const firstControlId = Children.toArray(children).find(isFieldControlElement)?.props.id;
  const controlId = firstControlId ?? defaultFieldId;
  const hintId = hint ? `${controlId}-hint` : undefined;
  const errorId = error ? `${controlId}-error` : undefined;

  const enhancedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;

    const childElement = child as ReactElement<FieldControlInjectionProps>;
    return cloneElement(childElement, {
      id: childElement.props.id ?? defaultFieldId,
      fieldHintId: hintId,
      fieldErrorId: errorId,
      fieldInvalid: isInvalid,
      fieldRequired: required,
    });
  });

  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={controlId} className="block text-small leading-small font-semibold text-ink">
        {label}
        {required ? (
          <span aria-hidden="true" className="ml-1 text-brand-strong">
            *
          </span>
        ) : null}
      </label>
      {enhancedChildren}
      {hint ? <p id={hintId} className="text-small leading-small text-ink/70">{hint}</p> : null}
      {error ? (
        <p id={errorId} role="alert" className="text-small leading-small font-medium text-brand-strong">
          Erro: {error}
        </p>
      ) : null}
    </div>
  );
}
