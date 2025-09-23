"use client";
import React, { JSX, useEffect, useState } from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Link from "next/link";
import BlogSection from "./_components/hero/BlogSection";
import PortfolioSection from "./_components/hero/PortfolioSection";
import ContactSection from "./_components/hero/ContactSection";
import { projectsCopy } from "./_data/projects";
import copy from "./_data/texts";
import BrowserFrame from "./_components/BrowserFrame";

type Lang = "pl" | "en";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function Page(): JSX.Element {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("site-lang") as Lang;
      return savedLang === "en" ? "en" : "pl";
    }
    return "pl";
  });
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("site-theme");
      return savedTheme ? savedTheme === "dark" : true;
    }
    return true;
  });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedLang = (localStorage.getItem("site-lang") as Lang) || undefined;
    if (savedLang) setLang(savedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem("site-lang", lang);
  }, [lang]);
  useEffect(() => {
    localStorage.setItem("site-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const t = copy[lang];
  const projects = projectsCopy[lang];

  const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_allmsjo",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_u67n7zz",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID || "RY59_wZHEZmnNfjwR"
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      setError("Sending failed. Try again later.");
    }
    setSending(false);
  };

  return (
    <div
      className={
        isDark
          ? "min-h-screen bg-gray-900 text-gray-100"
          : "min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 text-gray-900"
      }
    >
      <Navbar
        lang={lang}
        setLang={setLang}
        isDark={isDark}
        setIsDark={setIsDark}
        t={t}
      />

      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* Hero */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-8 items-center py-8"
        >
          <motion.div variants={fadeUp}>
            <motion.h2
              variants={scaleIn}
              className="text-3xl md:text-4xl font-extrabold leading-tight text-indigo-600 dark:text-gray-600"
            >
              {t.hero.title}
            </motion.h2>
            <motion.p variants={fadeIn} className="mt-4 text-lg opacity-80">
              {t.hero.subtitle}
            </motion.p>
            <motion.div variants={fadeIn} className="mt-6 flex gap-4 flex-wrap">
              <motion.div variants={scaleIn}>
                <Link
                  href="#portfolio"
                  className="px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700"
                >
                  {t.hero.cta1}
                </Link>
              </motion.div>
              <motion.div variants={scaleIn}>
                <Link
                  href={`mailto:${t.contact.email}`}
                  className="px-6 py-3 rounded-md border font-semibold hover:bg-indigo-50 dark:hover:bg-gray-800"
                >
                  {t.hero.cta2}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            className={
              isDark
                ? "overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-gray-600/60 to-gray-900/60 shadow"
                : "rounded-xl overflow-hidden shadow-xl p-6 bg-gradient-to-br from-yellow-200 via-pink-200 to-indigo-200"
            }
          >
            <BrowserFrame isDark={isDark}>
              <motion.div
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="h-64 w-full flex items-center justify-center"
              >
                <div className="text-center">
                  <motion.h3 variants={fadeIn} className="text-xl font-bold">
                    {t.hero.browserFrame.title}
                  </motion.h3>
                  <motion.p
                    variants={fadeIn}
                    className="mt-2 text-sm opacity-80 max-w-xs mx-auto"
                  >
                    {t.hero.browserFrame.desc}
                  </motion.p>
                </div>
              </motion.div>
            </BrowserFrame>
          </motion.div>
        </motion.section>

        {/* Blog */}

        <BlogSection
          t={t}
          isDark={isDark}
          fadeIn={fadeIn}
          scaleIn={scaleIn}
          staggerContainer={staggerContainer}
        />

        {/* Portfolio */}
        <PortfolioSection
          t={t}
          isDark={isDark}
          lang={lang}
          fadeIn={fadeIn}
          scaleIn={scaleIn}
          projects={projects}
        />

        {/* About */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          <div className="md:col-span-2">
            <motion.h3
              variants={scaleIn}
              className="text-2xl font-bold text-indigo-600 dark:text-gray-600"
            >
              {t.about.title}
            </motion.h3>
            <motion.div className="space-y-4">
              {t.about.paragraphs.map((p: string, i: number) => (
                <div className="relative" key={i}>
                  <motion.p
                    key={i}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className={
                      isDark
                        ? "relative text-base opacity-90 leading-relaxed rounded-2xl bg-gradient-to-br from-gray-600/60 to-gray-900/60 shadow p-4"
                        : "relative text-base opacity-90 leading-relaxed bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-lg p-4 shadow"
                    }
                  >
                    {p}
                  </motion.p>
                </div>
              ))}
            </motion.div>
            {/* Highlights List */}
            <motion.div
              className="mt-8"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h4 className="font-semibold text-indigo-600 dark:text-pink-400 mb-2">
                {lang === "pl"
                  ? "Osiągnięcia i specjalizacje"
                  : "Highlights & Specialties"}
              </h4>
              <ul className="flex flex-wrap gap-3">
                {t.about.highlights.map((item: string, i: number) => (
                  <li
                    key={i}
                    className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-gray-800 text-sm font-medium border border-indigo-200 dark:border-gray-500 text-indigo-700 dark:text-pink-300 shadow"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="mt-6 relative"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Offset gradient rectangle behind for modern look */}
              <div
                className={
                  isDark
                    ? "absolute w-full h-full -top-3 -left-3 rounded-xl bg-gradient-to-br from-indigo-900 via-gray-900 to-pink-900 opacity-60 blur-sm shadow-2xl"
                    : "absolute w-full h-full -top-3 -left-3 rounded-xl bg-gradient-to-br from-indigo-200 via-pink-100 to-purple-100 opacity-70 blur-sm shadow-2xl"
                }
                aria-hidden="true"
              />
              <div
                className={
                  isDark
                    ? "relative p-6 rounded-xl bg-gray-900/80 backdrop-blur-md shadow-xl border border-indigo-800"
                    : "relative p-6 rounded-xl bg-white/70 backdrop-blur-md shadow-xl border border-indigo-200"
                }
              >
                <motion.h4
                  variants={scaleIn}
                  className="font-semibold text-pink-600 dark:text-indigo-300"
                >
                  {lang === "pl" ? "Jak pracuję" : "How I work"}
                </motion.h4>
                <motion.ul
                  variants={staggerContainer}
                  className="mt-3 list-disc list-inside text-sm opacity-85"
                >
                  <motion.li variants={fadeIn}>
                    {lang === "pl"
                      ? "Szybkie prototypy i walidacja pomysłu"
                      : "Rapid prototyping and idea validation"}
                  </motion.li>
                  <motion.li variants={fadeIn}>
                    {lang === "pl"
                      ? "Regularne review i demonstracje"
                      : "Regular reviews & demos"}
                  </motion.li>
                  <motion.li variants={fadeIn}>
                    {lang === "pl"
                      ? "Skupienie na jakości i utrzymywalności"
                      : "Focus on quality and maintainability"}
                  </motion.li>
                </motion.ul>
              </div>
            </motion.div>
          </div>

          <motion.aside
            className={
              isDark
                ? "p-6 rounded-xl bg-gray-800/60"
                : "p-6 rounded-xl bg-gradient-to-br from-yellow-50 via-indigo-50 to-pink-50"
            }
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h4
              variants={scaleIn}
              className="font-semibold text-indigo-700 dark:text-gray-600"
            >
              {lang === "pl" ? "Szybkie fakty" : "Quick facts"}
            </motion.h4>
            <motion.ul
              variants={staggerContainer}
              className="mt-3 text-sm opacity-80 space-y-2"
            >
              <motion.li variants={fadeIn}>
                5+ {lang === "pl" ? "lat doświadczenia" : "years experience"}
              </motion.li>
              <motion.li variants={fadeIn}>
                {lang === "pl"
                  ? "Wdrażam produkcyjnie"
                  : "Production deployments"}
              </motion.li>
              <motion.li variants={fadeIn}>
                Code reviews • Architektura • DevOps
              </motion.li>
            </motion.ul>

            <motion.div variants={scaleIn} className="mt-6">
              <a
                href={`mailto:${t.contact.email}`}
                className="inline-block w-full text-center px-4 py-3 rounded-md font-semibold bg-gradient-to-r from-pink-500 to-indigo-500 text-white"
              >
                {t.contact.title}
              </a>
            </motion.div>
          </motion.aside>
        </motion.section>

        {/* Contact */}
        <ContactSection
          t={t}
          isDark={isDark}
          fadeIn={fadeIn}
          scaleIn={scaleIn}
          handleSubmit={sendMail}
          form={form}
          setForm={setForm}
          sending={sending}
          sent={sent}
          error={error}
          lang={lang}
          staggerContainer={staggerContainer}
        />
      </main>
      <Footer />
    </div>
  );
}
