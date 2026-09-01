import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function PageCTA({
  title,
  description,
  buttonLabel = "Agendar demonstração",
}: {
  title: React.ReactNode;
  description: React.ReactNode;
  buttonLabel?: string;
}) {
  return (
    <section className="border-t border-line-soft bg-white py-20 sm:py-28">
      <Container className="flex flex-col items-center text-center">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="mt-4 max-w-xl">
          <p className="text-lg leading-relaxed text-text-muted">{description}</p>
        </Reveal>
        <Reveal delay={0.16} className="mt-8">
          <Button href="mailto:contato@atria.app" size="lg">
            {buttonLabel}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
