"use client";

import { motion, useReducedMotion } from "framer-motion";
import BuddyUpLogo from "@/components/ui/BuddyUpLogo";
import Section from "@/components/ui/Section";
import { blurReveal, viewport } from "@/lib/motion";

const buildingItems = [
  {
    number: "01",
    title: "BuddyUp",
    description: "Gerçek dünya sosyal keşif deneyimi.",
    showLogo: true,
  },
  {
    number: "02",
    title: "Laperissa",
    description: "Modern dijital ticaret altyapısı.",
  },
  {
    number: "03",
    title: "PatternOS",
    description: "Yapay zeka destekli üretim zekası.",
  },
] as const;

function BuildingItem({
  number,
  title,
  description,
  showLogo,
  index,
}: {
  number: string;
  title: string;
  description: string;
  showLogo?: boolean;
  index: number;
}) {
  return (
    <motion.li
      custom={0.1 + index * 0.08}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={blurReveal}
      className="group"
    >
      <div className="grid grid-cols-1 gap-5 py-12 sm:grid-cols-[5rem_1fr] sm:gap-10 sm:py-16">
        <span className="font-mono text-[clamp(2rem,5vw,3rem)] leading-none font-light tracking-[-0.04em] text-background-elevated transition-colors duration-500 group-hover:text-surface">
          {number}
        </span>
        <div className="min-w-0">
          <div className="mb-5 h-px w-full bg-gradient-to-r from-white/[0.08] to-transparent" />
          <h3 className="flex items-center gap-2.5 font-sans text-[clamp(1.25rem,2.5vw,1.5rem)] font-medium tracking-[-0.02em] text-foreground">
            {showLogo && <BuddyUpLogo size="xs" />}
            {title}
          </h3>
          <p className="mt-3 max-w-md text-[16px] leading-[1.7] text-body">
            {description}
          </p>
        </div>
      </div>
    </motion.li>
  );
}

export default function CurrentNow() {
  const prefersReducedMotion = useReducedMotion();

  const headerMotion = prefersReducedMotion
    ? {}
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport };

  return (
    <Section glow="cool">
      <div className="mx-auto max-w-3xl">
        <motion.header
          {...headerMotion}
          variants={blurReveal}
          custom={0}
          className="mb-12 sm:mb-16"
        >
          <p className="mb-6 font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
            Building
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
            Şu Anda İnşa Ettiklerim
          </h2>
        </motion.header>

        <ul className="divide-y divide-white/[0.05]">
          {buildingItems.map((item, index) => (
            <BuildingItem key={item.title} {...item} index={index} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
