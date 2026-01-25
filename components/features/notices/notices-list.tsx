import { notices } from "@/data/notices";
import { NoticeCard } from "./notice-card";

export function NoticesList({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        {showTitle && (
          <header className="mb-8">
            <h1 className="font-serif text-3xl">Official Notices</h1>
          </header>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          {notices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      </div>
    </section>
  );
}
