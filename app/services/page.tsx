"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../_components/Footer";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
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
      desc: "Nowoczesne, skalowalne aplikacje webowe w Javie, Next.js, React i bazach danych. Responsywność, szybkość i bezpieczeństwo.",
    },
    {
      icon: "🖥️",
      title: "Aplikacje desktopowe",
      desc: "Wieloplatformowe rozwiązania desktopowe. Integracja i natywne doświadczenie.",
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
      desc: "Modern, scalable web apps using Java, Next.js, React and databases. Responsive, fast, and secure.",
    },
    {
      icon: "🖥️",
      title: "Desktop Apps",
      desc: "Cross-platform desktop solutions. Seamless integration and native feel.",
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
  const [isDark, setIsDark] = React.useState(true);
  React.useEffect(() => {
    const savedLang = (typeof window !== 'undefined' && localStorage.getItem('site-lang')) as Lang | null;
    if (savedLang === 'pl' || savedLang === 'en') setLang(savedLang);
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('site-theme') : null;
    if (savedTheme) setIsDark(savedTheme === 'dark');
  }, []);
  const services = servicesCopy[lang];
  return (
    <div className={
      isDark
        ? "min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-gray-100"
        : "min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-pink-50 to-white text-gray-900"
    }>
      <header className="max-w-6xl mx-auto w-full px-6 py-10 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-indigo-600 dark:text-pink-400">{lang === 'pl' ? '← Strona główna' : '← Home'}</Link>
        <h1 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">{lang === 'pl' ? 'Usługi' : 'Services'}</h1>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-8 flex-1">
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
                  className={
                    isDark
                      ? "rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-indigo-100 dark:border-gray-800 shadow-lg p-6 flex flex-col items-start transition-all duration-200"
                      : "rounded-2xl bg-gradient-to-br from-yellow-200 via-pink-100 to-indigo-100 border border-indigo-100 dark:border-gray-800 shadow-lg p-6 flex flex-col items-start transition-all duration-200"
                  }
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-pink-300">{s.title}</h2>
              <p className="text-base opacity-80 mb-4">{s.desc}</p>
            </motion.div>
          ))}
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}