"use client";

import { motion, useReducedMotion } from "framer-motion";
import EcosystemFooter from "@/components/ui/EcosystemFooter";
import Section from "@/components/ui/Section";
import { blurReveal, viewport } from "@/lib/motion";

const contactCards = [
  {
    title: "LinkedIn",
    description: "Profesyonel geçmişim ve güncel çalışmalarım.",
    button: "Profili Gör",
    href: "https://www.linkedin.com/in/firat-ovalioglu/",
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
      variants={blurReveal}
      className="group relative flex flex-col"
    >
      <div className="glass-card relative flex flex-1 flex-col rounded-2xl p-8 transition-all duration-500 sm:p-9">
        <h3 className="font-sans text-[17px] font-medium tracking-[-0.02em] text-foreground">
          {title}
        </h3>

        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-body">
          {description}
        </p>

        {email && (
          <a
            href={`mailto:${email}`}
            className="mt-5 inline-block font-mono text-[13px] tracking-wide text-secondary transition-colors duration-300 hover:text-foreground"
          >
            {email}
          </a>
        )}

        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-8 inline-flex w-fit items-center gap-2 text-[13px] font-medium tracking-[-0.01em] text-secondary transition-colors duration-300 hover:text-foreground"
        >
          {button}
          <span aria-hidden>→</span>
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
    <Section id="contact" className="pb-20 sm:pb-24 lg:pb-28" glow="cool">
      <div className="mx-auto max-w-6xl">
        <motion.header
          {...headerMotion}
          variants={blurReveal}
          custom={0}
          className="mb-20 text-center sm:mb-28 lg:mb-36"
        >
          <p className="mb-6 font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
            Contact
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
            Birlikte Bir Şeyler İnşa Edelim
          </h2>
          <p className="mx-auto mt-8 max-w-md text-[17px] leading-relaxed text-body">
            Yeni markalar, dijital ürünler veya iyi bir fikir üzerine
            konuşmak isterseniz bana ulaşabilirsiniz.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {contactCards.map((card, index) => (
            <ContactCard key={card.title} {...card} index={index} />
          ))}
        </div>

        <EcosystemFooter />
      </div>
    </Section>
  );
}
