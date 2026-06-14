"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="experience" className="py-20 px-6 sm:px-12">
      <div className="w-full max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Experience
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Professional work and international collaborations
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          animate="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 py-2 hover:border-emerald-500 transition-colors duration-300"
            >
              {/* Type badge */}
              <span className="inline-block mb-3 px-3 py-1 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-full">
                {exp.type}
              </span>

              {/* Company + period */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {exp.company}
                </h2>
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 shrink-0">
                  {exp.period}
                </span>
              </div>

              {/* Role */}
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4">
                {exp.role}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-5">
                {exp.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-300"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
