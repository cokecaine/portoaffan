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
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
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
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Projects
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            A selection of things I&apos;ve built — solo and in teams
          </p>
        </motion.div>

        {/* Projects List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 py-2 hover:border-emerald-500 transition-colors duration-300"
            >
              {/* Award badge */}
              {project.award && (
                <span className="inline-block mb-3 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-full">
                  {project.award}
                </span>
              )}

              {/* Title + meta row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {project.title}
                </h2>
                <div className="flex items-center gap-2 shrink-0">
                  {project.teamSize && (
                    <span className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 rounded-full">
                      Team of {project.teamSize}
                    </span>
                  )}
                  <span className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                {project.subtitle}
              </p>

              {/* Role · Event · Date */}
              <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-4">
                {project.role}
                {project.event ? ` · ${project.event}` : ""} · {project.date}
              </p>

              {/* Description */}
              <p className="text-base text-zinc-600 dark:text-zinc-300 mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-5">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-300"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              {project.tools.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-block px-3 py-1 text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
