import AboutBrief from "@/components/AboutBrief";
import ContactCTA from "@/components/ContactCTA";
import CurrentNow from "@/components/CurrentNow";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import WorkPhilosophy from "@/components/WorkPhilosophy";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <AboutBrief />
      <CurrentNow />
      <WorkPhilosophy />
      <Journey />
      <ContactCTA />
    </main>
  );
}
