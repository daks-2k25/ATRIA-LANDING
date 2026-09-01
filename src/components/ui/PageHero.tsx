import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  description,
  breadcrumb,
  className,
  children,
}: {
  kicker: string;
  title: React.ReactNode;
  description: React.ReactNode;
  breadcrumb?: { label: string; href: string }[];
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={cn("mesh-light relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40", className)}>
      <Container className="relative">
        {breadcrumb && (
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-text-soft">
              <Link href="/" className="transition-colors hover:text-ink">
                Atria
              </Link>
              {breadcrumb.map((item) => (
                <span key={item.href} className="flex items-center gap-1.5">
                  <ChevronRight className="size-3.5" />
                  <Link href={item.href} className="transition-colors hover:text-ink">
                    {item.label}
                  </Link>
                </span>
              ))}
            </nav>
          </Reveal>
        )}

        <Reveal delay={0.05}>
          <Kicker>{kicker}</Kicker>
        </Reveal>

        <Reveal delay={0.12} className="mt-6 max-w-3xl">
          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={0.2} className="mt-6 max-w-xl">
          <p className="text-lg leading-relaxed text-text-muted">{description}</p>
        </Reveal>

        {children && (
          <Reveal delay={0.28} className="mt-9">
            {children}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
