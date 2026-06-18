import type { Metadata } from "next";
import BuddyUpCaseStudy from "@/components/case-study/BuddyUpCaseStudy";

export const metadata: Metadata = {
  title: "BuddyUp — Case Study | Fırat Ovalıoğlu",
  description:
    "Aynı şeyleri yapmak isteyen insanları gerçek hayatta bir araya getiren sosyal keşif uygulaması.",
};

export default function BuddyUpPage() {
  return <BuddyUpCaseStudy />;
}
