"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

const contactCards = [
  {
    title: "LinkedIn",
    description: "Profesyonel geçmişim ve güncel çalışmalarım.",
    button: "Profili Gör",
    href: "https://www.linkedin.com/in/firatovalioglu",
    external: true,
  },
  {
    title: "E-Posta",
    description: "Yeni fikirler ve iş birlikleri için.",
    email: "fovalioglu@gmail.com",
    button: "Mail Gönder",
    href: "mailto:fovalioglu@gmail.com",
    external: false,
  },
  {
    title: "Projeler",
    description: "Geliştirdiğim ürünleri ve projeleri keşfedin.",
    button: "İncele",
    href: "#work",
    external: false,
  },
] as const;

function ContactCard({
  title,
  description,
  button,
  href,
  external,
  email,
  index,
}: {
  title: string;
  description: string;
  button: string;
  href: string;
  external: boolean;
  email?: string;
  index: number;
}) {
  return (
    <motion.article
      custom={0.12 + index * 0.1}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      className="group relative flex flex-col"
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-white/[0.07] to-transparent opacity-0 blur-lg transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative flex flex-1 flex-col rounded-2xl border border-zinc-800 bg-white/[0.02] p-7 backdrop-blur-md transition-all duration-500 group-hover:border-zinc-700 group-hover:bg-white/[0.04] sm:p-8">
        <h3 className="font-sans text-lg font-medium tracking-[-0.02em] text-zinc-100 transition-colors duration-500 group-hover:text-white">
          {title}
        </h3>

        <p className="mt-3 flex-1 text-[14px] leading-relaxed text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
          {description}
        </p>

        {email && (
          <a
            href={`mailto:${email}`}
            className="mt-4 inline-block font-mono text-[13px] tracking-wide text-zinc-400 transition-colors duration-300 hover:text-zinc-200"
          >
            {email}
          </a>
        )}

        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-[13px] font-medium tracking-[-0.01em] text-zinc-300 transition-all duration-500 hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-white"
        >
          {button}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="transition-transform duration-500 group-hover:translate-x-0.5"
            aria-hidden
          >
            <path
              d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </motion.article>
  );
}

export default function ContactCTA() {
  const prefersReducedMotion = useReducedMotion();

  const headerMotion = prefersReducedMotion
    ? {}
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-6 pt-28 pb-20 sm:px-10 sm:pt-36 sm:pb-24 lg:px-14 lg:pt-44 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-6xl">
        {/* CTA header */}
        <motion.header
          {...headerMotion}
          variants={fadeUp}
          custom={0}
          className="mb-16 text-center sm:mb-20 lg:mb-28"
        >
          <p className="mb-5 font-mono text-[11px] tracking-[0.28em] text-zinc-600 uppercase">
            CONTACT
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.08] tracking-[-0.02em] text-white">
            Birlikte Bir Şeyler İnşa Edelim
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-zinc-500 sm:text-base">
            Yeni markalar, dijital ürünler, e-ticaret projeleri veya sadece iyi
            bir fikir üzerine konuşmak isterseniz bana ulaşabilirsiniz.
          </p>
        </motion.header>

        {/* Contact cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {contactCards.map((card, index) => (
            <ContactCard key={card.title} {...card} index={index} />
          ))}
        </div>

        {/* Footer wordmark */}
        <motion.footer
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="relative mt-32 overflow-hidden py-16 text-center sm:mt-40 sm:py-20 lg:mt-52 lg:py-24"
        >
          <p
            className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none font-sans text-[clamp(5rem,22vw,14rem)] leading-none font-medium tracking-[0.1em] text-white/[0.025] uppercase"
            aria-hidden
          >
            OVALIOGLU
          </p>

          <div className="relative space-y-2 sm:space-y-3">
            <p className="font-display text-[clamp(1.25rem,3vw,1.75rem)] tracking-[-0.01em] text-zinc-400">
              Kuruyorum.
            </p>
            <p className="font-display text-[clamp(1.25rem,3vw,1.75rem)] tracking-[-0.01em] text-zinc-400">
              Geliştiriyorum.
            </p>
            <p className="font-display text-[clamp(1.25rem,3vw,1.75rem)] tracking-[-0.01em] text-zinc-400">
              Üretiyorum.
            </p>
          </div>

          <p className="relative mt-10 font-sans text-[14px] font-light tracking-wide text-zinc-600 sm:mt-14 sm:text-[15px]">
            İnşa etmeye devam ediyorum.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
