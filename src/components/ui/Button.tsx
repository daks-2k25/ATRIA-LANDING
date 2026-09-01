import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline-light" | "outline-dark" | "ghost-dark" | "ghost-light";
type Size = "md" | "lg";

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: () => void;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-[15px]",
  lg: "h-[3.25rem] px-7 text-[15.5px]",
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold whitespace-nowrap overflow-hidden select-none transition-colors duration-300";

function Sweep({ color }: { color: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-100",
        color
      )}
    />
  );
}

function Inner({
  children,
  icon,
  textClass,
}: {
  children: React.ReactNode;
  icon?: boolean;
  textClass: string;
}) {
  return (
    <span className={cn("relative z-10 flex items-center gap-2 transition-colors duration-300", textClass)}>
      {children}
      {icon && (
        <ArrowRight className="size-[15px] shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </span>
  );
}

function classesFor(variant: Variant, size: Size, className?: string) {
  const variantBase: Record<Variant, string> = {
    primary: "bg-amber",
    "outline-light": "border border-white/25 bg-white/[0.04] backdrop-blur-sm",
    "outline-dark": "border border-ink/15 bg-transparent",
    "ghost-dark": "bg-transparent",
    "ghost-light": "bg-transparent",
  };
  return cn(base, sizes[size], variantBase[variant], className);
}

function content(variant: Variant, children: React.ReactNode, icon?: boolean) {
  switch (variant) {
    case "primary":
      return (
        <>
          <Sweep color="bg-ink-3" />
          <Inner icon={icon} textClass="text-ink-3 group-hover:text-cream">
            {children}
          </Inner>
        </>
      );
    case "outline-light":
      return (
        <>
          <Sweep color="bg-cream" />
          <Inner icon={icon} textClass="text-cream group-hover:text-ink-3">
            {children}
          </Inner>
        </>
      );
    case "outline-dark":
      return (
        <>
          <Sweep color="bg-ink" />
          <Inner icon={icon} textClass="text-ink group-hover:text-cream">
            {children}
          </Inner>
        </>
      );
    case "ghost-dark":
      return (
        <Inner icon={icon} textClass="text-ink underline decoration-ink/25 underline-offset-4 group-hover:decoration-amber group-hover:text-ink">
          {children}
        </Inner>
      );
    case "ghost-light":
      return (
        <Inner icon={icon} textClass="text-cream underline decoration-cream/25 underline-offset-4 group-hover:decoration-amber">
          {children}
        </Inner>
      );
  }
}

export function Button({ children, variant = "primary", size = "md", icon = true, className, href, onClick, type = "button" }: ButtonProps) {
  const classes = classesFor(variant, size, className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content(variant, children, icon)}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content(variant, children, icon)}
    </button>
  );
}
