"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import { blurReveal, viewport } from "@/lib/motion";

const thoughts = [
  {
    question: "Yapay zekâ işleri elimizden alacak mı?",
    answer:
      "Hayır. Ama işleri yapış biçimimizi tamamen değiştirecek.",
  },
  {
    question: "Neden BuddyUp?",
    answer:
      "İnsanlar daha bağlı ama daha yalnız. BuddyUp bu soruya verdiğim cevap.",
  },
  {
    question: "Bir marka inşa etmek ne öğretti?",
    answer: "Mükemmel olmak değil. Tutarlı olmak önemli.",
  },
] as const;

function ThoughtCard({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  return (
    <motion.article
      custom={0.1 + index * 0.1}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={blurReveal}
      className="group"
    >
      <div className="border-t border-white/[0.05] py-14 sm:py-16 lg:py-20">
        <h3 className="max-w-2xl font-display text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.25] tracking-[-0.02em] text-foreground">
          {question}
        </h3>

        <p className="mt-6 max-w-lg text-[17px] leading-[1.7] text-body">
          {answer}
        </p>
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
    <Section glow="neutral">
      <div className="mx-auto max-w-3xl">
        <motion.header
          {...headerMotion}
          variants={blurReveal}
          custom={0}
          className="mb-12 sm:mb-16"
        >
          <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
            Düşündüklerim
          </h2>
        </motion.header>

        <div>
          {thoughts.map((thought, index) => (
            <ThoughtCard key={thought.question} {...thought} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
