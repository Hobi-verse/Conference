"use client";

interface FilterProps {
  designations: string[];
  affiliations: string[];
  selectedDesignation: string;
  selectedAffiliation: string;
  onChange: (filters: { designation: string; affiliation: string }) => void;
}

export function ProfessionalFilters({
  designations,
  affiliations,
  selectedDesignation,
  selectedAffiliation,
  onChange,
}: FilterProps) {
  return (
    <div className="mb-6 flex flex-wrap gap-4">
      <select
        value={selectedDesignation}
        onChange={(e) =>
          onChange({
            designation: e.target.value,
            affiliation: selectedAffiliation,
          })
        }
        className="border border-border bg-background px-3 py-2 text-sm"
      >
        <option value="">All Designations</option>
        {designations.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <select
        value={selectedAffiliation}
        onChange={(e) =>
          onChange({
            designation: selectedDesignation,
            affiliation: e.target.value,
          })
        }
        className="border border-border bg-background px-3 py-2 text-sm"
      >
        <option value="">All Affiliations</option>
        {affiliations.map((a) => (
          <option key={a} value={a}>
            {a}
          </option>
        ))}
      </select>
    </div>
  );
}
