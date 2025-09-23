"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import TextInterface from "@/app/_data/TextInterface";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactSectionProps {
  t: TextInterface;
  isDark: boolean;
  lang: string;
  form: FormData;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
  sending: boolean;
  sent: boolean;
  error: string | null;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  fadeIn: Variants;
  scaleIn: Variants;
  staggerContainer: Variants;
}

export default function ContactSection({ t, isDark, lang, form, setForm, sending, sent, error, handleSubmit, fadeIn, scaleIn, staggerContainer }: ContactSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-16 flex justify-center items-center"
      id="contact"
    >
      <motion.div
        variants={scaleIn}
        className={
          isDark
            ? "w-full bg-gradient-to-br from-gray-900/80 via-indigo-900/80 to-gray-800/80 rounded-3xl shadow-2xl p-10 border border-indigo-700 backdrop-blur-lg backdrop-saturate-150"
            : "w-full  bg-white/80 rounded-3xl shadow-2xl p-10 border border-indigo-200 backdrop-blur-lg backdrop-saturate-150"
        }
        whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(99,102,241,0.15)" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.h3 variants={scaleIn} className="text-3xl font-bold text-indigo-600 dark:text-gray-600 mb-2 text-center drop-shadow-lg">
          {t.contact.title}
        </motion.h3>
        <motion.p variants={fadeIn} className="mb-6 text-sm opacity-80 text-center">
          {t.contact.desc} <a className="underline text-pink-600" href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
        </motion.p>
        <motion.form
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <motion.input
            variants={fadeIn}
            className="p-3 rounded-xl border border-indigo-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none bg-white/60 dark:bg-gray-300/60 shadow-sm transition-all duration-200"
            placeholder={lang === "pl" ? "Twoje imię" : "Your name"}
            value={form.name}
            onChange={e => setForm((f: FormData ) => ({ ...f, name: e.target.value }))}
            required
            id="name"
            name="name"
          />
          <motion.input
            variants={fadeIn}
            className="p-3 rounded-xl border border-indigo-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none bg-white/60 dark:bg-gray-300/60 shadow-sm transition-all duration-200"
            placeholder={lang === "pl" ? "E-mail" : "Email"}
            value={form.email}
            onChange={e => setForm((f: FormData) => ({ ...f, email: e.target.value }))}
            type="email"
            required
            id="reply_to"
            name="reply_to"
          />
          <motion.textarea
            variants={fadeIn}
            id="message"
            name="message"
            className="sm:col-span-2 p-3 rounded-xl border border-indigo-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none bg-white/60 dark:bg-gray-300/60 shadow-sm transition-all duration-200 h-32 resize-none"
            placeholder={lang === "pl" ? "Opisz swój projekt" : "Describe your project"}
            value={form.message}
            onChange={e => setForm((f: FormData) => ({ ...f, message: e.target.value }))}
            required
          />
          <motion.button
            variants={scaleIn}
            whileHover={{ scale: 1.05, background: isDark ? "linear-gradient(90deg,#6366f1,#ec4899)" : "linear-gradient(90deg,#6366f1,#ec4899)" }}
            className={
              isDark
                ? "sm:col-span-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-pink-500 text-white font-semibold shadow-lg transition-all duration-200"
                : "sm:col-span-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-lg transition-all duration-200"
            }
            type="submit"
            disabled={sending}
          >
            {sending ? (lang === "pl" ? "Wysyłanie..." : "Sending...") : (lang === "pl" ? "Wyślij" : "Send")}
          </motion.button>
          {sent && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="sm:col-span-2 text-green-600 mt-2 text-center"
            >
              {lang === "pl" ? "Wiadomość wysłana!" : "Message sent!"}
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="sm:col-span-2 text-red-600 mt-2 text-center"
            >
              {error}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  );
}
