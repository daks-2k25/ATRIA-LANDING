"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export type TabItem = {
  id: string;
  label: string;
  icon?: LucideIcon;
};

export function TabList({
  tabs,
  active,
  onChange,
  tone = "dark",
  className,
}: {
  tabs: TabItem[];
  active: string;
  onChange: (id: string) => void;
  tone?: "dark" | "light";
  className?: string;
}) {
  const groupId = useId();
  return (
    <div
      role="tablist"
      className={cn(
        "flex flex-wrap items-center gap-2 rounded-full border p-1.5",
        tone === "dark" ? "border-line bg-card" : "border-white/12 bg-white/[0.04]",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-200 sm:px-5",
              isActive
                ? tone === "dark"
                  ? "text-ink-3"
                  : "text-ink-3"
                : tone === "dark"
                  ? "text-text-muted hover:text-text"
                  : "text-text-on-ink-muted hover:text-cream"
            )}
          >
            {isActive && (
              <motion.span
                layoutId={`tab-pill-${groupId}`}
                className="absolute inset-0 rounded-full bg-amber"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {Icon && <Icon className="size-4" />}
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function TabPanel({
  activeKey,
  children,
  className,
}: {
  activeKey: string;
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeKey}
        initial={{ opacity: 0, y: reduced ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: reduced ? 0 : -12 }}
        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function useTabs(defaultId: string) {
  const [active, setActive] = useState(defaultId);
  return { active, setActive };
}
