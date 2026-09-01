import { Kanban, Users, DollarSign, TrendingUp, Layers, Sparkles, type LucideIcon } from "lucide-react";
import { featureCategories } from "./features";

export type Area = {
  slug: string;
  label: string;
  navSummary: string;
  cardSummary: string;
  icon: LucideIcon;
  href: string;
  featured?: boolean;
};

const categoryIcons: Record<string, LucideIcon> = {
  producao: Kanban,
  clientes: Users,
  financeiro: DollarSign,
  crm: TrendingUp,
};

export const mainAreas: Area[] = [
  ...featureCategories.map((c) => ({
    slug: c.slug,
    label: c.label,
    navSummary: c.navSummary,
    cardSummary: c.cardSummary,
    icon: categoryIcons[c.slug],
    href: `/funcionalidades/${c.slug}`,
  })),
  {
    slug: "portal-do-cliente",
    label: "Portal do Cliente",
    navSummary: "Aprovação, contratos e financeiro para o cliente",
    cardSummary: "Um espaço próprio onde o cliente aprova, acompanha e participa — sem WhatsApp.",
    icon: Layers,
    href: "/funcionalidades/portal-do-cliente",
    featured: true,
  },
  {
    slug: "inteligencia-artificial",
    label: "Inteligência Artificial",
    navSummary: "Planejamento de conteúdo e qualificação de leads",
    cardSummary: "IA aplicada ao planejamento de conteúdo e à qualificação comercial.",
    icon: Sparkles,
    href: "/funcionalidades/inteligencia-artificial",
  },
];
