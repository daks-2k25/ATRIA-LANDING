import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { mainAreas } from "@/data/areas";
import { portalFeatures } from "@/data/portal";

export function MainAreas() {
  const portal = mainAreas.find((a) => a.featured)!;
  const rest = mainAreas.filter((a) => !a.featured);

  return (
    <section id="funcionalidades" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          kicker="Principais áreas"
          title="Tudo o que a sua agência precisa, em um só produto"
          description="Explore cada frente da Atria em profundidade — cada área tem uma página própria."
        />

        <Reveal delay={0.1} className="mt-12">
          <Link
            href={portal.href}
            className="group relative block overflow-hidden rounded-3xl border border-line bg-ink p-8 shadow-soft-lg transition-all duration-300 hover:-translate-y-1 sm:p-12"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-amber/15 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-lg">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cream">
                  <portal.icon className="size-3.5 text-amber" />
                  Portal do Cliente
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-cream sm:text-3xl">
                  Seu cliente aprova, acompanha e participa — sem sair da Atria.
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-on-ink-muted">
                  {portal.cardSummary}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-amber">
                  Conhecer o Portal do Cliente
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>

              <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                {portalFeatures.slice(0, 6).map((f) => (
                  <span
                    key={f.title}
                    className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-text-on-ink-muted"
                  >
                    {f.title}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </Reveal>

        <RevealGroup className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((area) => (
            <RevealItem key={area.slug}>
              <Link href={area.href} className="block h-full">
                <SpotlightCard className="group flex h-full flex-col rounded-2xl border border-line bg-cream/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft-lg">
                  <div className="flex items-start justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-white text-ink shadow-soft transition-colors duration-300 group-hover:bg-ink group-hover:text-amber">
                      <area.icon className="size-5" />
                    </span>
                    <ArrowUpRight className="size-4 text-text-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-dark" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{area.label}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-text-muted">{area.cardSummary}</p>
                </SpotlightCard>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
