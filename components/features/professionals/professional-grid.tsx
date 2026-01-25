"use client";

import { useState } from "react";
import { professionals } from "@/data/professionals";
import { ProfessionalCard } from "./professional-card";

export function ProfessionalGrid() {
  const [filter, setFilter] = useState<string>("all");

  const designations = Array.from(
    new Set(professionals.map((p) => p.designation)),
  );

  const filteredProfessionals =
    filter === "all"
      ? professionals
      : professionals.filter((p) => p.designation === filter);

  return (
    <section className="bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <header className="mb-6">
          <h2 className="font-serif text-2xl">Professional Delegation</h2>
        </header>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button
            onClick={() => setFilter("all")}
            className={`border px-3 py-1 text-sm ${
              filter === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-background"
            }`}
          >
            All
          </button>

          {designations.map((designation) => (
            <button
              key={designation}
              onClick={() => setFilter(designation)}
              className={`border px-3 py-1 text-sm ${
                filter === designation
                  ? "bg-primary text-primary-foreground"
                  : "bg-background"
              }`}
            >
              {designation}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProfessionals.map((person) => (
            <ProfessionalCard key={person.id} professional={person} />
          ))}
        </div>
      </div>
    </section>
  );
}
