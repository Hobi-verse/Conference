import Image from "next/image";
import MotionSection from "@/components/layout/motion-section";
import type { ContentPageData } from "@/types/content-page";

export function ContentPageLayout({
  data,
  children,
}: {
  data: ContentPageData;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-background">
      <section className="relative w-full min-h-[42vh] overflow-hidden">
        <Image
          src={data.hero.image.src}
          alt={data.hero.image.alt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex min-h-[42vh] items-center justify-center px-6">
          <h1 className="font-serif text-3xl md:text-5xl tracking-[0.2em] text-center text-white uppercase">
            {data.hero.title}
          </h1>
        </div>
      </section>

      <MotionSection direction="up">
        <section className="mx-auto mt-8 max-w-5xl px-6 pb-16">
          <div className="bg-card p-8 md:p-12 content">
            <h2 className="underline underline-offset-8 font-serif text-3xl md:text-4xl pb-4">
              {data.pageTitle}
            </h2>

            {data.actions ? (
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap gap-2">
                  {data.actions.left?.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      className={`inline-flex items-center rounded px-3 py-1.5 text-xs font-semibold transition-colors ${
                        action.style === "primary"
                          ? "bg-secondary text-primary"
                          : action.style === "outline"
                            ? "border border-border text-foreground"
                            : "bg-secondary text-primary border-2 border-white"
                      }`}
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 md:ml-auto">
                  {data.actions.right?.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      className={`inline-flex items-center rounded px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                        action.style === "secondary"
                          ? "bg-[#e64a4a] text-white"
                          : action.style === "outline"
                            ? "border border-border text-foreground"
                            : "bg-[#e64a4a] text-white border-2 border-white"
                      }`}
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-4">
              {data.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {data.sectionsHeading ? (
              <div className="mt-10">
                <p className="text-center text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
                  {data.sectionsHeading}
                </p>
              </div>
            ) : null}

            {data.sections.length > 0 ? (
              data.sectionsStyle === "plain" ? (
                <div className="mt-6 space-y-6">
                  {data.sections.map((section) => (
                    <div key={section.title}>
                      <h3 className="font-serif text-base md:text-lg text-foreground">
                        {section.title}
                      </h3>
                      <ul className="mt-2 list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-1">
                        {section.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-6 space-y-6">
                  {data.sections.map((section) => (
                    <div
                      key={section.title}
                      className="border border-border rounded-md overflow-hidden "
                    >
                      <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold">
                        {section.title}
                      </div>
                      <ul className="list-disc px-8 py-4 text-sm text-muted-foreground space-y-1">
                        {section.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )
            ) : null}

            {children ? <div className="mt-8">{children}</div> : null}
          </div>
        </section>
      </MotionSection>
    </div>
  );
}
