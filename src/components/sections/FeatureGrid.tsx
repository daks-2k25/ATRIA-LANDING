import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cn } from "@/lib/utils";
import type { Feature } from "@/data/features";

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <RevealItem key={feature.title} className={cn(index === 0 && "sm:col-span-2 lg:col-span-1")}>
              <SpotlightCard className="group h-full rounded-2xl border border-line bg-cream/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-soft hover:bg-white hover:shadow-soft-lg">
                <div className="flex size-11 items-center justify-center rounded-xl bg-white text-ink shadow-soft transition-colors duration-300 group-hover:bg-ink group-hover:text-amber">
                  <feature.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{feature.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-muted">{feature.description}</p>
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
