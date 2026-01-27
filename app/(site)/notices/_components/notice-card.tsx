import { Notice } from "../_types";

interface NoticeCardProps {
  notice: Notice;
}

export function NoticeCard({ notice }: NoticeCardProps) {
  return (
    <article className="border border-border bg-card p-4">
      <h3 className="font-serif text-base">{notice.title}</h3>

      <p className="mt-1 text-xs text-muted-foreground">{notice.date}</p>

      <p className="mt-3 text-sm text-muted-foreground">{notice.summary}</p>

      {notice.priority === "important" && (
        <span className="mt-3 inline-block border border-border px-2 py-0.5 text-xs font-medium">
          Important
        </span>
      )}
    </article>
  );
}
