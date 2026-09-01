import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { aiFeatures } from "@/data/ai";

export function AIDeepDive() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {aiFeatures.map((feature, index) => (
            <RevealItem key={feature.title}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-line bg-cream-soft/60 p-8 sm:p-10">
                <span className="font-display text-sm font-bold text-amber-dark">0{index + 1}</span>
                <div className="mt-4 flex size-12 items-center justify-center rounded-2xl bg-ink text-amber">
                  <feature.icon className="size-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">{feature.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-muted">{feature.description}</p>
                <div className="mt-6 flex items-start gap-2 rounded-xl border border-line bg-white p-4 shadow-soft">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-amber-dark" />
                  <p className="text-sm font-medium text-ink">{feature.benefit}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
