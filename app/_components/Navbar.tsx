"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavbarProps {
  lang: "pl" | "en";
  setLang: (l: "pl" | "en") => void;
  isDark: boolean;
  setIsDark: (d: boolean) => void;
  t: any;
}

export default function Navbar({ lang, setLang, isDark, setIsDark, t }: NavbarProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navLinks = [
    { url: "/", title: t.nav.home, lang: lang },
    { url: "/portfolio", title: t.nav.portfolio },
    { url: "/services", title: t.nav.uslugi ?? t.nav.services },
    { url: "#contact", title: t.nav.kontakt ?? t.nav.contact },
    { url: "#blog", title: t.nav.blog },
  ];

  // Persist language selection in localStorage
  const handleLangChange = (newLang: "pl" | "en") => {
    setLang(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", newLang);
    }
  };

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: isDark ? "#fff" : "#111" },
  };
  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: isDark ? "#fff" : "#111" },
  };
  const listVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };
  const listItemVariants = {
    closed: { opacity: 0, x: -10 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between relative">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex items-center gap-4"
      >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg bg-gradient-to-br from-indigo-500 to-pink-500 shadow-lg">
          SN
        </div>
        <div>
          <h1 className="text-lg font-semibold">SurfingNerd.inc</h1>
          <p className="text-xs opacity-70">Web & Desktop</p>
        </div>
      </motion.div>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link key={link.title} href={link.url} className="hover:border-b-2 hover:border-indigo-600 px-2 py-1">
            {link.title}
          </Link>
        ))}
        <div className="flex items-center gap-2 ml-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsDark(!isDark)}
            className="px-3 py-2 rounded-md border text-sm"
          >
            {isDark ? "🌙" : "☀️"}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handleLangChange(lang === "pl" ? "en" : "pl")}
            className="px-3 py-2 rounded-md border text-sm"
          >
            {lang === "pl" ? "PL" : "EN"}
          </motion.button>
        </div>
      </nav>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden flex items-center">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <motion.div
            variants={topVariants}
            animate={menuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-indigo-600 dark:bg-pink-400 rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={menuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-indigo-600 dark:bg-pink-400 rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={menuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-indigo-600 dark:bg-pink-400 rounded origin-left"
          ></motion.div>
        </button>
        {/* Animated mobile nav */}
        {menuOpen && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-br from-indigo-600 via-pink-600 to-gray-900 text-white flex flex-col items-center justify-center text-2xl font-semibold gap-8 z-40"
          >
            {navLinks.map((link) => (
              <motion.div key={link.title} variants={listItemVariants}>
                <Link href={link.url} className="hover:text-pink-300" onClick={() => setMenuOpen(false)}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
            <div className="flex gap-4 mt-8">
              <motion.button whileTap={{ scale: 0.9 }} onClick={() => setIsDark(!isDark)} className="px-3 py-2 rounded-md border text-sm">
                {isDark ? "🌙" : "☀️"}
              </motion.button>
              <motion.button whileTap={{ scale: 0.9 }} onClick={() => handleLangChange(lang === "pl" ? "en" : "pl")} className="px-3 py-2 rounded-md border text-sm">
                {lang === "pl" ? "PL" : "EN"}
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
