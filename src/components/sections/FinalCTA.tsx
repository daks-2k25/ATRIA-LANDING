import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_55%_at_50%_100%,rgba(232,146,60,0.1),transparent_70%)]"
      />

      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <Kicker>Vamos conversar</Kicker>
        </Reveal>

        <Reveal delay={0.08} className="mt-6 max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Pronto para organizar a operação da sua agência?
          </h2>
        </Reveal>

        <Reveal delay={0.16} className="mt-9">
          <Button href="/7-dias-gratis" size="lg">
            7 dias grátis
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
