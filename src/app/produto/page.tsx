import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { EcosystemDiagram } from "@/components/sections/EcosystemDiagram";
import { WhoUses } from "@/components/sections/WhoUses";
import { FAQ } from "@/components/sections/FAQ";
import { PageCTA } from "@/components/sections/PageCTA";

export const metadata: Metadata = {
  title: "Produto",
  description:
    "Conheça a filosofia por trás do Atria: um sistema criado para a realidade das agências de marketing e criação, conectando produção, cliente, financeiro e vendas.",
};

export default function ProdutoPage() {
  return (
    <>
      <PageHero
        kicker="Produto"
        title="Um sistema criado para a realidade das agências."
        description="Atria nasceu para organizar o dia a dia com clientes: produzir conteúdo, acompanhar tarefas, controlar finanças, prospectar leads e oferecer um portal onde o cliente aprova trabalhos e vê resultados."
        breadcrumb={[{ label: "Produto", href: "/produto" }]}
      />

      <section className="bg-white py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <EcosystemDiagram className="lg:order-2" />
          <div>
            <Reveal>
              <Kicker>Filosofia</Kicker>
            </Reveal>
            <Reveal delay={0.08} className="mt-6">
              <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
                Uma plataforma, não uma coleção de ferramentas soltas.
              </h2>
            </Reveal>
            <Reveal delay={0.16} className="mt-5 max-w-md">
              <p className="text-[15px] leading-relaxed text-text-muted">
                Em vez de planilhas, grupos de WhatsApp e ferramentas desconectadas, a Atria
                reúne produção, relacionamento com o cliente, financeiro e vendas em um único
                lugar — com níveis de acesso próprios para dono, administradores, designers,
                equipe comercial e clientes.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <WhoUses />
      <FAQ />

      <PageCTA
        title="Ainda com dúvidas sobre como a Atria se encaixa na sua agência?"
        description="Agende uma demonstração e converse com o nosso time sobre a rotina específica da sua operação."
      />
    </>
  );
}
