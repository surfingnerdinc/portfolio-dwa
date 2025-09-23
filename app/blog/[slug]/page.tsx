"use client";
import React, { useState, useEffect} from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Footer from "@/app/_components/Footer";

import blogTexts from '../../_data/blogTexts';

const articles = blogTexts;

export default function BlogPostPage() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const savedTheme =
      typeof window !== "undefined" ? localStorage.getItem("site-theme") : null;
    if (savedTheme) setIsDark(savedTheme === "dark");
  }, []);

  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : Array.isArray(params?.slug) ? params.slug[0] : "";

  const article = articles[slug];
  if (!article) {
    notFound();
  }


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

  return (
    <div
      className={
        isDark
          ? "min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-gray-100 relative"
          : "min-h-screen flex flex-col bg-white text-gray-900 relative"
      }
    >
      {/* Floating Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed top-8 left-8 z-20"
      >
        <Link
          href="/"
          className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-lg border text-indigo-600 dark:text-pink-400 font-semibold hover:bg-indigo-50 dark:hover:bg-gray-700 transition"
        >
          ← Home
        </Link>
      </motion.div>

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="w-full max-w-2xl mx-auto"
        >
          {/* Title */}
          <motion.h1
            variants={scaleIn}
            className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 dark:from-pink-400 dark:via-indigo-400 dark:to-yellow-300"
          >
            {article.title}
          </motion.h1>

          {/* Card Wrapper for Content */}
          <motion.div
            variants={fadeIn}
            className={
              isDark
                ? "rounded-3xl shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-indigo-100 dark:border-gray-800 p-8 text-gray-100"
                : "rounded-3xl shadow-2xl bg-white border border-indigo-100 p-8 text-gray-900"
            }
          >
            <div className="space-y-8 :">{article.content}</div>
          </motion.div>

          {/* Decorative Animated Gradient Bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.7 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 h-2 w-2/3 mx-auto rounded-full bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 dark:from-pink-500 dark:via-indigo-500 dark:to-yellow-400"
          />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
