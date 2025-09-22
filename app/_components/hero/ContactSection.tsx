"use client";
import React from "react";
import { motion } from "framer-motion";

interface ContactSectionProps {
  t: any;
  isDark: boolean;
  lang: string;
  form: any;
  setForm: any;
  sending: boolean;
  sent: boolean;
  error: string | null;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  fadeIn: any;
  scaleIn: any;
  staggerContainer: any;
}

export default function ContactSection({ t, isDark, lang, form, setForm, sending, sent, error, handleSubmit, fadeIn, scaleIn, staggerContainer }: ContactSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-16"
    >
      <motion.h3 variants={scaleIn} className="text-2xl font-bold text-indigo-600 dark:text-gray-600">{t.contact.title}</motion.h3>
      <motion.p variants={fadeIn} className="mt-2 text-sm opacity-80">
        {t.contact.desc} <a className="underline text-pink-600" href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
      </motion.p>
      <motion.form
        variants={staggerContainer}
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        <motion.input
          variants={fadeIn}
          className="p-3 rounded-md border"
          placeholder={lang === "pl" ? "Twoje imię" : "Your name"}
          value={form.name}
          onChange={e => setForm((f: any) => ({ ...f, name: e.target.value }))}
          required
        />
        <motion.input
          variants={fadeIn}
          className="p-3 rounded-md border"
          placeholder={lang === "pl" ? "E-mail" : "Email"}
          value={form.email}
          onChange={e => setForm((f: any) => ({ ...f, email: e.target.value }))}
          type="email"
          required
        />
        <motion.textarea
          variants={fadeIn}
          className="sm:col-span-2 p-3 rounded-md border h-32"
          placeholder={lang === "pl" ? "Opisz swój projekt" : "Describe your project"}
          value={form.message}
          onChange={e => setForm((f: any) => ({ ...f, message: e.target.value }))}
          required
        />
        <motion.button
          variants={scaleIn}
          className={isDark ? "sm:col-span-2 px-6 py-3 rounded-md bg-indigo-500 text-white font-semibold" : "sm:col-span-2 px-6 py-3 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold"}
          type="submit"
          disabled={sending}
        >
          {sending ? (lang === "pl" ? "Wysyłanie..." : "Sending...") : (lang === "pl" ? "Wyślij" : "Send")}
        </motion.button>
        {sent && (
          <div className="sm:col-span-2 text-green-600 mt-2">{lang === "pl" ? "Wiadomość wysłana!" : "Message sent!"}</div>
        )}
        {error && (
          <div className="sm:col-span-2 text-red-600 mt-2">{error}</div>
        )}
      </motion.form>
    </motion.section>
  );
}
