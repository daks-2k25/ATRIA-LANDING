import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNav } from "@/data/nav";
import { mainAreas } from "@/data/areas";

export function Footer() {
  return (
    <footer className="border-t border-line-soft bg-white py-14">
      <Container className="grid grid-cols-1 gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
        <div className="max-w-xs">
          <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold text-ink">
            <span className="flex size-8 items-center justify-center rounded-lg bg-ink text-sm text-amber">
              A
            </span>
            Atria
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Plataforma de gestão para agências de marketing e criação — produção, aprovação de
            clientes, financeiro, CRM e relatórios em um só lugar.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-soft">Produto</p>
          {footerNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-soft">Funcionalidades</p>
          {mainAreas.map((area) => (
            <Link
              key={area.slug}
              href={area.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-ink"
            >
              {area.label}
            </Link>
          ))}
        </nav>
      </Container>

      <Container className="mt-10 flex flex-col gap-2 border-t border-line-soft pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Atria. Todos os direitos reservados.</p>
        <p>Plataforma para agências de marketing e criação.</p>
      </Container>
    </footer>
  );
}
