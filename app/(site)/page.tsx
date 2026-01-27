import { Hero } from "@/components/layout/hero";
import { ProfessionalGrid } from "./speakers/_components/professional-grid";
import { NoticesList } from "./notices/_components/notices-list";
import MotionSection from "@/components/layout/motion-section";

export default function HomePage() {
  return (
    <>
      <MotionSection direction="up">
        <Hero />
      </MotionSection>

      <MotionSection direction="down" delay={0.2}>
        <NoticesList />
      </MotionSection>

      <MotionSection direction="down" delay={0.4}>
        <ProfessionalGrid />
      </MotionSection>
    </>
  );
}
