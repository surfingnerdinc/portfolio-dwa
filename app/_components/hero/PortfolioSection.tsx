"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import TextInterface from "@/app/_data/TextInterface";
import ProjectInterface from "@/app/_data/ProjectInterface";

interface PortfolioSectionProps {
  t: TextInterface;
  isDark: boolean;
  lang: string;
  fadeIn: Variants;
  scaleIn: Variants;
  projects: ProjectInterface[];
}

interface ProjectItem {
  name: string;
  desc: string;
  tech: string;
  slug: string;
}

export default function PortfolioSection({
  t,
  isDark,
  lang,
  fadeIn,
  scaleIn,
}: PortfolioSectionProps) {
  return (
    <motion.section
      id="portfolio"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-12"
    >
      <motion.h3
        variants={scaleIn}
        className="text-2xl font-bold text-indigo-600 dark:text-gray-600"
      >
        {t.portfolio.title}
      </motion.h3>
      <motion.p variants={fadeIn} className="mt-2 text-sm opacity-80">
        {lang === "pl"
          ? "Kilka najciekawszych projektów — krótki opis, rolę i efekt biznesowy."
          : "A handful of standout projects — short descriptions, role and business impact."}
      </motion.p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.portfolio.items.map((p: ProjectItem) => (
          <motion.article
            key={p.name}
            whileHover={{ scale: 1.03 }}
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={
              isDark
                ? "p-6 rounded-2xl bg-gradient-to-br from-gray-00/60 to-gray-900/60 shadow"
                : "p-6 rounded-2xl bg-gradient-to-br from-indigo-50 via-pink-50 to-white border shadow-sm"
            }
          >
            <motion.h4
              variants={scaleIn}
              className="font-semibold text-lg text-pink-600  dark:text-indigo-300"
            >
              <Link href={`/portfolio/${p.slug}`}>{p.name}</Link>
            </motion.h4>
            <motion.p variants={fadeIn} className="mt-3 text-sm opacity-80">
              {p.desc}
            </motion.p>
            <motion.p variants={fadeIn} className="mt-1 text-xs opacity-60">
              {p.tech}
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="mt-4 flex items-center gap-3"
            >
              {p.tech.split(", ").map((tech: string) => (
                <motion.span
                  key={tech}
                  variants={scaleIn}
                  className={
                    isDark
                      ? "text-xs px-2 py-1 rounded-full border bg-white dark:bg-gray-700"
                      : "text-xs px-2 py-1 rounded-full border bg-white "
                  }
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
