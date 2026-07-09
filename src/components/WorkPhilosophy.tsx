"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import { blurReveal, viewport } from "@/lib/motion";

const principles = [
  {
    number: "01",
    title: "İnsan Odaklı Düşünürüm",
    description:
      "İyi ürünlerin teknolojiden önce insan ihtiyaçlarını anlamakla başladığına inanırım.",
  },
  {
    number: "02",
    title: "Sürekli Geliştiririm",
    description:
      "Mükemmel başlangıçlar yerine sürekli gelişen fikirleri tercih ederim.",
  },
  {
    number: "03",
    title: "Sade Olanı Tercih Ederim",
    description:
      "Karmaşıklık yerine anlaşılır, işlevsel ve uzun ömürlü çözümler üretmeye çalışırım.",
  },
  {
    number: "04",
    title: "Üretmeye Devam Ederim",
    description:
      "Yeni teknolojileri öğrenmeyi, denemeyi ve gerçek problemlere uygulamayı severim.",
  },
] as const;

function PrincipleBlock({
  number,
  title,
  description,
  index,
}: {
  number: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.li
      custom={0.08 + index * 0.08}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={blurReveal}
      className="group"
    >
      <div className="grid grid-cols-1 gap-6 py-14 sm:grid-cols-[6rem_1fr] sm:gap-12 sm:py-20">
        <span className="font-mono text-[clamp(2.5rem,6vw,4rem)] leading-none font-light tracking-[-0.04em] text-background-elevated transition-colors duration-500 group-hover:text-surface">
          {number}
        </span>

        <div className="min-w-0">
          <div className="mb-6 h-px w-full bg-gradient-to-r from-white/[0.08] to-transparent" />

          <h3 className="font-sans text-[clamp(1.25rem,2.5vw,1.5rem)] font-medium tracking-[-0.02em] text-foreground">
            {title}
          </h3>

          <p className="mt-4 max-w-md text-[16px] leading-[1.7] text-muted">
            {description}
          </p>
        </div>
      </div>
    </motion.li>
  );
}

export default function WorkPhilosophy() {
  const prefersReducedMotion = useReducedMotion();

  const headerMotion = prefersReducedMotion
    ? {}
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport };

  return (
    <Section glow="neutral">
      <div className="mx-auto max-w-3xl">
        <motion.header
          {...headerMotion}
          variants={blurReveal}
          custom={0}
          className="mb-12 sm:mb-16"
        >
          <p className="mb-6 font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
            Workflow
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
            Nasıl Çalışıyorum?
          </h2>
        </motion.header>

        <ul className="divide-y divide-white/[0.05]">
          {principles.map((principle, index) => (
            <PrincipleBlock key={principle.number} {...principle} index={index} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
