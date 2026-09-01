import { LayoutDashboard, Tv, BarChart3, Search, Bell } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const dayToDay = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: BarChart3, label: "Meta Insights" },
  { icon: Tv, label: "Dashboard TV" },
  { icon: Search, label: "Busca rápida" },
  { icon: Bell, label: "Notificações" },
];

export function WhatIsAtria() {
  return (
    <section className="bg-cream-soft py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <Kicker>O Atria</Kicker>
          </Reveal>
          <Reveal delay={0.08} className="mt-6">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Um sistema criado para a realidade das agências.
            </h2>
          </Reveal>
          <Reveal delay={0.16} className="mt-5 max-w-md">
            <p className="text-[15px] leading-relaxed text-text-muted">
              Atria ajuda agências a organizar o dia a dia com clientes: produzir conteúdo,
              acompanhar tarefas, controlar finanças, prospectar leads e oferecer um portal onde
              o cliente aprova trabalhos e vê resultados.
            </p>
          </Reveal>
        </div>

        <div>
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-soft">
              Visão geral para gestores
            </p>
          </Reveal>
          <RevealGroup className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {dayToDay.map((item) => (
              <RevealItem key={item.label}>
                <div className="flex items-center gap-2.5 rounded-xl border border-line bg-white px-4 py-3.5 shadow-soft">
                  <item.icon className="size-4 shrink-0 text-ink" />
                  <span className="text-sm font-medium text-text">{item.label}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
