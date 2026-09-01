"use client";

import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TabList, TabPanel, useTabs } from "@/components/ui/Tabs";
import { personas } from "@/data/personas";

export function WhoUses() {
  const { active, setActive } = useTabs(personas[0].id);
  const persona = personas.find((p) => p.id === active) ?? personas[0];

  return (
    <section id="quem-usa" className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          kicker="Quem usa o quê"
          title="Cada perfil vê exatamente o que precisa"
          description="Os níveis de acesso garantem que dono, equipe e cliente enxerguem só o que é relevante para o papel de cada um."
        />

        <Reveal delay={0.1} className="mt-10 overflow-x-auto pb-1">
          <TabList
            tabs={personas.map((p) => ({ id: p.id, label: p.label, icon: p.icon }))}
            active={active}
            onChange={setActive}
            className="w-max min-w-full sm:w-fit"
          />
        </Reveal>

        <TabPanel activeKey={active} className="mt-8">
          <div className="grid grid-cols-1 gap-6 rounded-3xl border border-line bg-card p-6 shadow-soft sm:p-10 lg:grid-cols-[280px_1fr] lg:gap-12">
            <div>
              <div className="flex size-14 items-center justify-center rounded-2xl bg-ink text-amber">
                <persona.icon className="size-7" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">{persona.label}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-muted">{persona.summary}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                Principais áreas
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {persona.areas.map((area) => (
                  <li
                    key={area}
                    className="flex items-start gap-3 rounded-xl border border-line bg-cream-soft/60 p-4"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber-dark">
                      <Check className="size-3" />
                    </span>
                    <span className="text-sm font-medium text-text">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabPanel>
      </Container>
    </section>
  );
}
