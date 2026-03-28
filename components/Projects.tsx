"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-6 sm:px-12">
      <div className="w-full max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Selected Projects
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Data-driven projects highlighting metrics and measurable impact
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 py-4 hover:border-emerald-500 transition-colors duration-300"
            >
              {/* Project Title and Category */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white">
                  {project.title}
                </h3>
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-base text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Metric & Impact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 bg-zinc-50 dark:bg-zinc-900/50 p-4 border border-zinc-100 dark:border-zinc-800">
                <div>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2">
                    Metric
                  </p>
                  <p className="font-mono text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400">
                    {project.metric}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2">
                    Impact
                  </p>
                  <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-200">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Tools Used */}
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-block px-3 py-1 text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
                  >
                    {tool}
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
