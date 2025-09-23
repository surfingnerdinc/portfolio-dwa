"use client";
import React, { useState, useEffect} from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../_components/Footer";
import { useParams } from "next/navigation";
import { projectsCopy, Lang } from "../../_data/projects";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function ProjectView() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : Array.isArray(params?.slug) ? params.slug[0] : "";
  const lang: Lang = (typeof window !== 'undefined' && localStorage.getItem('site-lang') === 'en') ? 'en' : 'pl';
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('site-theme') : null;
    if (savedTheme) setIsDark(savedTheme === 'dark');
  }, []);
  const project = projectsCopy[lang].find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold mb-4 text-pink-600">Projekt nie znaleziony</h2>
        <Link href="/portfolio" className="px-4 py-2 rounded-md bg-indigo-500 text-white font-semibold shadow">← Powrót do portfolio</Link>
      </div>
    );
  }

  return (
    <div className={
      isDark
        ? "min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-gray-100"
        : "min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-pink-50 to-white text-gray-900"
    }>
      <header className="max-w-6xl mx-auto w-full px-6 py-10 flex items-center justify-between">
        <Link href="/portfolio" className="font-bold text-lg text-indigo-600 dark:text-pink-400">← Portfolio</Link>
        <h1 className="text-2xl font-extrabold text-gray-100 dark:text-gray-600 ml-2">{project.name}</h1>
      </header>
      <main className="flex-1 max-w-3xl mx-auto px-6 py-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn}
          className={
            isDark
              ? "rounded-3xl shadow-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 backdrop-blur-lg border border-indigo-100 dark:border-gray-800 p-8"
              : "rounded-3xl shadow-2xl bg-gradient-to-br from-yellow-200 via-pink-100 to-indigo-100 backdrop-blur-lg border border-indigo-100 dark:border-gray-800 p-8"
          }
        >
          <div className="w-full h-64 mb-6 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <Image src={typeof project.image === 'string' ? project.image : project.image?.src} alt={project.name + ' screenshot'} width={600} height={400} className="object-cover w-full h-full" />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-indigo-700 dark:text-pink-300">{project.name}</h2>
          <p className="text-lg opacity-90 mb-4">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech: string, idx: number) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-gray-800 text-xs font-medium border border-indigo-200 dark:border-gray-700 text-indigo-700 dark:text-pink-300">{tech}</span>
            ))}
          </div>
          <div className="text-xs font-semibold text-pink-600 dark:text-indigo-300 mb-4">{project.award}</div>
          <ul className="mb-6 space-y-2">
            {project.details?.map((d: string, i: number) => (
              <li key={i} className="text-base opacity-85 leading-relaxed">{d}</li>
            ))}
          </ul>
          <div className="flex gap-4 mt-4">
            {project.links?.map((l: { label: string; url: string }, i: number) => (
              <Link key={i} href={l.url} target="_blank" rel="noopener" className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow hover:scale-105 transition">{l.label}</Link>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
