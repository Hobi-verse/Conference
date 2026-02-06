import { Hero } from "./_components/hero";
import { AboutSection } from "./_components/about";
import { ProfessionalGrid } from "../speakers/_components/professional-grid";
import MotionSection from "@/components/layout/motion-section";
import { HomeHeroBackground } from "./_components/home-hero-background";

export default function HomePage() {
  return (
    <>
      <section className="relative w-screen min-h-[80vh] overflow-hidden ">
        <HomeHeroBackground />
        <MotionSection direction="up">
          <Hero />
        </MotionSection>
      </section>

      <MotionSection direction="up" delay={0.1}>
        <AboutSection />
      </MotionSection>

      <div className="mx-auto max-w-7xl sm:px-10 lg:px-20 py-10 space-y-16 ">
        <MotionSection direction="down" delay={0.4}>
          <ProfessionalGrid />
        </MotionSection>
      </div>
    </>
  );
}
