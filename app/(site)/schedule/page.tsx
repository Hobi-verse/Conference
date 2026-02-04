import { AgendaList } from "./_components/agenda-list";
import { ContentPageLayout } from "@/components/layout/content-page";
import { scheduleContent } from "./_data/schedule";

export default function AgendaPage() {
  return (
    <ContentPageLayout data={scheduleContent}>
      <AgendaList />
    </ContentPageLayout>
  );
}
