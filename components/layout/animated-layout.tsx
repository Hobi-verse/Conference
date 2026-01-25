"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/features/layout/header";
import { Footer } from "@/components/features/layout/footer";
import { ThemeProvider } from "@/context/theme-context";

export function AnimatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header />
      </motion.div>
      <main className="grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto max-w-7xl px-4 py-6"
        >
          {children}
        </motion.div>
      </main>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Footer />
      </motion.div>
    </ThemeProvider>
  );
}
