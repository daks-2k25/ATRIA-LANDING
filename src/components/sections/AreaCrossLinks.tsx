import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { mainAreas } from "@/data/areas";

export function AreaCrossLinks({ exclude }: { exclude: string }) {
  const others = mainAreas.filter((a) => a.slug !== exclude);

  return (
    <section className="border-t border-line-soft bg-cream-soft py-16 sm:py-20">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-soft">
          Explorar outras áreas
        </p>

        <RevealGroup className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((area) => (
            <RevealItem key={area.slug}>
              <Link
                href={area.href}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-line bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg"
              >
                <span className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-sage text-ink">
                    <area.icon className="size-[18px]" />
                  </span>
                  <span className="font-display text-[15px] font-semibold text-ink">{area.label}</span>
                </span>
                <ArrowUpRight className="size-4 shrink-0 text-text-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-dark" />
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
