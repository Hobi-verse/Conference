import MotionSection from "@/components/layout/motion-section";
import { accessibilityContent } from "./_data/accessibility";

export default function AccessibilityPage() {
  return (
    <MotionSection direction="up">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="font-serif text-3xl leading-tight md:text-4xl mb-6">
          {accessibilityContent.title}
        </h1>

        <div className="prose prose-lg max-w-none text-muted-foreground">
          {accessibilityContent.sections.map((section, index) => (
            <div key={index}>
              <h2 className="font-serif text-2xl mt-8 mb-4">{section.title}</h2>
              {section.isList ? (
                <ul className="mb-4 list-disc pl-6">
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mb-4">{section.content}</p>
              )}
            </div>
          ))}

          <p className="text-sm mt-8">
            Last updated: {accessibilityContent.lastUpdated}
          </p>
        </div>
      </div>
    </MotionSection>
  );
}
