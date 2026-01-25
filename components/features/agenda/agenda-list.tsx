import { agenda } from "@/data/agenda";
import { AgendaItemRow } from "./agenda-item";

export function AgendaList() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-8">
          <h1 className="font-serif text-3xl">Conference Agenda</h1>
        </header>

        {agenda.map((item) => (
          <AgendaItemRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
