"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

const thoughts = [
  {
    question: "Yapay zekâ işleri elimizden alacak mı?",
    paragraphs: [
      "Bence hayır.",
      "Ama işleri yapış biçimimizi tamamen değiştirecek.",
      "Bu yüzden öğrenmeye devam etmek gerekiyor.",
    ],
  },
  {
    question: "Neden BuddyUp?",
    paragraphs: [
      "İnsanların birbirine her zamankinden daha bağlı ama daha yalnız olduğunu düşünüyorum.",
      "BuddyUp bu soruya verdiğim cevap.",
    ],
  },
  {
    question: "Bir marka inşa etmek ne öğretti?",
    paragraphs: [
      "Mükemmel olmak değil.",
      "Tutarlı olmak önemli.",
    ],
  },
] as const;

function ThoughtCard({
  question,
  paragraphs,
  index,
}: {
  question: string;
  paragraphs: readonly string[];
  index: number;
}) {
  return (
    <motion.article
      custom={0.1 + index * 0.12}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      className="group relative"
    >
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100 sm:-inset-6" />

      <div className="relative border-t border-white/[0.06] py-14 transition-colors duration-500 group-hover:border-white/[0.1] sm:py-16 lg:py-20">
        <h3 className="max-w-3xl font-display text-[clamp(1.65rem,4vw,2.5rem)] leading-[1.2] tracking-[-0.02em] text-zinc-200 transition-colors duration-500 group-hover:text-white">
          {question}
        </h3>

        <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
          {paragraphs.map((text) => (
            <p
              key={text}
              className="max-w-xl text-[16px] leading-[1.85] font-light tracking-[-0.01em] text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400 sm:text-[17px]"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Thoughts() {
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
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="font-display text-[clamp(2.25rem,5.5vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-white">
            Düşündüklerim
          </h2>
        </motion.header>

        <div>
          {thoughts.map((thought, index) => (
            <ThoughtCard key={thought.question} {...thought} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
