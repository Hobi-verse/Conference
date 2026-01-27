import Image from "next/image";
import { Professional } from "../_types";

interface ProfessionalCardProps {
  professional: Professional;
}

export function ProfessionalCard({ professional }: ProfessionalCardProps) {
  return (
    <article className="border border-border bg-card">
      <div className="p-4">
        <Image
          src={professional.image.src}
          alt={professional.image.alt}
          width={300}
          height={360}
          className="mb-4 w-full border border-border object-cover"
        />

        <h3 className="font-serif text-lg">{professional.name}</h3>

        <p className="mt-1 text-sm font-medium">{professional.designation}</p>

        {professional.affiliation && (
          <p className="mt-1 text-sm text-muted-foreground">
            {professional.affiliation}
          </p>
        )}

        {professional.description && (
          <p className="mt-3 text-sm text-muted-foreground">
            {professional.description}
          </p>
        )}
      </div>
    </article>
  );
}
