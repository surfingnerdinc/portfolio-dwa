"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlogSectionProps {
  t: any;
  isDark: boolean;
  fadeIn: any;
  scaleIn: any;
  staggerContainer: any;
}

export default function BlogSection({ t, isDark, fadeIn, scaleIn, staggerContainer }: BlogSectionProps) {
  return (
    <motion.section
      id="blog"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-16"
    >
      <motion.h3 variants={scaleIn} className="text-2xl font-bold text-pink-600 dark:text-gray-600">{t.blog.title}</motion.h3>
      <div className="mt-6 grid sm:grid-cols-3 gap-6">
        {t.blog.posts.map((post: any, i: number) => (
          <motion.article
            key={i}
            variants={fadeIn}
            whileHover={{ y: -4, scale: 1.02 }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={isDark ? "p-6 rounded-xl bg-gray-800 text-gray-100" : "p-6 rounded-xl bg-gradient-to-br from-indigo-50 via-pink-50 to-yellow-50 text-gray-900 shadow"}
          >
            <motion.h4 variants={scaleIn} className="font-semibold text-indigo-700 dark:text-indigo-300">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </motion.h4>
            <motion.p variants={fadeIn} className="mt-3 text-sm opacity-80">{post.excerpt}</motion.p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
