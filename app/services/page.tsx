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


type Lang = 'pl' | 'en';

const servicesCopy: Record<Lang, Array<{ icon: string; title: string; desc: string }>> = {
  pl: [
    {
      icon: "💻",
      title: "Aplikacje webowe",
      desc: "Nowoczesne, skalowalne aplikacje webowe w React, Next.js i Node.js. Responsywność, szybkość i bezpieczeństwo.",
    },
    {
      icon: "🖥️",
      title: "Aplikacje desktopowe",
      desc: "Wieloplatformowe rozwiązania desktopowe z Electron i Tauri. Integracja i natywne doświadczenie.",
    },
    {
      icon: "🎨",
      title: "Projektowanie UI/UX",
      desc: "Projektowanie zorientowane na użytkownika, prototypowanie i testy użyteczności dla świetnych doświadczeń cyfrowych.",
    },
    {
      icon: "⚡",
      title: "API i Backend",
      desc: "Solidne REST i GraphQL API, skalowalne wdrożenia w chmurze i bezpieczne zarządzanie danymi.",
    },
    {
      icon: "🔒",
      title: "Audyt bezpieczeństwa",
      desc: "Kompleksowe przeglądy bezpieczeństwa aplikacji, skanowanie podatności i wdrożenie dobrych praktyk.",
    },
    {
      icon: "🚀",
      title: "DevOps i CI/CD",
      desc: "Automatyczne wdrożenia, infrastruktura chmurowa i ciągła integracja dla szybkiego rozwoju.",
    },
  ],
  en: [
    {
      icon: "💻",
      title: "Web Development",
      desc: "Modern, scalable web apps using React, Next.js, and Node.js. Responsive, fast, and secure.",
    },
    {
      icon: "🖥️",
      title: "Desktop Apps",
      desc: "Cross-platform desktop solutions with Electron and Tauri. Seamless integration and native feel.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "User-centered design, prototyping, and usability testing for delightful digital experiences.",
    },
    {
      icon: "⚡",
      title: "API & Backend",
      desc: "Robust REST & GraphQL APIs, scalable cloud deployments, and secure data management.",
    },
    {
      icon: "🔒",
      title: "Security Audits",
      desc: "Comprehensive app security reviews, vulnerability scanning, and best practice implementation.",
    },
    {
      icon: "🚀",
      title: "DevOps & CI/CD",
      desc: "Automated deployments, cloud infrastructure, and continuous integration for rapid delivery.",
    },
  ],
};

export default function ServicesPage() {
  const [lang, setLang] = React.useState<Lang>('pl');
  React.useEffect(() => {
    const savedLang = (typeof window !== 'undefined' && localStorage.getItem('site-lang')) as Lang | null;
    if (savedLang === 'pl' || savedLang === 'en') setLang(savedLang);
  }, []);
  const services = servicesCopy[lang];
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      <header className="max-w-4xl mx-auto px-6 py-10 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-indigo-600 dark:text-pink-400">← Home</Link>
        <h1 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">{lang === 'pl' ? 'Usługi' : 'Services'}</h1>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-8">
        <motion.section
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid gap-8 sm:grid-cols-2"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(99,102,241,0.15)" }}
              className="rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-indigo-100 dark:border-gray-800 shadow-lg p-6 flex flex-col items-start transition-all duration-200"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-pink-300">{s.title}</h2>
              <p className="text-base opacity-80 mb-4">{s.desc}</p>
            </motion.div>
          ))}
        </motion.section>
      </main>
      <footer className="mt-20 py-8 border-t border-indigo-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-sm opacity-70 flex items-center justify-between">
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