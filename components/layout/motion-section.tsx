"use client";

import { motion } from "framer-motion";

type MotionSectionProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down";
};

export default function MotionSection({
  children,
  delay = 0,
  direction = "up",
}: MotionSectionProps) {
  const y = direction === "up" ? -20 : 20;

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
