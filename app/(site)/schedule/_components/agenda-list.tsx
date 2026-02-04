import { paperPresentations, speakerSessions } from "../_data/agenda";
import { AgendaItemRow } from "./agenda-item";

export function AgendaList() {
  return (
    <section>
      <div>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="border border-border bg-card p-5 shadow-sm">
            <h2 className="font-serif text-lg">Speaker Session Detail</h2>
            <div className="mt-4">
              {speakerSessions.map((item) => (
                <AgendaItemRow key={`speaker-${item.id}`} item={item} />
              ))}
            </div>
          </div>
          <div className="border border-border bg-card p-5 shadow-sm">
            <h2 className="font-serif text-lg">Paper Presentation Detail</h2>
            <div className="mt-4">
              {paperPresentations.map((item) => (
                <AgendaItemRow key={`paper-${item.id}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
