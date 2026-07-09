"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import BuddyUpLogo from "@/components/ui/BuddyUpLogo";

const EASE = [0.22, 1, 0.36, 1] as const;

const blurReveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, delay, ease: EASE },
  }),
};

const scaleFade: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, delay, ease: EASE },
  }),
};

const ecosystemCards = [
  {
    name: "Laperissa",
    label: "Digital Commerce",
    href: "https://www.laperissa.com.tr",
    external: true,
    accent: "from-[#d4c4a8]/10 to-transparent",
    dot: "bg-[#d4c4a8]",
  },
  {
    name: "BuddyUp",
    label: "Mobile Products",
    href: "/works/buddyup",
    external: false,
    accent: "from-sky-500/10 to-transparent",
    dot: "bg-sky-400",
  },
  {
    name: "PatternOS",
    label: "Production Intelligence",
    href: "#work",
    external: false,
    accent: "from-violet-500/10 to-transparent",
    dot: "bg-violet-400",
  },
] as const;

function EcosystemCard({
  name,
  label,
  href,
  external,
  accent,
  dot,
  index,
}: (typeof ecosystemCards)[number] & { index: number }) {
  const Wrapper = external ? "a" : Link;
  const linkProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <motion.div
      custom={0.7 + index * 0.1}
      initial="hidden"
      animate="visible"
      variants={scaleFade}
    >
      <Wrapper
        {...linkProps}
        className="group glass-card block rounded-2xl p-6 transition-all duration-500 sm:p-7"
      >
        <div
          className={`pointer-events-none mb-8 h-px w-full bg-gradient-to-r ${accent}`}
        />
        <div className="flex items-center gap-2.5">
          <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
          <span className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
            {label}
          </span>
        </div>
        <p className="mt-4 flex items-center gap-2.5 font-sans text-[17px] font-medium tracking-[-0.02em] text-foreground transition-colors duration-300 group-hover:text-white">
          {name === "BuddyUp" && <BuddyUpLogo size="xs" />}
          {name}
        </p>
      </Wrapper>
    </motion.div>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = (delay: number) =>
    prefersReducedMotion
      ? { initial: false, animate: { opacity: 1, y: 0, filter: "blur(0px)" } }
      : { initial: "hidden", animate: "visible", custom: delay };

  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden bg-background text-foreground selection:bg-white/10">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_50%_-10%,rgba(255,255,255,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_85%_85%,rgba(212,196,168,0.05),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_12%_65%,rgba(120,140,255,0.045),transparent)]" />
      </div>

      <header className="relative z-10 px-6 pt-8 sm:px-10 sm:pt-10 lg:px-14">
        <motion.div {...motionProps(0)} variants={blurReveal}>
          <span className="font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
            OVALIOGLU
          </span>
        </motion.div>
      </header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto w-full max-w-5xl text-center">
          <motion.h1
            {...motionProps(0.1)}
            variants={blurReveal}
            className="font-display text-[clamp(3.5rem,11vw,7rem)] leading-[1.0] tracking-[-0.02em] text-foreground"
          >
            Fırat Ovalıoğlu
          </motion.h1>

          <motion.p
            {...motionProps(0.25)}
            variants={blurReveal}
            className="mx-auto mt-14 max-w-2xl font-sans text-[clamp(1.2rem,2.8vw,1.65rem)] leading-snug font-light tracking-[-0.01em] text-secondary sm:mt-20"
          >
            Dijital ürünler, markalar ve üretim sistemleri geliştiriyorum.
          </motion.p>

          <motion.p
            {...motionProps(0.38)}
            variants={blurReveal}
            className="mx-auto mt-8 max-w-xl text-[17px] leading-relaxed tracking-[-0.01em] text-body sm:mt-10"
          >
            E-ticaret altyapılarından mobil uygulamalara, üretim teknolojilerinden
            yapay zeka destekli sistemlere kadar fikirleri çalışan ürünlere
            dönüştürüyorum.
          </motion.p>

          <motion.div
            {...motionProps(0.55)}
            variants={blurReveal}
            className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-4 sm:mt-28 sm:grid-cols-3 sm:gap-5"
          >
            {ecosystemCards.map((card, index) => (
              <EcosystemCard key={card.name} {...card} index={index} />
            ))}
          </motion.div>
        </div>
      </div>

      <footer className="relative z-10 flex justify-center px-6 pb-14 sm:pb-16">
        <motion.div {...motionProps(0.9)} variants={blurReveal}>
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-[14px] font-medium tracking-[-0.01em] text-secondary transition-colors duration-300 hover:text-foreground"
          >
            <span>Ürünleri keşfet</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
            >
              <path
                d="M6 2V10M6 10L3 7M6 10L9 7"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </footer>
    </section>
  );
}
