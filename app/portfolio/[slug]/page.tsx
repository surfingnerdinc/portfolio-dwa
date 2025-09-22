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

// Example project data (replace with real data or fetch by slug)
const project = {
  name: "Analytics Dashboard",
  desc: "Dashboard with visualizations, data export, and real-time alerts. Built with React, D3, and Node.js.",
  image: "https://via.placeholder.com/800x400?text=Figma+Screenshot",
  stack: ["React", "D3", "Node.js"],
  award: "Best Data Product 2024",
  details: [
    "Role: Lead Developer",
    "Business impact: Improved data-driven decisions for 1000+ users.",
    "Features: Custom charts, export to Excel/PDF, real-time notifications."
  ],
  links: [
    { label: "Live Demo", url: "#" },
    { label: "GitHub", url: "#" },
    { label: "Case Study", url: "#" }
  ]
};

export default function ProjectView() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
       <header className="max-w-4xl mx-auto px-6 py-10 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-indigo-600 dark:text-pink-400">← Home</Link>
          <h1 className="text-2xl font-extrabold text-gray-100 dark:text-gray-100">Portfolio</h1>
        
      </header>
      <main className="max-w-3xl mx-auto px-6 py-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn}
          className="rounded-3xl shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-indigo-100 dark:border-gray-800 p-8"
        >
          <div className="w-full h-64 mb-6 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <img src={project.image} alt={project.name + ' screenshot'} className="object-cover w-full h-full" />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-indigo-700 dark:text-pink-300">{project.name}</h2>
          <p className="text-lg opacity-90 mb-4">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-gray-800 text-xs font-medium border border-indigo-200 dark:border-gray-700 text-indigo-700 dark:text-pink-300">{tech}</span>
            ))}
          </div>
          <div className="text-xs font-semibold text-pink-600 dark:text-indigo-300 mb-4">{project.award}</div>
          <ul className="mb-6 space-y-2">
            {project.details.map((d, i) => (
              <li key={i} className="text-base opacity-85 leading-relaxed">{d}</li>
            ))}
          </ul>
          <div className="flex gap-4 mt-4">
            {project.links.map((l, i) => (
              <Link key={i} href={l.url} className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow hover:scale-105 transition">{l.label}</Link>
            ))}
          </div>
        </motion.div>
      </main>
      <footer className="mt-20 py-8 border-t border-indigo-100 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-6 text-sm opacity-70 flex items-center justify-between">
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
