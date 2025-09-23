"use client";
import React from 'react';
import Link from 'next/link';
import Footer from './_components/Footer';


type Lang = "pl" | "en";

const copy: Record<Lang, { title: string; subtitle: string; desc: string; back: string }> = {
  pl: {
    title: "Nie znaleziono strony",
    subtitle: "Wybrana strona nie istnieje lub została usunięta.",
    desc: "Powrót do strony głównej",
    back: "← Powrót do strony głównej"
  },
  en: {
    title: "Page not found",
    subtitle: "The page you are looking for does not exist or has been removed.",
    desc: "Back to homepage",
    back: "← Back to homepage"
  }
};

interface NotFoundProps {
  lang?: Lang;
}

const NotFound = ({ lang = "pl" }: NotFoundProps) => {
  const t = copy[lang];
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-xl mx-auto rounded-3xl shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-indigo-100 dark:border-gray-800 p-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6 text-pink-600 dark:text-indigo-400">404</h1>
          <h2 className="text-2xl font-bold mb-4">{t.title}</h2>
          <p className="mb-8 text-lg opacity-80">{t.subtitle}</p>
          <Link href="/" className="px-6 py-3 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow hover:scale-105 transition">{t.back}</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;