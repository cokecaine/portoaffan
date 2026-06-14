"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 px-6 sm:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-zinc-600 dark:text-zinc-400"
      >
        <p>© {currentYear} cokecaine. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}
