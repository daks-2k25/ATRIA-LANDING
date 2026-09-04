"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { mainAreas } from "@/data/areas";
import { cn } from "@/lib/utils";

const primaryLinks = [{ label: "Produto", href: "/produto" }];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenuOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMenuOpen(false), 150);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onPointerDown = (e: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={cn(
          "mx-auto max-w-6xl rounded-2xl border transition-all duration-300",
          scrolled || open || menuOpen
            ? "border-line bg-white/85 shadow-soft backdrop-blur-md"
            : "border-transparent bg-white/40 backdrop-blur-sm"
        )}
      >
        <Container className="flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold text-ink">
            <span className="flex size-8 items-center justify-center rounded-lg bg-ink text-sm text-amber">
              A
            </span>
            Atria
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-text-muted transition-colors duration-200 hover:bg-ink/5 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}

            <div ref={menuRef} className="relative" onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
              <button
                type="button"
                onClick={openMenu}
                aria-expanded={menuOpen}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-text-muted transition-colors duration-200 hover:bg-ink/5 hover:text-ink"
              >
                Funcionalidades
                <ChevronDown className={cn("size-3.5 transition-transform duration-200", menuOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute left-1/2 top-full mt-3 w-[560px] -translate-x-1/2 rounded-2xl border border-line bg-white p-3 shadow-soft-lg"
                  >
                    <div className="grid grid-cols-2 gap-1">
                      {mainAreas.map((area) => (
                        <Link
                          key={area.slug}
                          href={area.href}
                          onClick={() => setMenuOpen(false)}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors duration-150 hover:bg-cream-soft"
                        >
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-sage text-ink transition-colors duration-150 group-hover:bg-ink group-hover:text-amber">
                            <area.icon className="size-[18px]" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-ink">{area.label}</span>
                            <span className="mt-0.5 block text-xs leading-snug text-text-muted">
                              {area.navSummary}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/funcionalidades"
                      onClick={() => setMenuOpen(false)}
                      className="mt-2 flex items-center justify-between rounded-xl border border-line-soft bg-cream-soft/60 px-4 py-3 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-cream-soft"
                    >
                      Ver todas as funcionalidades
                      <ArrowRight className="size-4" />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/funcionalidades/portal-do-cliente"
              className="rounded-full px-4 py-2 text-sm font-medium text-text-muted transition-colors duration-200 hover:bg-ink/5 hover:text-ink"
            >
              Portal do Cliente
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Button href="/7-dias-gratis" size="md">
              7 dias grátis
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full text-ink lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </Container>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="mx-auto mt-2 max-h-[calc(100vh-6rem)] max-w-6xl overflow-y-auto rounded-2xl border border-line bg-white shadow-soft-lg lg:hidden"
          >
            <nav className="flex flex-col p-3">
              <Link
                href="/produto"
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3.5 text-base font-medium text-text hover:bg-ink/5"
              >
                Produto
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuExpanded((v) => !v)}
                aria-expanded={mobileMenuExpanded}
                aria-label="Expandir submenu de funcionalidades"
                className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-text hover:bg-ink/5"
              >
                Funcionalidades
                <ChevronDown
                  className={cn("size-4 transition-transform duration-200", mobileMenuExpanded && "rotate-180")}
                />
              </button>
              <AnimatePresence initial={false}>
                {mobileMenuExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-0.5 py-1 pl-3">
                      {mainAreas.map((area) => (
                        <Link
                          key={area.slug}
                          href={area.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] text-text-muted hover:bg-ink/5 hover:text-ink"
                        >
                          <area.icon className="size-4 shrink-0 text-ink" />
                          {area.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="p-2 pt-3">
                <Button href="/7-dias-gratis" size="md" className="w-full" onClick={() => setOpen(false)}>
                  7 dias grátis
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
