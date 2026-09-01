import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { EcosystemDiagram } from "@/components/sections/EcosystemDiagram";

export function Ecosystem() {
  return (
    <section className="bg-sage/60 py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <Kicker>Diferencial</Kicker>
          </Reveal>
          <Reveal delay={0.08} className="mt-6">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Produção, cliente, financeiro e vendas — conectados de verdade.
            </h2>
          </Reveal>
          <Reveal delay={0.16} className="mt-5 max-w-md">
            <p className="text-[15px] leading-relaxed text-text-muted">
              Cada aprovação, cada contrato e cada lead vivem no mesmo lugar. Nada de exportar
              planilha para conferir o financeiro ou perguntar no WhatsApp se o post já foi
              aprovado — a operação inteira da agência fala a mesma língua.
            </p>
          </Reveal>
        </div>

        <EcosystemDiagram />
      </Container>
    </section>
  );
}
