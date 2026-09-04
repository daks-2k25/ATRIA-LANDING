import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { TrialForm } from "@/components/sections/TrialForm";

export const metadata: Metadata = {
  title: "7 dias grátis",
  description:
    "Comece seus 7 dias grátis na Atria: preencha o formulário e nossa equipe libera o acesso da sua agência à plataforma.",
};

export default function TrialPage() {
  return (
    <section className="mesh-light relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <Container className="flex flex-col items-center">
        <Reveal>
          <Kicker>7 dias grátis</Kicker>
        </Reveal>

        <Reveal delay={0.08} className="mt-6 max-w-lg text-center">
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Experimente a Atria com a sua agência
          </h1>
        </Reveal>

        <Reveal delay={0.16} className="mt-10 w-full">
          <TrialForm />
        </Reveal>
      </Container>
    </section>
  );
}
