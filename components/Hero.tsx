"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { education } from "@/data/portfolio";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 sm:px-12 py-20">
      <motion.div
        className="w-full max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex items-center gap-2"
        >
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 bg-emerald-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 bg-emerald-500 rounded-full"></div>
          </div>
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Available for projects
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2 leading-none"
        >
          Affan Ilham Arsyilla
        </motion.h1>

        {/* Education Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800"
        >
          <span className="text-sm font-mono text-zinc-600 dark:text-zinc-400">
            {education.school}
          </span>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8 max-w-2xl"
        >
          Full-stack developer with a focus on mobile, web, and AI engineering
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-12 max-w-2xl font-light"
        >
          A student of Informatics at Universitas Muhammadiyah Surakarta with a
          passion for data science and technology. I build data-driven solutions
          — from machine learning models to interactive dashboards — that turn
          complex information into clear, actionable insights.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/projects"
            className="px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium inline-flex items-center justify-center border-2 border-zinc-900 dark:border-white hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-zinc-900 dark:border-zinc-300 text-zinc-900 dark:text-zinc-300 font-medium inline-flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
