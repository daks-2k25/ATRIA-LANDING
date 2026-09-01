import { Building2, Users2, Link2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const steps = [
  {
    icon: Building2,
    title: "A agência trabalha dentro do Atria",
    description: "Produção, aprovação interna, financeiro e contratos acontecem na plataforma, organizados por cliente.",
  },
  {
    icon: Users2,
    title: "O cliente acompanha pelo próprio portal",
    description: "Sem grupo de WhatsApp, sem planilha paralela — o cliente entra, vê o que importa e responde.",
  },
  {
    icon: Link2,
    title: "Tudo permanece conectado",
    description: "Cada aprovação, comentário e documento do portal reflete direto no fluxo de trabalho da agência.",
  },
];

export function PortalNarrative() {
  return (
    <section className="bg-cream-soft py-16 sm:py-24">
      <Container>
        <RevealGroup className="relative grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[52px] hidden h-px bg-line sm:block"
            style={{ marginInline: "16.5%" }}
          />
          {steps.map((step, index) => (
            <RevealItem key={step.title} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex size-[52px] items-center justify-center rounded-2xl border border-line bg-white text-ink shadow-soft">
                <step.icon className="size-6" />
              </span>
              <span className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-dark">
                Passo {index + 1}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-text-muted">{step.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
