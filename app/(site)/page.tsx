import { Hero } from "@/components/features/hero/hero";
import { ProfessionalGrid } from "@/components/features/professionals/professional-grid";
import { NoticesList } from "@/components/features/notices/notices-list";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NoticesList />
      <ProfessionalGrid />
    </>
  );
}
