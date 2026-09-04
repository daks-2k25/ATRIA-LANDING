import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { Velaris } from "@/components/ui/velaris";
import { moduleStrip } from "@/data/nav";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-10 pt-36 sm:pt-44">
      <Velaris className="-z-10" />

      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <Kicker>Feito para agências de marketing e criação</Kicker>
        </Reveal>

        <Reveal delay={0.08} className="mt-7">
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-[3.75rem]">
            Sua agência organizada, do briefing{" "}
            <span className="relative whitespace-nowrap">
              ao pagamento
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                className="absolute -bottom-1 left-0 h-3 w-full text-amber"
                preserveAspectRatio="none"
              >
                <path d="M2 9C60 3 240 3 298 9" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h1>
        </Reveal>

        <Reveal delay={0.16} className="mt-6 max-w-xl">
          <p className="text-lg leading-relaxed text-text-muted">
            Produção, aprovação de clientes, financeiro e CRM em uma única plataforma — com um
            portal dedicado para cada cliente da sua agência.
          </p>
        </Reveal>

        <Reveal delay={0.24} className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Button href="/7-dias-gratis" size="lg">
            7 dias grátis
          </Button>
          <Button href="/funcionalidades" size="lg" variant="outline-dark" icon={false}>
            Ver funcionalidades
          </Button>
        </Reveal>
      </Container>

      <div className="relative mt-16 border-t border-line-soft py-6">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-3">
            {[...moduleStrip, ...moduleStrip].map((mod, i) => (
              <span
                key={`${mod}-${i}`}
                className="shrink-0 rounded-full border border-line px-4 py-2 text-sm font-medium text-text-muted"
              >
                {mod}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
