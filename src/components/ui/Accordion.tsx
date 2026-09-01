"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({
  items,
  className,
  defaultOpenIndex = 0,
}: {
  items: AccordionItem[];
  className?: string;
  defaultOpenIndex?: number | null;
}) {
  const base = useId();
  const reduced = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div
      className={cn(
        "divide-y divide-line overflow-hidden rounded-2xl border border-line bg-card shadow-soft",
        className
      )}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              id={`${base}-header-${index}`}
              aria-expanded={isOpen}
              aria-controls={`${base}-panel-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 hover:bg-cream-soft/60 sm:px-7"
            >
              <span
                className={cn(
                  "font-display text-[15px] font-semibold sm:text-base",
                  isOpen ? "text-ink" : "text-text"
                )}
              >
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 500, damping: 40 }}
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full border",
                  isOpen ? "border-amber bg-amber/10 text-amber-dark" : "border-line text-text-muted"
                )}
              >
                <ChevronDown className="size-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${base}-panel-${index}`}
                  role="region"
                  aria-labelledby={`${base}-header-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { height: { type: "spring", stiffness: 380, damping: 38 }, opacity: { duration: 0.2 } }
                  }
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-6 text-[15px] leading-relaxed text-text-muted sm:px-7">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
