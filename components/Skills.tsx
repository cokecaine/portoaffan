'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  // Group skills by category
  const groupedSkills = {
    language: skills.filter((s) => s.category === 'language'),
    tool: skills.filter((s) => s.category === 'tool'),
    library: skills.filter((s) => s.category === 'library'),
  };

  return (
    <section className="py-20 px-6 sm:px-12">
      <div className="w-full max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Toolbox
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {/* Languages */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-mono font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4"
            >
              Languages
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-wrap gap-3"
            >
              {groupedSkills.language.map((skill) => (
                <motion.span
                  key={skill.name}
                  variants={itemVariants}
                  className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 font-mono text-sm font-medium hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors"
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Tools */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-mono font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4"
            >
              Tools & Platforms
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-wrap gap-3"
            >
              {groupedSkills.tool.map((skill) => (
                <motion.span
                  key={skill.name}
                  variants={itemVariants}
                  className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 font-mono text-sm font-medium hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors"
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Libraries */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-mono font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4"
            >
              Libraries & Frameworks
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-wrap gap-3"
            >
              {groupedSkills.library.map((skill) => (
                <motion.span
                  key={skill.name}
                  variants={itemVariants}
                  className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 font-mono text-sm font-medium hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors"
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
