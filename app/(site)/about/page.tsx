import MotionSection from "@/components/layout/motion-section";

export default function AboutPage() {
  return (
    <MotionSection direction="up">
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-serif text-3xl leading-tight md:text-4xl mb-6">
          About ICCS 2026
        </h1>
        <p className="text-lg mb-4 text-muted-foreground">
          The International Conference on Computer Science (ICCS) serves as a
          formal platform for academic exchange, institutional collaboration,
          and peer-reviewed research dissemination.
        </p>
        <p className="text-lg mb-4 text-muted-foreground">
          ICCS 2026 brings together leading researchers, academics, and industry
          professionals to share cutting-edge advancements in computer science
          and related fields.
        </p>
        <p className="text-lg text-muted-foreground">
          Join us for an enriching experience that fosters innovation,
          collaboration, and the advancement of knowledge in the ever-evolving
          world of technology.
        </p>
      </div>
    </MotionSection>
  );
}
