"use client";
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Footer from '@/app/_components/Footer';

type Props = { params: { slug: string } };

const articles: Record<string, { title: string; content: React.ReactElement }> = {
  'wybor-technologii': {
    title: 'Jak wybrać odpowiednią technologię do projektu?',
    content: (
      <>
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-6 text-lg leading-relaxed">
          Wybór technologii to kluczowy etap każdego projektu IT. Odpowiednia decyzja wpływa na koszty, czas wdrożenia, skalowalność i przyszły rozwój produktu. Oto nowoczesny przewodnik, który pomoże Ci uniknąć najczęstszych błędów:
        </motion.p>
        <motion.ul initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="list-disc list-inside mb-8 text-base">
          <li><b>Analiza potrzeb biznesowych:</b> Zdefiniuj cele, grupę docelową i wymagania funkcjonalne.</li>
          <li><b>Skalowalność i wydajność:</b> Wybierz technologie, które pozwolą na rozwój produktu bez kosztownych migracji.</li>
          <li><b>Ekosystem i społeczność:</b> Postaw na rozwiązania z dużym wsparciem i bogatą dokumentacją.</li>
          <li><b>Bezpieczeństwo:</b> Upewnij się, że wybrana technologia spełnia standardy bezpieczeństwa.</li>
          <li><b>Doświadczenie zespołu:</b> Uwzględnij kompetencje programistów i dostępność specjalistów na rynku.</li>
        </motion.ul>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-6 rounded-xl bg-gradient-to-br from-indigo-200 via-pink-200 to-white border-2 border-indigo-400 shadow-lg mb-8">
          <h2 className="text-xl font-bold mb-2 text-indigo-700">Przykład: Sklep internetowy</h2>
          <p className="text-base text-gray-900">Dla e-commerce polecamy <span className='font-semibold text-indigo-700'>React + Node.js</span> z bazą danych <span className='font-semibold text-pink-600'>PostgreSQL</span>. Pozwala to na szybkie wdrożenie, łatwą integrację z płatnościami i wysoką wydajność.</p>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="text-lg">
          Pamiętaj: technologia to narzędzie, nie cel. Najlepsze projekty powstają tam, gdzie wybór jest świadomy i dopasowany do realnych potrzeb biznesowych.
        </motion.p>
      </>
    )
  },
  'dlaczego-ux': {
    title: 'Dlaczego warto inwestować w UX?',
    content: (
      <>
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-6 text-lg leading-relaxed">
          User Experience (UX) to nie tylko estetyka, ale przede wszystkim funkcjonalność i wygoda użytkownika. Inwestycja w UX przekłada się na realne korzyści biznesowe:
        </motion.p>
        <motion.ul initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="list-disc list-inside mb-8 text-base">
          <li><b>Wyższa konwersja:</b> Intuicyjny interfejs zwiększa liczbę zamówień i zapytań.</li>
          <li><b>Lojalność klientów:</b> Użytkownicy chętniej wracają do aplikacji, która jest wygodna i szybka.</li>
          <li><b>Mniej błędów:</b> Przemyślany UX minimalizuje liczbę pomyłek i frustracji.</li>
          <li><b>Lepsze opinie:</b> Zadowoleni klienci polecają produkt dalej.</li>
        </motion.ul>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-6 rounded-xl bg-gradient-to-br from-pink-50 via-indigo-50 to-white shadow mb-8">
          <h2 className="text-xl font-bold mb-2">Jak wdrażać UX?</h2>
          <p className="text-base">Testuj prototypy z użytkownikami, analizuj dane, iteruj projekt. Współpracuj z designerem i developerem na każdym etapie.</p>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="text-lg">
          UX to inwestycja, która zwraca się wielokrotnie. Dobrze zaprojektowany produkt sprzedaje się sam.
        </motion.p>
      </>
    )
  },
  'bezpieczenstwo-aplikacji': {
    title: 'Bezpieczeństwo aplikacji webowych',
    content: (
      <>
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-6 text-lg leading-relaxed">
          Bezpieczeństwo to fundament każdej nowoczesnej aplikacji. Oto praktyki, które warto wdrożyć już na starcie projektu:
        </motion.p>
        <motion.ul initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="list-disc list-inside mb-8 text-base">
          <li><b>Szyfrowanie danych:</b> Używaj HTTPS, szyfruj hasła i wrażliwe informacje.</li>
          <li><b>Regularne aktualizacje:</b> Dbaj o najnowsze wersje bibliotek i frameworków.</li>
          <li><b>Testy bezpieczeństwa:</b> Wykonuj audyty, testy penetracyjne i skanowanie podatności.</li>
          <li><b>Ogranicz uprawnienia:</b> Stosuj zasadę najmniejszych uprawnień dla użytkowników i serwisów.</li>
        </motion.ul>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 via-pink-50 to-white shadow mb-8">
          <h2 className="text-xl font-bold mb-2">Narzędzia do ochrony</h2>
          <p className="text-base">Warto korzystać z narzędzi takich jak OWASP ZAP, Snyk czy automatyczne testy CI/CD. Bezpieczeństwo to proces, nie jednorazowe zadanie.</p>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="text-lg">
          Dbaj o bezpieczeństwo od pierwszego dnia projektu – to inwestycja w zaufanie klientów i stabilność biznesu.
        </motion.p>
      </>
    )
  },
  'choose-tech': {
    title: 'How to choose the right tech for your project?',
    content: (
      <>
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-6 text-lg leading-relaxed">
          Choosing the right technology stack is a critical step for any digital project. The right choice impacts cost, scalability, and future growth. Here’s a modern guide to help you avoid common mistakes:
        </motion.p>
        <motion.ul initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="list-disc list-inside mb-8 text-base">
          <li><b>Business needs analysis:</b> Define goals, target audience, and functional requirements.</li>
          <li><b>Scalability & performance:</b> Choose tech that supports growth without costly migrations.</li>
          <li><b>Community & ecosystem:</b> Opt for solutions with strong support and documentation.</li>
          <li><b>Security:</b> Ensure your stack meets modern security standards.</li>
          <li><b>Team experience:</b> Consider developer skills and market availability.</li>
        </motion.ul>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 via-pink-50 to-white shadow mb-8">
          <h2 className="text-xl font-bold mb-2">Example: E-commerce</h2>
          <p className="text-base">For online stores, React + Node.js with PostgreSQL is recommended. It enables fast deployment, easy payment integration, and high performance.</p>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="text-lg">
          Remember: technology is a tool, not a goal. The best projects are built with conscious choices tailored to real business needs.
        </motion.p>
      </>
    )
  },
  'why-ux': {
    title: 'Why invest in UX?',
    content: (
      <>
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-6 text-lg leading-relaxed">
          User Experience (UX) is not just about aesthetics, but about functionality and user comfort. Investing in UX brings real business benefits:
        </motion.p>
        <motion.ul initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="list-disc list-inside mb-8 text-base">
          <li><b>Higher conversion:</b> Intuitive interfaces increase orders and inquiries.</li>
          <li><b>Customer loyalty:</b> Users return to apps that are convenient and fast.</li>
          <li><b>Fewer errors:</b> Thoughtful UX minimizes mistakes and frustration.</li>
          <li><b>Better reviews:</b> Satisfied users recommend your product.</li>
        </motion.ul>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-6 rounded-xl bg-gradient-to-br from-pink-50 via-indigo-50 to-white shadow mb-8">
          <h2 className="text-xl font-bold mb-2">How to implement UX?</h2>
          <p className="text-base">Test prototypes with users, analyze data, iterate the design. Collaborate with designers and developers at every stage.</p>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="text-lg">
          UX is an investment that pays off many times over. A well-designed product sells itself.
        </motion.p>
      </>
    )
  },
  'security-basics': {
    title: 'Web app security basics',
    content: (
      <>
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-6 text-lg leading-relaxed">
          Security is the foundation of every modern web app. Here are best practices to implement from day one:
        </motion.p>
        <motion.ul initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="list-disc list-inside mb-8 text-base">
          <li><b>Data encryption:</b> Use HTTPS, hash passwords, and protect sensitive info.</li>
          <li><b>Regular updates:</b> Keep libraries and frameworks up to date.</li>
          <li><b>Security testing:</b> Run audits, penetration tests, and vulnerability scans.</li>
          <li><b>Limit permissions:</b> Apply least privilege for users and services.</li>
        </motion.ul>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 via-pink-50 to-white shadow mb-8">
          <h2 className="text-xl font-bold mb-2">Security tools</h2>
          <p className="text-base">Use tools like OWASP ZAP, Snyk, and automated CI/CD tests. Security is a process, not a one-time task.</p>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="text-lg">
          Take care of security from day one – it’s an investment in customer trust and business stability.
        </motion.p>
      </>
    )
  }
};

export default function BlogPostPage({ params }: Props) {
  const article = articles[params.slug];
  if (!article) return notFound();

  // Animation variants
  const fadeIn = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
  const scaleIn = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { duration: 0.6 } } };
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 relative">
      {/* Floating Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed top-8 left-8 z-20"
      >
        <Link href="/" className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-lg border text-indigo-600 dark:text-pink-400 font-semibold hover:bg-indigo-50 dark:hover:bg-gray-700 transition">← Home</Link>
      </motion.div>

      <main className="flex items-center justify-center min-h-[80vh] px-4 py-16">
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
            className="rounded-3xl shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-indigo-100 dark:border-gray-800 p-8"
          >
            <div className="space-y-8">{article.content}</div>
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
