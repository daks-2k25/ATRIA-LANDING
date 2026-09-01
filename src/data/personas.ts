import { Crown, ShieldCheck, PenTool, Handshake, UserCircle } from "lucide-react";

export const personas = [
  {
    id: "dono",
    label: "Dono / Master",
    icon: Crown,
    summary: "Acesso completo à operação, incluindo aprovação interna e o dashboard TV da agência.",
    areas: [
      "Todos os módulos da plataforma",
      "Aprovação interna de entregas antes do cliente",
      "Dashboard TV para acompanhamento em tempo real",
      "Visão financeira e comercial completa",
    ],
  },
  {
    id: "admin",
    label: "Administrador",
    icon: ShieldCheck,
    summary: "Cuida da gestão de clientes, financeiro, propostas, configurações e equipe.",
    areas: ["Clientes", "Financeiro", "Propostas", "Configurações da agência", "Gestão de equipe"],
  },
  {
    id: "designer",
    label: "Designers",
    icon: PenTool,
    summary: "Foco em produção: Kanban, calendário e tarefas do dia a dia criativo.",
    areas: [
      "Kanban de produção",
      "Calendário de publicações",
      "Tarefas — sênior edita todas, júnior foca nas próprias",
    ],
  },
  {
    id: "crm",
    label: "CRM / Vendas",
    icon: Handshake,
    summary: "Responsável pelo funil comercial, da prospecção ao fechamento.",
    areas: ["Leads e prospecção", "Kanban de leads", "Clientes convertidos", "Lembretes de follow-up"],
  },
  {
    id: "cliente",
    label: "Cliente",
    icon: UserCircle,
    summary: "Acessa o Portal do Cliente para acompanhar tudo o que a agência está produzindo.",
    areas: ["Aprovação de entregas", "Solicitações e ideias", "Contratos", "Relatórios de performance"],
  },
];
