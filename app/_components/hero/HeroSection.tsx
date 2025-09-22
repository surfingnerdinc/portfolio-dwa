"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface HeroProps {
  t: any;
  isDark: boolean;
}

export default function HeroSection({ t, isDark }: HeroProps) {
  return (
    <motion.section
      variants={{}}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid md:grid-cols-2 gap-8 items-center py-8"
    >
      <motion.div>
        <motion.h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-indigo-600 dark:text-gray-600">
          {t.hero.title}
        </motion.h2>
        <motion.p className="mt-4 text-lg opacity-80">
          {t.hero.subtitle}
        </motion.p>
        <motion.div className="mt-6 flex gap-4 flex-wrap">
          <motion.div><Link href="#portfolio" className="px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700">{t.hero.cta1}</Link></motion.div>
          <motion.div><Link href={`mailto:${t.contact.email}`} className="px-6 py-3 rounded-md border font-semibold hover:bg-indigo-50 dark:hover:bg-gray-800">{t.hero.cta2}</Link></motion.div>
        </motion.div>
      </motion.div>
      <motion.div className={isDark ? "rounded-xl overflow-hidden shadow-xl p-6 bg-gradient-to-br from-gray-800 to-gray-900" : "rounded-xl overflow-hidden shadow-xl p-6 bg-gradient-to-br from-yellow-200 via-pink-200 to-indigo-200"}>
        <motion.div animate={{ rotate: [0, 1, -1, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="h-64 w-full flex items-center justify-center">
          <div className="text-center">
            <motion.h3 className="text-xl font-bold">{t.hero.title}</motion.h3>
            <motion.p className="mt-2 text-sm opacity-80 max-w-xs mx-auto">{t.hero.subtitle}</motion.p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
