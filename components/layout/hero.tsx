"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { pressHero, heroImages } from "@/data/hero-content";

export function Hero() {
  // Track page scroll
  const { scrollY } = useScroll();

  // Parallax transforms
  const imageY = useTransform(scrollY, [0, 1000], [0, 80]);
  const boxesY = useTransform(scrollY, [0, 1000], [0, -40]);
  const textY = useTransform(scrollY, [0, 1000], [0, 30]);

  return (
    <section className="bg-background py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <article className="grid gap-12 lg:grid-cols-3 items-stretch">
          {/* LEFT: Portrait Image (smooth parallax) */}
          <div className="order-1">
            <div className="relative h-[520px] w-full overflow-hidden border border-border">
              <motion.div style={{ y: imageY }} className="absolute inset-0">
                <Image
                  src={pressHero.image.src}
                  alt={pressHero.image.alt}
                  fill
                  priority
                  className="object-fill"
                />
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="order-2 lg:col-span-2 flex flex-col justify-between">
            {/* Text (subtle motion) */}
            <motion.header style={{ y: textY }}>
              <h1 className="font-serif text-3xl leading-tight md:text-4xl">
                {pressHero.title}
              </h1>
              <p className="mt-4 text-muted-foreground">{pressHero.summary}</p>
            </motion.header>

            {/* Boxes (opposite parallax) */}
            <motion.div
              className="mt-10 flex-1 grid gap-6 sm:grid-cols-2"
              style={{ y: boxesY }}
            >
              <div className="border border-border overflow-hidden h-full relative">
                <motion.div style={{ y: imageY }} className="absolute inset-0">
                  <Image
                    src={heroImages[0].src}
                    alt={heroImages[0].alt}
                    fill
                    className="object-fill"
                  />
                </motion.div>
              </div>

              <div className="border border-border overflow-hidden h-full relative">
                <motion.div style={{ y: imageY }} className="absolute inset-0">
                  <Image
                    src={heroImages[1].src}
                    alt={heroImages[1].alt}
                    fill
                    className="object-fill"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </article>
      </div>
    </section>
  );
}
