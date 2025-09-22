"use client";
import React from "react";
import { motion } from "framer-motion";

interface AboutSectionProps {
  t: any;
  isDark: boolean;
  lang: string;
  fadeIn: any;
  scaleIn: any;
  staggerContainer: any;
}

export default function AboutSection({ t, isDark, lang, fadeIn, scaleIn, staggerContainer }: AboutSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
    >
      <div className="md:col-span-2">
        <motion.h3 variants={scaleIn} className="text-2xl font-bold text-indigo-600 dark:text-gray-600">{t.about.title}</motion.h3>
        <motion.div className="space-y-4">
          {t.about.paragraphs.map((p: string, i: number) => (
            <div className="relative" key={i}>
              <div className={isDark ? "absolute w-full h-full -top-2 -left-2 rounded-lg bg-gray-800 shadow-xl opacity-70" : "absolute w-full h-full -top-2 -left-2 rounded-lg bg-purple-100 shadow-xl opacity-70"} aria-hidden="true" />
              <motion.p
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className={isDark ? "relative text-base opacity-90 leading-relaxed bg-gray-900/80 rounded-lg p-4 shadow-lg" : "relative text-base opacity-90 leading-relaxed bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-lg p-4 shadow"}
              >
                {p}
              </motion.p>
            </div>
          ))}
        </motion.div>
        <motion.div className="mt-8" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <h4 className="font-semibold text-indigo-600 dark:text-pink-400 mb-2">{lang === "pl" ? "Osiągnięcia i specjalizacje" : "Highlights & Specialties"}</h4>
          <ul className="flex flex-wrap gap-3">
            {t.about.highlights.map((item: string, i: number) => (
              <li key={i} className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-gray-800 text-sm font-medium border border-indigo-200 dark:border-gray-700 text-indigo-700 dark:text-pink-300 shadow">{item}</li>
            ))}
          </ul>
        </motion.div>
        {/* ...How I work section can be split further if needed... */}
        
      </div>
      {/* ...Aside section can be split further if needed... */}
    </motion.section>
  );
}
