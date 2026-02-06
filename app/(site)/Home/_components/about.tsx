"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { aboutICCS } from "../_data/about";

export function AboutSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 30]);

  return (
    <section className="w-[90%] mx-auto border-4 border-[#80786f] bg-background text-foreground lg:px-20 py-10 rounded-xl">
      <motion.div style={{ y }} className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <header className=" max-w-3xl  mb-12 lg:px-20">
          <h1 className="font-serif text-3xl md:text-4xl ">
            {aboutICCS.title}
          </h1>

          <p className="text-sm text-foreground/70">{aboutICCS.subtitle}</p>
        </header>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 items-start ">
          {/* Text */}
          <div className="content text-foreground/80 lg:px-20 ">
            {aboutICCS.description.map((para, idx) => (
              <p key={idx} className="text-sm">
                {para}
              </p>
            ))}

            <Link
              href={aboutICCS.cta.href}
              className="
                inline-flex mt-6
                rounded-full
                border border-primary
                px-5 py-2 text-sm font-medium
                text-primary
                hover:bg-primary hover:text-primary-foreground
                transition
              "
            >
              {aboutICCS.cta.label}
            </Link>
          </div>

          {/* Image */}
          <div className="relative w-[260px] h-[260px] rounded-lg overflow-hidden border border-border shadow-xl -mt-8">
            <Image
              src={aboutICCS.image.src}
              alt={aboutICCS.image.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Sections full width */}
        <div className="mt-12 sm:px-10 lg:px-20">
          {aboutICCS.sections.map((section) => (
            <div key={section.heading} className="mb-8">
              <h2 className="text-xl font-semibold mb-2 font-serif">
                {section.heading}
              </h2>
              <p className="text-sm text-foreground/70">{section.content}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
