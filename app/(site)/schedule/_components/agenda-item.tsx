import { AgendaItem } from "../_types";

export function AgendaItemRow({ item }: { item: AgendaItem }) {
  return (
    <article className="border-b border-border py-4">
      <div className="flex flex-col md:flex-row md:items-center md:gap-6">
        <span className="w-40 text-sm font-medium">{item.time}</span>

        <div>
          <h3 className="font-serif text-base">{item.title}</h3>

          {item.speaker && (
            <p className="text-sm text-muted-foreground">
              Speaker: {item.speaker}
            </p>
          )}

          {item.location && (
            <p className="text-sm text-muted-foreground">
              Venue: {item.location}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
