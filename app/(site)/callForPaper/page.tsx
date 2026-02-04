import { ContentPageLayout } from "@/components/layout/content-page";
import { callForPaperContent } from "./_data/callForPaper";

export default function CallForPaperPage() {
  return <ContentPageLayout data={callForPaperContent} />;
}
