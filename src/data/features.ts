import {
  LayoutDashboard,
  Kanban,
  ClipboardCheck,
  CalendarDays,
  FileStack,
  FolderKanban,
  Users,
  UserSquare2,
  DollarSign,
  FileSignature,
  FileText,
  Search,
  Filter,
  Sparkles,
  MessagesSquare,
  ClipboardList,
  BadgeCheck,
  Target,
} from "lucide-react";

export type Feature = {
  icon: typeof LayoutDashboard;
  title: string;
  description: string;
};

export type FeatureCategory = {
  id: string;
  slug: string;
  label: string;
  navSummary: string;
  cardSummary: string;
  heroTitle: string;
  heroDescription: string;
  ctaPhrase: string;
  features: Feature[];
};

export const featureCategories: FeatureCategory[] = [
  {
    id: "producao",
    slug: "producao",
    label: "Produção",
    navSummary: "Kanban, calendário e aprovação interna",
    cardSummary:
      "Do briefing à publicação, com controle de qualidade antes de chegar ao cliente.",
    heroTitle: "Sua produção criativa, organizada em um só lugar.",
    heroDescription:
      "Kanban, calendário editorial, aprovação interna e conteúdo — tudo em um único fluxo, do briefing à publicação.",
    ctaPhrase: "organizar a produção",
    features: [
      {
        icon: Kanban,
        title: "Kanban",
        description: "Quadro visual de tarefas; arraste entre etapas e filtre por cliente, responsável ou prioridade.",
      },
      {
        icon: ClipboardCheck,
        title: "Aprovação interna",
        description: "Revisão sênior antes do material seguir para o cliente, com controle no nível master.",
      },
      {
        icon: CalendarDays,
        title: "Calendário",
        description: "Agenda da equipe em dia, semana ou mês, com eventos vinculados a clientes e datas de publicação.",
      },
      {
        icon: FileStack,
        title: "Gestão de conteúdo",
        description: "Visão geral de todos os posts por status: rascunho, em aprovação, agendado e publicado.",
      },
      {
        icon: FolderKanban,
        title: "Drive de assets",
        description: "Logos, materiais de marca e mídias organizados por cliente, sempre à mão da equipe.",
      },
      {
        icon: DollarSign,
        title: "Hub de operações",
        description: "Preços por tipo de arte e entradas de planejamento organizadas para a equipe de produção.",
      },
    ],
  },
  {
    id: "clientes",
    slug: "clientes",
    label: "Clientes",
    navSummary: "Perfil 360° e relatórios de performance",
    cardSummary: "Uma visão 360° de cada cliente, sem abrir cinco telas diferentes.",
    heroTitle: "Uma visão 360° de cada cliente.",
    heroDescription:
      "Pipeline de conteúdo, financeiro, calendário, solicitações e relatórios — tudo reunido no perfil de cada cliente.",
    ctaPhrase: "organizar a gestão de clientes",
    features: [
      {
        icon: Users,
        title: "Lista de clientes",
        description: "Cadastre, edite, desative, importe e agrupe clientes conforme a organização da agência.",
      },
      {
        icon: UserSquare2,
        title: "Perfil do cliente (visão 360°)",
        description: "Pipeline de conteúdo, financeiro e contratos, calendário, solicitações e tarefas em aberto num só lugar.",
      },
      {
        icon: ClipboardList,
        title: "Relatórios de performance",
        description: "Relatórios executivos mensais por cliente, com impressão, exportação e acesso via portal.",
      },
      {
        icon: MessagesSquare,
        title: "Resumos de redes sociais",
        description: "Cards de demonstração de performance para plataformas como TikTok, Instagram e Facebook.",
      },
    ],
  },
  {
    id: "financeiro",
    slug: "financeiro",
    label: "Financeiro",
    navSummary: "Fluxo de caixa, contratos e propostas",
    cardSummary: "Receitas, contratos e propostas conectados à operação real da agência.",
    heroTitle: "Financeiro conectado à operação real da agência.",
    heroDescription:
      "Receitas, despesas, contratos e propostas comerciais organizados — sem planilha paralela e sem ferramenta solta.",
    ctaPhrase: "organizar o financeiro",
    features: [
      {
        icon: DollarSign,
        title: "Financeiro",
        description: "Receitas e despesas, lucro, fluxo de caixa, categorias, filtros e importação de lançamentos.",
      },
      {
        icon: FileSignature,
        title: "Contratos",
        description: "Gestão de contratos com clientes, com vínculo direto aos recebíveis do financeiro.",
      },
      {
        icon: FileText,
        title: "Propostas",
        description: "Criação de propostas comerciais com link público para prospects, sem necessidade de login.",
      },
    ],
  },
  {
    id: "crm",
    slug: "crm",
    label: "CRM",
    navSummary: "Leads, prospecção e funil de vendas",
    cardSummary: "Um funil visual para a equipe comercial nunca perder uma oportunidade.",
    heroTitle: "Um funil comercial visual, do contato ao fechamento.",
    heroDescription:
      "Prospecção, kanban de leads e qualificação com IA para a equipe comercial focar no que converte.",
    ctaPhrase: "organizar o comercial",
    features: [
      {
        icon: Search,
        title: "Prospecção de leads",
        description: "Busca de potenciais clientes por cidade, categoria e bairro para alimentar o funil comercial.",
      },
      {
        icon: Filter,
        title: "Kanban de leads",
        description: "Mova leads pelo funil de vendas com etapas, organizações e lembretes de follow-up.",
      },
      {
        icon: BadgeCheck,
        title: "Atribuição de SDRs",
        description: "Designe representantes de vendas responsáveis por cada organização prospectada.",
      },
      {
        icon: Sparkles,
        title: "Lembretes de CRM",
        description: "Tarefas de follow-up direto no quadro comercial, para nenhum lead esfriar.",
      },
      {
        icon: Target,
        title: "Qualificação de leads com IA",
        description: "Ajuda a avaliar se um lead vale a pena seguir antes de investir tempo da equipe comercial.",
      },
    ],
  },
];

export const homeAreaSlugs = ["producao", "clientes", "financeiro", "crm"] as const;
