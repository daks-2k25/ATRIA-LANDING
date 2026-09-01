import { CheckCircle2, Bell, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MockupFrame } from "@/components/ui/MockupFrame";
import { Reveal } from "@/components/ui/Reveal";

const badges = [
  {
    icon: CheckCircle2,
    label: "Aprovação em tempo real",
    className: "left-[-8%] top-[14%] hidden sm:flex",
    delay: 0.5,
  },
  {
    icon: TrendingUp,
    label: "Financeiro conectado",
    className: "right-[-6%] top-[38%] hidden sm:flex",
    delay: 0.62,
  },
  {
    icon: Bell,
    label: "Alertas e notificações",
    className: "left-[6%] bottom-[-6%] hidden sm:flex",
    delay: 0.74,
  },
];

export function ProductDemo() {
  return (
    <section className="bg-white pb-20 pt-4 sm:pb-28">
      <Container>
        <Reveal delay={0.1} className="relative mx-auto max-w-5xl px-2">
          <div
            aria-hidden
            className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-b from-sage/70 to-transparent blur-2xl"
          />
          <div className="animate-float">
            <MockupFrame
              src="/screenshots/dashboard.png"
              alt="Dashboard do Atria mostrando resultado líquido, reuniões, tarefas e posts agendados"
              priority
            />
          </div>

          {badges.map((badge) => (
            <Reveal
              key={badge.label}
              delay={badge.delay}
              y={12}
              className={`absolute z-10 items-center gap-2 rounded-full border border-line bg-white/95 px-4 py-2.5 shadow-soft-lg backdrop-blur-sm ${badge.className}`}
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-ink text-amber">
                <badge.icon className="size-3.5" />
              </span>
              <span className="text-xs font-semibold text-ink">{badge.label}</span>
            </Reveal>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
