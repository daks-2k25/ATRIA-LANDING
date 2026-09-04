import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { PortalNarrative } from "@/components/sections/PortalNarrative";
import { PortalConceptVisual } from "@/components/sections/PortalConceptVisual";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageCTA } from "@/components/sections/PageCTA";
import { AreaCrossLinks } from "@/components/sections/AreaCrossLinks";
import { portalFeatures } from "@/data/portal";

export const metadata: Metadata = {
  title: "Portal do Cliente",
  description:
    "O espaço onde o cliente da sua agência aprova entregas, acompanha o calendário, vê contratos e financeiro, e envia solicitações — sem WhatsApp, sem planilha.",
};

export default function PortalDoClientePage() {
  return (
    <>
      <PageHero
        kicker="Funcionalidades · Portal do Cliente"
        title="O lugar onde o seu cliente participa, não só observa."
        description="Um espaço próprio para cada cliente acompanhar entregas, aprovar conteúdos, ver contratos e financeiro — direto na plataforma da agência."
        breadcrumb={[{ label: "Portal do Cliente", href: "/funcionalidades/portal-do-cliente" }]}
      >
        <Button href="/7-dias-gratis" size="lg">
          7 dias grátis
        </Button>
      </PageHero>

      <PortalNarrative />
      <PortalConceptVisual />
      <FeatureGrid features={portalFeatures} />

      <PageCTA
        title="Dê ao seu cliente um lugar para participar, não só receber updates."
        description="Agende uma demonstração e veja o Portal do Cliente funcionando junto com a operação da sua agência."
      />

      <AreaCrossLinks exclude="portal-do-cliente" />
    </>
  );
}
