"use client";

import { forwardRef } from "react";
import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-text-soft transition-colors duration-200 focus:outline-none focus:ring-4";

function fieldBorder(error?: boolean) {
  return error
    ? "border-red-300 focus:border-red-400 focus:ring-red-100"
    : "border-line focus:border-amber focus:ring-amber/15";
}

function FieldWrapper({
  label,
  htmlFor,
  required,
  error,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
        {required && (
          <span aria-hidden className="ml-0.5 text-amber-dark">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  wrapperClassName?: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { label, error, required, id, wrapperClassName, className, ...props },
  ref
) {
  return (
    <FieldWrapper label={label} htmlFor={id!} required={required} error={error} className={wrapperClassName}>
      <input
        ref={ref}
        id={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldBase, fieldBorder(!!error), className)}
        {...props}
      />
    </FieldWrapper>
  );
});

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  wrapperClassName?: string;
  placeholder?: string;
};

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(function SelectField(
  { label, error, required, id, wrapperClassName, className, placeholder, children, ...props },
  ref
) {
  return (
    <FieldWrapper label={label} htmlFor={id!} required={required} error={error} className={wrapperClassName}>
      <div className="relative">
        <select
          ref={ref}
          id={id}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(fieldBase, fieldBorder(!!error), "appearance-none pr-10", className)}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-text-soft" />
      </div>
    </FieldWrapper>
  );
});

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  wrapperClassName?: string;
};

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(function TextareaField(
  { label, error, required, id, wrapperClassName, className, ...props },
  ref
) {
  return (
    <FieldWrapper label={label} htmlFor={id!} required={required} error={error} className={wrapperClassName}>
      <textarea
        ref={ref}
        id={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldBase, fieldBorder(!!error), "min-h-28 resize-y", className)}
        {...props}
      />
    </FieldWrapper>
  );
});
