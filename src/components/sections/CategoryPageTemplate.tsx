import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { AreaCrossLinks } from "@/components/sections/AreaCrossLinks";
import { PageCTA } from "@/components/sections/PageCTA";
import type { FeatureCategory } from "@/data/features";

export function CategoryPageTemplate({ category }: { category: FeatureCategory }) {
  return (
    <>
      <PageHero
        kicker={`Funcionalidades · ${category.label}`}
        title={category.heroTitle}
        description={category.heroDescription}
        breadcrumb={[
          { label: "Funcionalidades", href: "/funcionalidades" },
          { label: category.label, href: `/funcionalidades/${category.slug}` },
        ]}
      >
        <Button href="mailto:contato@atria.app" size="lg">
          Agendar demonstração
        </Button>
      </PageHero>

      <FeatureGrid features={category.features} />

      <PageCTA
        title={`Pronto para ${category.ctaPhrase} da sua agência?`}
        description="Agende uma demonstração e veja esse módulo funcionando dentro do fluxo completo da Atria."
      />

      <AreaCrossLinks exclude={category.slug} />
    </>
  );
}
