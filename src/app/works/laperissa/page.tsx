import type { Metadata } from "next";
import LaperissaCaseStudy from "@/components/case-study/LaperissaCaseStudy";

export const metadata: Metadata = {
  title: "Laperissa — Case Study | Fırat Ovalıoğlu",
  description: "Premium iç giyim markası — marka, e-ticaret ve dijital deneyim.",
};

export default function LaperissaPage() {
  return <LaperissaCaseStudy />;
}
