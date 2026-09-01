import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { AIDeepDive } from "@/components/sections/AIDeepDive";
import { PageCTA } from "@/components/sections/PageCTA";
import { AreaCrossLinks } from "@/components/sections/AreaCrossLinks";

export const metadata: Metadata = {
  title: "Inteligência Artificial",
  description:
    "IA aplicada ao planejamento de conteúdo e à qualificação de leads — nos pontos onde a equipe da agência mais perde tempo.",
};

export default function InteligenciaArtificialPage() {
  return (
    <>
      <PageHero
        kicker="Funcionalidades · Inteligência Artificial"
        title="IA nos pontos que realmente pesam tempo."
        description="Sem exagero de recursos: a IA da Atria atua onde a equipe mais perde tempo — planejamento de conteúdo e qualificação comercial."
        breadcrumb={[{ label: "Inteligência Artificial", href: "/funcionalidades/inteligencia-artificial" }]}
      >
        <Button href="mailto:contato@atria.app" size="lg">
          Agendar demonstração
        </Button>
      </PageHero>

      <AIDeepDive />

      <PageCTA
        title="Veja a IA da Atria funcionando no seu fluxo real."
        description="Agende uma demonstração e veja como o planejamento de conteúdo e a qualificação de leads funcionam na prática."
      />

      <AreaCrossLinks exclude="inteligencia-artificial" />
    </>
  );
}
