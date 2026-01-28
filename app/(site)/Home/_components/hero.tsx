"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { pressHero, heroImages } from "@/data/hero-content";

export function Hero() {
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 1000], [0, 80]);
  const textY = useTransform(scrollY, [0, 1000], [0, 30]);

  return (
    <section className="relative w-screen min-h-[72vh] overflow-hidden ">
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <Image
          src={pressHero.image.src}
          alt={pressHero.image.alt}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex min-h-[72vh] items-center"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-24 items-center">
            {/* Text */}
            <div className="space-y-6">
              <h1 className="font-serif text-4xl lg:text-5xl text-white leading-tight tracking-tight">
                {pressHero.title}
              </h1>

              <p className="max-w-xl text-lg text-white/85 leading-relaxed">
                {pressHero.summary}
              </p>
            </div>

            <motion.div className="relative flex justify-start md:justify-start">
              <div className="relative h-[260px] w-[260px] lg:h-[300px] lg:w-[300px] rounded-lg overflow-hidden shadow-2xl rotate-[-10deg]">
                <Image
                  src={heroImages[1].src}
                  alt={heroImages[1].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
