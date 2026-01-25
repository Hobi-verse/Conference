import Image from "next/image";
import { pressHero, heroImages } from "@/data/hero-content";

export function Hero() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4">
        <article className="grid gap-12 lg:grid-cols-3 items-stretch">
          {/* LEFT: Portrait Image */}
          <div className="order-1">
            <div className="relative h-[520px] w-full overflow-hidden border border-border">
              <Image
                src={pressHero.image.src}
                alt={pressHero.image.alt}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="order-2 lg:col-span-2 flex flex-col justify-between">
            {/* Text */}
            <header>
              <h1 className="font-serif text-3xl leading-tight md:text-4xl">
                {pressHero.title}
              </h1>
              <p className="mt-4 text-muted-foreground">{pressHero.summary}</p>
            </header>

            {/* Boxes */}
            <div className="mt-10 flex-1 grid gap-6 sm:grid-cols-2">
              <div className="border border-border ">
                <Image
                  src={heroImages[0].src}
                  alt={heroImages[0].alt}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover rounded"
                />
              </div>

              <div className="border border-border ">
                <Image
                  src={heroImages[1].src}
                  alt={heroImages[1].alt}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
