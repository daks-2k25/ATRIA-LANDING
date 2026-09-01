import { cn } from "@/lib/utils";

export function Kicker({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
        tone === "dark"
          ? "border-ink/12 bg-ink/[0.04] text-ink"
          : "border-white/20 bg-white/[0.06] text-cream",
        className
      )}
    >
      <span className="size-1.5 rounded-full bg-amber" />
      {children}
    </span>
  );
}
