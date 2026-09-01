import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FeatureAreasList } from "@/components/sections/FeatureAreasList";
import { PageCTA } from "@/components/sections/PageCTA";

export const metadata: Metadata = {
  title: "Funcionalidades",
  description:
    "Conheça as grandes áreas do Atria: produção, clientes, financeiro, CRM, portal do cliente e inteligência artificial.",
};

export default function FuncionalidadesPage() {
  return (
    <>
      <PageHero
        kicker="Funcionalidades"
        title="Cada área da agência, com o módulo certo."
        description="Da produção criativa ao financeiro, do funil comercial ao portal do cliente — explore cada frente da Atria em profundidade."
        breadcrumb={[{ label: "Funcionalidades", href: "/funcionalidades" }]}
      />

      <FeatureAreasList />

      <PageCTA
        title="Não sabe por onde começar?"
        description="Agende uma demonstração e a gente te mostra qual módulo faz mais sentido para a rotina da sua agência."
      />
    </>
  );
}
