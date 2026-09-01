import { CheckCircle2, Bell, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MockupFrame } from "@/components/ui/MockupFrame";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const badges = [
  {
    icon: CheckCircle2,
    label: "Aprovação em tempo real",
    anchor: "left-0 top-0 -translate-x-[70%] -translate-y-[60%]",
    delay: 0.5,
  },
  {
    icon: TrendingUp,
    label: "Financeiro conectado",
    anchor: "right-0 top-0 translate-x-[70%] -translate-y-[60%]",
    delay: 0.62,
  },
  {
    icon: Bell,
    label: "Alertas e notificações",
    anchor: "left-0 bottom-0 -translate-x-[70%] translate-y-[60%]",
    delay: 0.74,
  },
];

export function ProductDemo() {
  return (
    <section className="overflow-x-clip bg-white pb-20 pt-4 sm:pb-28">
      <Container>
        <div className="relative mx-auto max-w-5xl px-2">
          <div
            aria-hidden
            className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-b from-sage/70 to-transparent blur-2xl"
          />
          <Reveal delay={0.1}>
            <div className="animate-float">
              <MockupFrame
                src="/screenshots/dashboard.png"
                alt="Dashboard do Atria mostrando resultado líquido, reuniões, tarefas e posts agendados"
                priority
              />
            </div>
          </Reveal>

          {badges.map((badge) => (
            <div key={badge.label} className={cn("absolute z-10 hidden xl:block", badge.anchor)}>
              <Reveal delay={badge.delay} y={10}>
                <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white/95 px-4 py-2.5 shadow-soft-lg backdrop-blur-sm">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-ink text-amber">
                    <badge.icon className="size-3.5" />
                  </span>
                  <span className="text-xs font-semibold text-ink">{badge.label}</span>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
