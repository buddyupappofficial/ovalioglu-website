import AboutBrief from "@/components/AboutBrief";
import ContactCTA from "@/components/ContactCTA";
import CurrentNow from "@/components/CurrentNow";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Thoughts from "@/components/Thoughts";
import WorkPhilosophy from "@/components/WorkPhilosophy";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutBrief />
      <FeaturedProjects />
      <CurrentNow />
      <WorkPhilosophy />
      <Journey />
      <Thoughts />
      <ContactCTA />
    </main>
  );
}
