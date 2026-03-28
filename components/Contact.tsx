'use client';

import { motion } from 'framer-motion';
import { socialLinks } from '@/data/portfolio';

export function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-12">
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
            Let's Connect
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Feel free to reach out for opportunities or just to say hello
          </p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col gap-6"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.platform}
              variants={itemVariants}
              href={link.url}
              target={link.platform !== 'email' ? '_blank' : undefined}
              rel={link.platform !== 'email' ? 'noopener noreferrer' : undefined}
              className="group inline-flex items-baseline gap-3 py-2 text-lg font-medium text-zinc-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <span className="relative">
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </span>
              <span className="text-zinc-400 dark:text-zinc-600 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                →
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
