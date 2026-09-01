import { Check, X, FileSignature, PenLine } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

function ConceptCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`w-56 rounded-2xl border border-line bg-white p-4 shadow-soft-lg sm:w-64 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

function ApprovalConcept() {
  return (
    <ConceptCard className="-rotate-6">
      <div className="h-20 rounded-lg bg-gradient-to-br from-amber/25 to-sage" />
      <p className="mt-3 text-xs font-semibold text-ink">Post — Campanha de outono</p>
      <div className="mt-3 flex gap-2">
        <span className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ink py-2 text-xs font-semibold text-amber">
          <Check className="size-3.5" /> Aprovar
        </span>
        <span className="flex size-8 items-center justify-center rounded-full border border-line text-text-muted">
          <X className="size-3.5" />
        </span>
      </div>
    </ConceptCard>
  );
}

function CalendarConcept() {
  return (
    <ConceptCard className="rotate-3">
      <p className="text-xs font-semibold text-ink">Calendário de conteúdo</p>
      <div className="mt-3 grid grid-cols-6 gap-1.5">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className={`aspect-square rounded-[4px] ${
              [4, 9, 14].includes(i) ? "bg-amber" : "bg-sage"
            }`}
          />
        ))}
      </div>
    </ConceptCard>
  );
}

function ContractConcept() {
  return (
    <ConceptCard className="-rotate-2">
      <div className="flex items-center gap-2 text-ink">
        <FileSignature className="size-4 text-amber-dark" />
        <p className="text-xs font-semibold">Contrato de prestação</p>
      </div>
      <div className="mt-3 space-y-1.5">
        <span className="block h-1.5 w-full rounded-full bg-sage" />
        <span className="block h-1.5 w-4/5 rounded-full bg-sage" />
        <span className="block h-1.5 w-3/5 rounded-full bg-sage" />
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-amber-dark">
        <PenLine className="size-3.5" />
        <span className="text-[11px] font-semibold uppercase tracking-wide">Assinado</span>
      </div>
    </ConceptCard>
  );
}

export function PortalConceptVisual() {
  return (
    <section className="bg-white pb-16 pt-4 sm:pb-24">
      <Container>
        <Reveal delay={0.1} className="hidden items-end justify-center gap-6 md:flex">
          <ApprovalConcept />
          <div className="mb-6">
            <CalendarConcept />
          </div>
          <ContractConcept />
        </Reveal>
      </Container>
    </section>
  );
}
