"use client";

import { motion } from "framer-motion";
import { blurReveal, viewport } from "@/lib/motion";

const navGroups = [
  {
    label: "Products",
    links: [
      { name: "BuddyUp", href: "/works/buddyup" },
      { name: "PatternOS", href: "#work" },
    ],
  },
  {
    label: "Brands",
    links: [
      { name: "Laperissa", href: "https://www.laperissa.com.tr" },
      { name: "Laperissa Global", href: "https://www.laperissa.com" },
    ],
  },
  {
    label: "Research",
    links: [{ name: "PatternOS", href: "#work" }],
  },
  {
    label: "Contact",
    links: [
      { name: "E-Posta", href: "mailto:fovalioglu@gmail.com" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/firat-ovalioglu/" },
    ],
  },
] as const;

export default function EcosystemFooter() {
  return (
    <motion.footer
      custom={0.3}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={blurReveal}
      className="relative mt-32 border-t border-white/[0.05] pt-16 sm:mt-40 sm:pt-20 lg:mt-52 lg:pt-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 sm:gap-8">
          {navGroups.map((group) => (
            <nav key={group.label} aria-label={group.label}>
              <p className="mb-5 font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                {group.label}
              </p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={`${group.label}-${link.name}`}>
                    <a
                      href={link.href}
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-[14px] tracking-[-0.01em] text-secondary transition-colors duration-300 hover:text-foreground"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-6 border-t border-white/[0.04] pt-12 sm:mt-24 sm:pt-16">
          <p className="font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
            OVALIOGLU
          </p>
          <p className="font-display text-[15px] tracking-[-0.01em] text-muted">
            Kuruyorum. Geliştiriyorum. Üretiyorum.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
