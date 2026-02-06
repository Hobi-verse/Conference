"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { pressHero } from "@/app/(site)/Home/_data/hero-content";

export function Hero() {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 1000], [0, 30]);

  return (
    <motion.div
      style={{ y: textY }}
      className="relative z-10 flex min-h-[72vh] items-center justify-center"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 place-items-center">
          {/* Text */}
          <div className="space-y-6 text-center">
            <h1 className="font-serif text-4xl lg:text-5xl text-white leading-tight tracking-tight">
              {pressHero.title}
            </h1>

            <p className="mx-auto max-w-xl text-lg text-white/85 leading-relaxed">
              {pressHero.summary}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
