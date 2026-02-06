"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LaserFlow } from "@/components/backgroundUtil/LaserFlow";

export function HomeHeroBackground() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  const imageY = useTransform(scrollY, [0, 1000], [0, isMobile ? 0 : 80]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <motion.div style={{ y: imageY }} className="absolute inset-0">
      <LaserFlow
        color="#80786f"
        wispDensity={1}
        flowSpeed={1}
        verticalSizing={10}
        horizontalSizing={1.5}
        fogIntensity={isMobile ? 5 : 0.45}
        fogScale={isMobile ? 1 : 0.35}
        wispSpeed={40}
        wispIntensity={7.5}
        flowStrength={0.3}
        decay={1.1}
        horizontalBeamOffset={0}
        verticalBeamOffset={-0.5}
      />
    </motion.div>
  );
}
