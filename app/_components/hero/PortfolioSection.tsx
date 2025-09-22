"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface PortfolioSectionProps {
  t: any;
  isDark: boolean;
  lang: string;
  fadeIn: any;
  scaleIn: any;
}

export default function PortfolioSection({ t, isDark, lang, fadeIn, scaleIn }: PortfolioSectionProps) {
  return (
    <motion.section
      id="portfolio"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-12"
    >
      <motion.h3 variants={scaleIn} className="text-2xl font-bold text-indigo-600 dark:text-gray-600">{t.portfolio.title}</motion.h3>
      <motion.p variants={fadeIn} className="mt-2 text-sm opacity-80">
        {lang === "pl"
          ? "Kilka najciekawszych projektów — krótki opis, rolę i efekt biznesowy."
          : "A handful of standout projects — short descriptions, role and business impact."}
      </motion.p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.portfolio.items.map((p: any, i: number) => (
          <motion.article
            key={p.name}
            whileHover={{ scale: 1.03 }}
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={isDark ? "p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 shadow" : "p-6 rounded-2xl bg-gradient-to-br from-indigo-50 via-pink-50 to-white border shadow-sm"}
          >
            <motion.h4 variants={scaleIn} className="font-semibold text-lg text-pink-600  dark:text-indigo-300">
              <Link href={`/portfolio/${p.slug}`}>{p.name}</Link>
            </motion.h4>
            <motion.p variants={fadeIn} className="mt-3 text-sm opacity-80">{p.desc}</motion.p>
            <motion.div variants={fadeIn} className="mt-4 flex items-center gap-3">
              <motion.span variants={scaleIn} className="text-xs px-2 py-1 rounded-full border bg-white dark:bg-gray-700">React</motion.span>
              <motion.span variants={scaleIn} className="text-xs px-2 py-1 rounded-full border bg-white dark:bg-gray-700">TS</motion.span>
              <motion.span variants={scaleIn} className="text-xs px-2 py-1 rounded-full border bg-white dark:bg-gray-700">Node</motion.span>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
