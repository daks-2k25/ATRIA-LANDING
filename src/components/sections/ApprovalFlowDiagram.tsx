import { Fragment } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Globe,
  MessageSquareWarning,
  RotateCcw,
  Send,
  UserCheck,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Step = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  detail: string;
  accent?: "default" | "ink" | "success";
  canReject?: boolean;
};

const steps: Step[] = [
  {
    icon: ClipboardList,
    label: "Tarefa criada",
    detail: "Briefing registrado no kanban",
  },
  {
    icon: Send,
    label: "Equipe entrega",
    detail: "Resultado enviado para revisão",
  },
  {
    icon: UserCheck,
    label: "Líder aprova",
    detail: "Revisão interna da agência",
    accent: "ink",
    canReject: true,
  },
  {
    icon: Globe,
    label: "Portal do cliente",
    detail: "Conteúdo disponível para o cliente",
    accent: "ink",
  },
  {
    icon: CheckCircle2,
    label: "Cliente aprova",
    detail: "Pronto para publicar",
    accent: "success",
    canReject: true,
  },
];

function StepCard({
  step,
  index,
  className,
}: {
  step: Step;
  index: number;
  className?: string;
}) {
  const Icon = step.icon;

  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      <div
        className={cn(
          "relative flex w-full flex-col items-center rounded-2xl border bg-white px-4 py-4 text-center shadow-soft transition-shadow duration-300 hover:shadow-soft-lg sm:px-5 sm:py-5",
          step.accent === "ink" && "border-ink/15 bg-ink text-cream",
          step.accent === "success" && "border-amber/30 bg-amber/8",
          (!step.accent || step.accent === "default") && "border-line",
        )}
      >
        <span className="absolute -top-2.5 left-3 flex size-5 items-center justify-center rounded-full border border-line bg-white text-[10px] font-bold text-text-muted">
          {index + 1}
        </span>
        <span
          className={cn(
            "flex size-11 items-center justify-center rounded-xl",
            step.accent === "ink" && "bg-white/10 text-amber",
            step.accent === "success" && "bg-amber/15 text-amber-dark",
            (!step.accent || step.accent === "default") && "bg-sage text-ink",
          )}
        >
          <Icon className="size-5" />
        </span>
        <p
          className={cn(
            "mt-3 font-display text-sm font-semibold sm:text-[15px]",
            step.accent === "ink" ? "text-cream" : "text-ink",
          )}
        >
          {step.label}
        </p>
        <p
          className={cn(
            "mt-1 text-xs leading-relaxed",
            step.accent === "ink" ? "text-text-on-ink-muted" : "text-text-muted",
          )}
        >
          {step.detail}
        </p>
      </div>
      {step.canReject ? (
        <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-amber/20 bg-amber/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-dark">
          ou reprova ↓
        </span>
      ) : null}
    </div>
  );
}

function FlowArrow({ className }: { className?: string }) {
  return (
    <div className={cn("flex shrink-0 items-center justify-center", className)}>
      <ArrowRight className="size-4 text-amber-dark/80 sm:size-5" aria-hidden />
    </div>
  );
}

function RejectionLoop({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex items-start gap-3 rounded-2xl border border-amber/25 bg-white px-4 py-4 shadow-soft sm:items-center sm:gap-4 sm:px-5",
        className,
      )}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber/12 text-amber-dark">
        <MessageSquareWarning className="size-4.5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-display text-sm font-semibold text-ink">
          Reprovação do líder ou do cliente
        </p>
        <p className="mt-1 text-xs leading-relaxed text-text-muted sm:text-[13px]">
          O conteúdo volta para a equipe com a justificativa — e o ciclo recomeça na entrega.
        </p>
      </div>
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-cream-soft px-3 py-1.5 text-xs font-semibold text-ink">
        <RotateCcw className="size-3.5 text-amber-dark" />
        Volta para a equipe
      </span>
    </div>
  );
}

function DesktopRejectionPaths() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1080 120"
      className="pointer-events-none mt-2 h-24 w-full text-amber-dark/40"
      preserveAspectRatio="none"
    >
      <defs>
        <marker id="reject-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="currentColor" />
        </marker>
      </defs>
      {/* Leader rejection down */}
      <path
        d="M 432 0 L 432 36 Q 432 52 416 52 L 540 52"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 5"
        markerEnd="url(#reject-arrow)"
      />
      {/* Client rejection down */}
      <path
        d="M 918 0 L 918 36 Q 918 52 902 52 L 540 52"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 5"
        markerEnd="url(#reject-arrow)"
      />
      {/* Loop back to delivery */}
      <path
        d="M 540 68 L 540 84 Q 540 100 524 100 L 216 100 Q 200 100 200 84 L 200 68"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 5"
        markerEnd="url(#reject-arrow)"
      />
    </svg>
  );
}

export function ApprovalFlowDiagram() {
  return (
    <Reveal delay={0.08} className="mt-12">
      <div className="overflow-hidden rounded-3xl border border-line bg-cream/50 p-5 sm:p-8 lg:p-10">
        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-dark">
              Fluxo de aprovação
            </p>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-text-muted">
              Cada entrega passa por revisão interna antes de chegar ao portal — com retorno
              automático quando alguém reprova.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-text-muted">
              <span className="size-2 rounded-full bg-amber" />
              Caminho principal
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber/20 bg-amber/8 px-3 py-1.5 text-xs font-medium text-amber-dark">
              <span className="size-2 rounded-full border border-amber-dark/40 bg-transparent" />
              Reprovação
            </span>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-start gap-3">
            {steps.map((step, index) => (
              <Fragment key={step.label}>
                <StepCard step={step} index={index} className="min-w-0" />
                {index < steps.length - 1 ? <FlowArrow className="mt-10" /> : null}
              </Fragment>
            ))}
          </div>

          <DesktopRejectionPaths />

          <RejectionLoop className="mx-auto max-w-3xl" />
        </div>

        <div className="lg:hidden">
          <div className="space-y-3">
            {steps.map((step, index) => (
              <div key={step.label}>
                <StepCard step={step} index={index} className="w-full" />
                {index < steps.length - 1 ? (
                  <div className="flex justify-center py-1.5">
                    <div className="h-6 w-px bg-linear-to-b from-amber/50 to-line" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-5">
            <RejectionLoop />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
