import { LayoutGrid, Users2, Wallet, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const nodes = [
  { icon: LayoutGrid, label: "Produção", position: "top-0 left-1/2 -translate-x-1/2" },
  { icon: Users2, label: "Cliente", position: "top-1/2 right-0 -translate-y-1/2" },
  { icon: Wallet, label: "Financeiro", position: "bottom-0 left-1/2 -translate-x-1/2" },
  { icon: TrendingUp, label: "Vendas", position: "top-1/2 left-0 -translate-y-1/2" },
];

export function EcosystemDiagram({ className }: { className?: string }) {
  return (
    <Reveal delay={0.1} className={cn("mx-auto flex justify-center", className)}>
      <div className="relative size-[280px] sm:size-[340px]">
        <svg
          aria-hidden
          viewBox="0 0 340 340"
          className="absolute inset-0 size-full text-line"
        >
          <line x1="170" y1="170" x2="170" y2="34" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" />
          <line x1="170" y1="170" x2="306" y2="170" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" />
          <line x1="170" y1="170" x2="170" y2="306" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" />
          <line x1="170" y1="170" x2="34" y2="170" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" />
        </svg>

        <div className="absolute left-1/2 top-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-line bg-ink text-amber shadow-soft-lg sm:size-28">
          <span className="font-display text-lg font-bold text-cream sm:text-xl">Atria</span>
        </div>

        {nodes.map((node) => (
          <div
            key={node.label}
            className={cn("absolute flex flex-col items-center gap-1.5", node.position)}
          >
            <span className="flex size-14 items-center justify-center rounded-2xl border border-line bg-white text-ink shadow-soft sm:size-16">
              <node.icon className="size-6" />
            </span>
            <span className="text-xs font-semibold text-text-muted">{node.label}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
