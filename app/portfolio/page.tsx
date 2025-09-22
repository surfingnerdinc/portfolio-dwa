"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const projects = [
  {
    slug: "analytics-dashboard",
    name: "Analytics Dashboard",
    desc: "Dashboard with visualizations, data export, and real-time alerts. Built with React, D3, and Node.js.",
    image: "https://via.placeholder.com/400x220?text=Figma+Screenshot",
    stack: ["React", "D3", "Node.js"],
    award: "Best Data Product 2024",
  },
  {
    slug: "sales-app",
    name: "Sales Application",
    desc: "Store with advanced cart logic, payment integrations, and analytics. Built with Next.js, Stripe, and MongoDB.",
    image: "https://via.placeholder.com/400x220?text=Figma+Screenshot",
    stack: ["Next.js", "Stripe", "MongoDB"],
    award: "E-commerce Innovation Finalist",
  },
  {
    slug: "desktop-tool",
    name: "Desktop Tool",
    desc: "Electron app for report management and local synchronization. Built with Electron, React, and SQLite.",
    image: "https://via.placeholder.com/400x220?text=Figma+Screenshot",
    stack: ["Electron", "React", "SQLite"],
    award: "User Choice Award",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      <header className="max-w-6xl mx-auto w-full px-6 py-10 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg text-indigo-600 dark:text-pink-400"
        >
          ← Home
        </Link>
        <h1 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">
          Portfolio
        </h1>
      </header>
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-8">
        <motion.section
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px rgba(99,102,241,0.15)",
              }}
              className="rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-indigo-100 dark:border-gray-800 shadow-lg p-0 flex flex-col transition-all duration-200 overflow-hidden"
            >
              <div className="w-full h-44 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <img
                  src={p.image}
                  alt={p.name + " screenshot"}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold mb-2 text-indigo-700 dark:text-pink-300">
                  {p.name}
                </h2>
                <p className="text-base opacity-80 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {p.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-full bg-indigo-50 dark:bg-gray-800 text-xs font-medium border border-indigo-200 dark:border-gray-700 text-indigo-700 dark:text-pink-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-xs font-semibold text-pink-600 dark:text-indigo-300 mb-2">
                  {p.award}
                </div>
                <Link
                  href={`/portfolio/${p.slug}`}
                  className="mt-auto inline-block px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow hover:scale-105 transition"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.section>
      </main>
      <footer className="py-8 border-t border-indigo-100 dark:border-gray-800 w-full">
        <div className="max-w-6xl mx-auto px-6 text-sm opacity-70 flex items-center justify-between w-full">
          <div>© {new Date().getFullYear()} - Full‑Stack Dev</div>
          <div className="flex items-center gap-4">
            <Link href="#">GitHub</Link>
            <Link href="#">LinkedIn</Link>
            <Link href="#">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
