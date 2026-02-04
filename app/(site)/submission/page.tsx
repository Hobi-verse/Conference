import { ContentPageLayout } from "@/components/layout/content-page";
import { submissionContent } from "./_data/submission";

export default function SubmissionPage() {
  return <ContentPageLayout data={submissionContent} />;
}
