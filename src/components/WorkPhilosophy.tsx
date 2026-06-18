"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

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
      custom={0.08 + index * 0.1}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      className="group"
    >
      <div className="grid grid-cols-1 gap-6 py-12 transition-colors duration-500 sm:grid-cols-[7rem_1fr] sm:gap-10 sm:py-16 lg:grid-cols-[9rem_1fr] lg:gap-14">
        <div className="flex items-start sm:pt-1">
          <span className="font-mono text-[clamp(3rem,8vw,5.5rem)] leading-none font-light tracking-[-0.04em] text-zinc-800 transition-colors duration-500 group-hover:text-zinc-600">
            {number}
          </span>
        </div>

        <div className="min-w-0">
          <div className="mb-8 h-px w-full bg-gradient-to-r from-white/[0.12] via-white/[0.06] to-transparent transition-all duration-700 group-hover:from-white/[0.2] group-hover:via-white/[0.1]" />

          <h3 className="font-sans text-[clamp(1.35rem,3vw,1.75rem)] leading-snug font-medium tracking-[-0.02em] text-zinc-100 transition-colors duration-500 group-hover:text-white">
            {title}
          </h3>

          <p className="mt-4 max-w-xl text-[15px] leading-[1.8] font-light tracking-[-0.01em] text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400 sm:text-base">
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
    <section className="relative bg-[#050505] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-4xl">
        <motion.header
          {...headerMotion}
          variants={fadeUp}
          custom={0}
          className="mb-8 sm:mb-12"
        >
          <p className="mb-5 font-mono text-[11px] tracking-[0.28em] text-zinc-600 uppercase">
            FELSEFE
          </p>
          <h2 className="font-display text-[clamp(2.25rem,5.5vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-white">
            Nasıl Çalışıyorum?
          </h2>
        </motion.header>

        <ul className="divide-y divide-white/[0.06]">
          {principles.map((principle, index) => (
            <PrincipleBlock key={principle.number} {...principle} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
