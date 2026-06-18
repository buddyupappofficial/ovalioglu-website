"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

type StatusVariant = "developing" | "active" | "ongoing";

const statusCards = [
  {
    title: "BuddyUp",
    status: "Geliştiriliyor",
    variant: "developing" as StatusVariant,
    description:
      "İnsanların gerçek hayatta bağlantı kurmasını sağlayan sosyal keşif uygulaması.",
  },
  {
    title: "Laperissa",
    status: "Aktif",
    variant: "active" as StatusVariant,
    description:
      "Premium iç giyim markası. Marka ve dijital deneyim üzerine çalışıyorum.",
  },
  {
    title: "AI Experiments",
    status: "Sürekli Devam Ediyor",
    variant: "ongoing" as StatusVariant,
    description:
      "Yapay zekâ ile iş, tasarım ve içerik üretimi üzerine deneyler yapıyorum.",
  },
] as const;

const dotStyles: Record<
  StatusVariant,
  { dot: string; glow: string; ping: string }
> = {
  developing: {
    dot: "bg-emerald-400",
    glow: "shadow-[0_0_12px_rgba(52,211,153,0.6)]",
    ping: "bg-emerald-400",
  },
  active: {
    dot: "bg-sky-400",
    glow: "shadow-[0_0_12px_rgba(56,189,248,0.5)]",
    ping: "bg-sky-400",
  },
  ongoing: {
    dot: "bg-violet-400",
    glow: "shadow-[0_0_12px_rgba(167,139,250,0.5)]",
    ping: "bg-violet-400",
  },
};

function StatusDot({ variant }: { variant: StatusVariant }) {
  const styles = dotStyles[variant];
  const animate = variant === "developing";

  return (
    <span className="relative flex h-2 w-2 shrink-0">
      {animate && (
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full ${styles.ping} opacity-50`}
        />
      )}
      <span
        className={`relative inline-flex h-2 w-2 rounded-full ${styles.dot} ${styles.glow}`}
      />
    </span>
  );
}

function StatusCard({
  title,
  status,
  variant,
  description,
  index,
}: {
  title: string;
  status: string;
  variant: StatusVariant;
  description: string;
  index: number;
}) {
  return (
    <motion.article
      custom={0.15 + index * 0.1}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      className="group relative"
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent opacity-0 blur-lg transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative rounded-2xl border border-zinc-800 bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-500 group-hover:border-zinc-700 group-hover:bg-white/[0.04] sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-sans text-lg font-medium tracking-[-0.02em] text-zinc-100 transition-colors duration-500 group-hover:text-white">
            {title}
          </h3>
          <StatusDot variant={variant} />
        </div>

        <p className="mt-3 font-mono text-[10px] tracking-[0.14em] text-zinc-500 uppercase">
          {status}
        </p>

        <p className="mt-4 text-[14px] leading-relaxed text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

export default function CurrentNow() {
  const prefersReducedMotion = useReducedMotion();

  const headerMotion = prefersReducedMotion
    ? {}
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport };

  return (
    <section className="relative bg-[#050505] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-6xl">
        <motion.header
          {...headerMotion}
          variants={fadeUp}
          custom={0}
          className="mb-16 sm:mb-20 lg:mb-28"
        >
          <p className="mb-5 font-mono text-[11px] tracking-[0.28em] text-zinc-600 uppercase">
            NOW
          </p>
          <h2 className="max-w-2xl font-display text-[clamp(2.25rem,5.5vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-white">
            Şu Anda Neler Yapıyorum?
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-zinc-500 sm:text-base">
            Üretmeye, öğrenmeye ve yeni fikirler geliştirmeye devam ediyorum.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          {/* Left — editorial */}
          <motion.div
            custom={0.08}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <p className="font-sans text-[17px] leading-[1.85] font-light tracking-[-0.01em] text-zinc-400 sm:text-lg">
                Şu sıralar zamanımın büyük bölümünü{" "}
                <span className="text-zinc-200">BuddyUp</span> ve{" "}
                <span className="text-zinc-200">Laperissa</span> üzerinde
                çalışarak geçiriyorum.
              </p>

              <p className="font-sans text-[17px] leading-[1.85] font-light tracking-[-0.01em] text-zinc-400 sm:text-lg">
                Bir yandan sosyal keşif deneyimini yeniden düşünürken, diğer
                yandan marka, e-ticaret ve yapay zekâ alanlarında yeni fikirler
                geliştiriyorum.
              </p>
            </div>

            <div className="mt-12 border-l border-white/[0.08] pl-6 sm:mt-14 sm:pl-8">
              <p className="font-display text-[clamp(1.35rem,3vw,1.65rem)] leading-[1.45] tracking-[-0.01em] text-zinc-300">
                Benim için teknoloji bir amaç değil.
              </p>
              <p className="mt-3 font-display text-[clamp(1.35rem,3vw,1.65rem)] leading-[1.45] tracking-[-0.01em] text-zinc-500">
                İnsanlara gerçek değer üreten fikirleri hayata geçirmek için
                kullanılan güçlü bir araç.
              </p>
            </div>
          </motion.div>

          {/* Right — status cards */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {statusCards.map((card, index) => (
              <StatusCard key={card.title} {...card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
