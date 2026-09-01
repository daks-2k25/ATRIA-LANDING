import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { mainAreas } from "@/data/areas";
import { featureCategories } from "@/data/features";
import { portalFeatures } from "@/data/portal";
import { aiFeatures } from "@/data/ai";
import type { LucideIcon } from "lucide-react";

function iconsFor(slug: string): LucideIcon[] {
  const category = featureCategories.find((c) => c.slug === slug);
  if (category) return category.features.slice(0, 4).map((f) => f.icon);
  if (slug === "portal-do-cliente") return portalFeatures.slice(0, 4).map((f) => f.icon);
  if (slug === "inteligencia-artificial") return aiFeatures.map((f) => f.icon);
  return [];
}

function AreaVisual({ icons, flip }: { icons: LucideIcon[]; flip?: boolean }) {
  return (
    <div className={cn("relative flex h-64 items-center justify-center sm:h-72", flip && "sm:justify-start")}>
      <div className="grid grid-cols-2 gap-4">
        {icons.map((Icon, i) => (
          <div
            key={i}
            className={cn(
              "flex size-24 items-center justify-center rounded-2xl border border-line bg-white shadow-soft sm:size-28",
              i === 0 && "translate-y-3",
              i === 1 && "-translate-y-2",
              i === 2 && "-translate-y-1",
              i === 3 && "translate-y-4"
            )}
          >
            <Icon className={cn("size-9 sm:size-10", i % 2 === 0 ? "text-ink" : "text-amber-dark")} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeatureAreasList() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <Container className="flex flex-col gap-20 sm:gap-28">
        {mainAreas.map((area, index) => {
          const flip = index % 2 === 1;
          return (
            <div
              key={area.slug}
              className={cn(
                "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",
                flip && "lg:[&>*:first-child]:order-2"
              )}
            >
              <Reveal>
                <span className="flex size-11 items-center justify-center rounded-xl bg-sage text-ink">
                  <area.icon className="size-5" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-bold text-ink sm:text-3xl">{area.label}</h2>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-text-muted">{area.cardSummary}</p>
                <Link
                  href={area.href}
                  className="group mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-ink"
                >
                  Conhecer {area.label}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>

              <Reveal delay={0.1}>
                <AreaVisual icons={iconsFor(area.slug)} flip={flip} />
              </Reveal>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
