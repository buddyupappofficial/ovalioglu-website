export type ProjectStatus =
  | "production-prep"
  | "live"
  | "coming-soon"
  | "rnd";

export type FeaturedProject = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  href?: string;
  external?: boolean;
  tags?: readonly string[];
};

export const featuredProjects: readonly FeaturedProject[] = [
  {
    id: "buddyup",
    index: "01",
    title: "BuddyUp",
    subtitle: "Social discovery platform.",
    description:
      "Gerçek dünyada bağlantılar kurmak için geliştirdiğim mobil uygulama.",
    status: "production-prep",
    statusLabel: "Production hazırlığı",
    href: "/works/buddyup",
    tags: [
      "Flutter",
      "Supabase",
      "Social Radar",
      "Event Matching",
      "Daily Intent",
    ],
  },
  {
    id: "laperissa",
    index: "02",
    title: "Laperissa",
    subtitle: "Digital Commerce Platform.",
    description:
      "Kadın giyim markası için modern D2C e-ticaret deneyimi.",
    status: "live",
    statusLabel: "Live",
    href: "https://www.laperissa.com.tr",
    external: true,
    tags: [
      "Shopify",
      "Brand Building",
      "E-Commerce",
      "AI Content",
      "Creative Direction",
    ],
  },
  {
    id: "laperissa-global",
    index: "03",
    title: "Laperissa Global",
    subtitle: "Brand & Manufacturing Presence.",
    description:
      "Üretim, ihracat ve marka hikayesini anlatan kurumsal platform.",
    status: "coming-soon",
    statusLabel: "Coming soon",
    href: "https://www.laperissa.com",
    external: true,
    tags: ["Corporate", "Manufacturing", "Export", "Brand Story"],
  },
  {
    id: "patternos",
    index: "04",
    title: "PatternOS",
    subtitle: "AI Powered Pattern Intelligence.",
    description:
      "Tekstil kalıp geliştirme süreçlerini dijitalleştiren üretim sistemi.",
    status: "rnd",
    statusLabel: "R&D",
    tags: ["AI", "Pattern Making", "Textile", "Production Systems"],
  },
] as const;

export const statusStyles: Record<
  ProjectStatus,
  { badge: string; dot: string; ping?: boolean }
> = {
  "production-prep": {
    badge:
      "border-amber-500/20 bg-amber-500/[0.08] text-amber-400",
    dot: "bg-amber-400",
    ping: true,
  },
  live: {
    badge:
      "border-emerald-500/20 bg-emerald-500/[0.08] text-emerald-400",
    dot: "bg-emerald-400",
    ping: true,
  },
  "coming-soon": {
    badge: "border-sky-500/20 bg-sky-500/[0.08] text-sky-400",
    dot: "bg-sky-400",
  },
  rnd: {
    badge: "border-violet-500/20 bg-violet-500/[0.08] text-violet-400",
    dot: "bg-violet-400",
    ping: true,
  },
};
