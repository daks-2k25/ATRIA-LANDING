import { cn } from "@/lib/utils";
import { Kicker } from "./Kicker";
import { Reveal } from "./Reveal";

export function SectionHeading({
  kicker,
  title,
  description,
  tone = "dark",
  align = "left",
  className,
}: {
  kicker?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {kicker && (
        <Reveal>
          <Kicker tone={tone}>{kicker}</Kicker>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
            tone === "dark" ? "text-ink" : "text-cream"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed sm:text-lg",
              tone === "dark" ? "text-text-muted" : "text-text-on-ink-muted",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
