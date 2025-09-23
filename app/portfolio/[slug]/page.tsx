"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../../_components/Footer";
import { useParams } from "next/navigation";

type Lang = "pl" | "en";

const projectsCopy: Record<Lang, Array<any>> = {
  pl: [
    {
      slug: "analytics-dashboard",
      name: "Panel analityczny",
      desc: "Dashboard z wizualizacjami, eksportem danych i alertami w czasie rzeczywistym. Zbudowany w React, D3 i Node.js.",
      image: "https://via.placeholder.com/800x400?text=Figma+Screenshot",
      stack: ["React", "D3", "Node.js"],
      award: "Najlepszy produkt danych 2024",
      details: [
        "Rola: Lead Developer",
        "Efekt biznesowy: Usprawnione decyzje dla 1000+ użytkowników.",
        "Funkcje: Własne wykresy, eksport do Excel/PDF, powiadomienia w czasie rzeczywistym."
      ],
      links: [
        { label: "Demo", url: "#" },
        { label: "GitHub", url: "#" },
        { label: "Case Study", url: "#" }
      ]
    },
    {
      slug: "sales-app",
      name: "Aplikacja sprzedażowa",
      desc: "Sklep z zaawansowaną logiką koszyka, integracjami płatności i analizą. Zbudowany w Next.js, Stripe i MongoDB.",
      image: "https://via.placeholder.com/800x400?text=Figma+Screenshot",
      stack: ["Next.js", "Stripe", "MongoDB"],
      award: "Finalista innowacji e-commerce",
      details: [
        "Rola: Fullstack Developer",
        "Efekt biznesowy: Wzrost konwersji o 20%.",
        "Funkcje: Integracje płatności, analityka sprzedaży, zarządzanie koszykiem."
      ],
      links: [
        { label: "Demo", url: "#" },
        { label: "GitHub", url: "#" }
      ]
    },
    {
      slug: "desktop-tool",
      name: "Narzędzie desktopowe",
      desc: "Aplikacja Electron do zarządzania raportami i synchronizacji lokalnej. Zbudowana w Electron, React i SQLite.",
      image: "https://via.placeholder.com/800x400?text=Figma+Screenshot",
      stack: ["Electron", "React", "SQLite"],
      award: "Nagroda użytkowników",
      details: [
        "Rola: Developer",
        "Efekt biznesowy: Automatyzacja raportowania.",
        "Funkcje: Synchronizacja offline, generowanie raportów."
      ],
      links: [
        { label: "Demo", url: "#" }
      ]
    },
    {
      slug: "studyontrack",
      name: "StudyOnTrack",
      desc: "Platforma do zarządzania nauką i śledzenia postępów. Pozwala użytkownikom planować zadania, monitorować cele i analizować wyniki. Zbudowana w React, Firebase i Tailwind CSS. Dostępna online.",
      image: "https://via.placeholder.com/800x400?text=StudyOnTrack+Screenshot",
      stack: ["React", "Firebase", "Tailwind CSS"],
      award: "Projekt edukacyjny 2025",
      details: [
        "Rola: Twórca produktu",
        "Efekt biznesowy: Ułatwienie nauki i organizacji dla studentów.",
        "Funkcje: Planowanie zadań, śledzenie celów, analiza postępów."
      ],
      links: [
        { label: "Live", url: "https://studyontrack.netlify.app" }
      ]
    },
  ],
  en: [
    {
      slug: "analytics-dashboard",
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
    },
    {
      slug: "sales-app",
      name: "Sales Application",
      desc: "Store with advanced cart logic, payment integrations, and analytics. Built with Next.js, Stripe, and MongoDB.",
      image: "https://via.placeholder.com/800x400?text=Figma+Screenshot",
      stack: ["Next.js", "Stripe", "MongoDB"],
      award: "E-commerce Innovation Finalist",
      details: [
        "Role: Fullstack Developer",
        "Business impact: Increased conversion by 20%.",
        "Features: Payment integrations, sales analytics, cart management."
      ],
      links: [
        { label: "Live Demo", url: "#" },
        { label: "GitHub", url: "#" }
      ]
    },
    {
      slug: "desktop-tool",
      name: "Desktop Tool",
      desc: "Electron app for report management and local synchronization. Built with Electron, React, and SQLite.",
      image: "https://via.placeholder.com/800x400?text=Figma+Screenshot",
      stack: ["Electron", "React", "SQLite"],
      award: "User Choice Award",
      details: [
        "Role: Developer",
        "Business impact: Automated reporting.",
        "Features: Offline sync, report generation."
      ],
      links: [
        { label: "Live Demo", url: "#" }
      ]
    },
    {
      slug: "studyontrack",
      name: "StudyOnTrack",
      desc: "A platform for learning management and progress tracking. Users can plan tasks, monitor goals, and analyze results. Built with React, Firebase, and Tailwind CSS. Available online.",
      image: "https://via.placeholder.com/800x400?text=StudyOnTrack+Screenshot",
      stack: ["React", "Firebase", "Tailwind CSS"],
      award: "Educational Project 2025",
      details: [
        "Role: Product Creator",
        "Business impact: Easier learning and organization for students.",
        "Features: Task planning, goal tracking, progress analytics."
      ],
      links: [
        { label: "Live", url: "https://studyontrack.netlify.app" }
      ]
    },
  ],
};

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};


export default function ProjectView() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : Array.isArray(params?.slug) ? params.slug[0] : "";
  const lang: Lang = "pl";
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-600">
      <header className="max-w-6xl mx-auto w-full px-6 py-10 flex items-center justify-between">
        <Link href="/portfolio" className="font-bold text-lg text-indigo-600 dark:text-pink-400">← Portfolio</Link>
        <h1 className="text-2xl font-extrabold text-gray-100 dark:text-gray-600 ml-2">{project.name}</h1>
      </header>
      <main className="flex-1 max-w-3xl mx-auto px-6 py-8">
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
            {project.stack.map((tech: string, idx: number) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-gray-800 text-xs font-medium border border-indigo-200 dark:border-gray-700 text-indigo-700 dark:text-pink-300">{tech}</span>
            ))}
          </div>
          <div className="text-xs font-semibold text-pink-600 dark:text-indigo-300 mb-4">{project.award}</div>
          <ul className="mb-6 space-y-2">
            {project.details.map((d: string, i: number) => (
              <li key={i} className="text-base opacity-85 leading-relaxed">{d}</li>
            ))}
          </ul>
          <div className="flex gap-4 mt-4">
            {project.links.map((l: { label: string; url: string }, i: number) => (
              <Link key={i} href={l.url} target="_blank" rel="noopener" className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow hover:scale-105 transition">{l.label}</Link>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
