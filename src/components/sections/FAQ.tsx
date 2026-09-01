import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/data/faq";

export function FAQ() {
  return (
    <section id="faq" className="bg-cream-soft py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          kicker="Perguntas frequentes"
          title="O que agências perguntam antes de começar"
          align="center"
          className="mx-auto"
        />

        <Reveal delay={0.1} className="mt-12">
          <Accordion items={faqItems} defaultOpenIndex={0} />
        </Reveal>
      </Container>
    </section>
  );
}
