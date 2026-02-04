import { Hero } from "./_components/hero";
import { AboutSection } from "./_components/about";
import { ProfessionalGrid } from "../speakers/_components/professional-grid";
import MotionSection from "@/components/layout/motion-section";

export default function HomePage() {
  return (
    <>
      <MotionSection direction="up">
        <Hero />
      </MotionSection>

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
