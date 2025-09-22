"use client";
import React, { JSX, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Lang = 'pl' | 'en';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

const copy: Record<Lang, any> = {
  pl: {
    nav: { home: 'Start', portfolio: 'Portfolio', uslugi: 'Usługi', kontakt: 'Kontakt', blog: 'Artykuły' },
    hero: {
      title: 'Tworzę nowoczesne aplikacje webowe i desktopowe',
      subtitle:
        'Full‑stack developer — od przemyślanego front‑endu po skalowalny back‑end. Buduję interfejsy, które sprzedają i systemy, które działają.',
      cta1: 'Zobacz portfolio',
      cta2: 'Skontaktuj się'
    },
    blog: {
      title: 'Artykuły i porady',
      posts: [
        { slug: 'wybor-technologii', title: 'Jak wybrać odpowiednią technologię do projektu?', excerpt: 'Krótki przewodnik, który pomoże Ci uniknąć błędów na starcie.' },
        { slug: 'dlaczego-ux', title: 'Dlaczego warto inwestować w UX?', excerpt: 'Dobrze zaprojektowany interfejs to większa konwersja i lojalność klientów.' },
        { slug: 'bezpieczenstwo-aplikacji', title: 'Bezpieczeństwo aplikacji webowych', excerpt: 'Podstawowe praktyki, które chronią dane Twoich klientów.' }
      ]
    },
    about: {
      title: 'O mnie',
      paragraphs: [
        'Jestem doświadczonym full-stack developerem, który łączy technologię z biznesem. Specjalizuję się w nowoczesnych aplikacjach webowych i desktopowych, dbając o każdy detal projektu.',
        'Współpracowałem z firmami z branży fintech, e-commerce, edukacji i startupami. Moje projekty zdobywały nagrody i były wdrażane na rynkach międzynarodowych.',
        'Stawiam na partnerską współpracę, transparentność i szybkie iteracje. Wierzę, że najlepsze produkty powstają tam, gdzie technologia wspiera realne potrzeby użytkowników.',
        'Poza kodowaniem prowadzę warsztaty, szkolenia i mentoring dla młodych programistów. Interesuję się designem, AI oraz automatyzacją procesów.',
        'W wolnym czasie podróżuję, testuję nowe narzędzia i dzielę się wiedzą na blogu.'
      ],
      highlights: [
        '10+ lat doświadczenia w IT',
        'Projekty wdrożone w 7 krajach',
        'Prelegent na konferencjach branżowych',
        'Mentor w programach edukacyjnych',
        'Specjalizacja: React, Next.js, Node.js, TypeScript, UX/UI'
      ],
    },
    portfolio: {
      title: 'Wybrane projekty',
      items: [
        { name: 'Panel analityczny', desc: 'Dashboard z wizualizacjami, eksportem danych i alertami w czasie rzeczywistym.' },
        { name: 'Aplikacja sprzedażowa', desc: 'Sklep z zaawansowaną logiką koszyka i integracjami z płatnościami.' },
        { name: 'Narzędzie desktopowe', desc: 'Aplikacja Electron do zarządzania raportami i synchronizacji lokalnej.' }
      ]
    },
    contact: { title: 'Chcesz zacząć projekt?', desc: 'Napisz: ', email: 'twoj.email@domena.com' }
  },
  en: {
    nav: { home: 'Home', portfolio: 'Portfolio', services: 'Services', contact: 'Contact', blog: 'Blog' },
    hero: {
      title: 'I build modern web & desktop applications',
      subtitle:
        "Full‑stack developer — from thoughtful front‑ends to scalable back‑ends. I craft interfaces that convert and systems that last.",
      cta1: 'See portfolio',
      cta2: 'Get in touch'
    },
    blog: {
      title: 'Insights & Articles',
      posts: [
        { slug: 'choose-tech', title: 'How to choose the right tech for your project?', excerpt: 'A quick guide to avoid mistakes early on.' },
        { slug: 'why-ux', title: 'Why invest in UX?', excerpt: 'A well‑designed interface boosts conversion and loyalty.' },
        { slug: 'security-basics', title: 'Web app security basics', excerpt: 'Essential practices to protect your customers’ data.' }
      ]
    },
     about: {
      title: 'About me',
      paragraphs: [
        "I'm an experienced full-stack developer who bridges technology and business. I specialize in modern web and desktop apps, focusing on every detail of the project.",
        "I've worked with fintech, e-commerce, education companies, and startups. My projects have won awards and been launched internationally.",
        "I value partnership, transparency, and rapid iteration. I believe the best products are built where technology supports real user needs.",
        "Beyond coding, I run workshops, trainings, and mentor junior developers. I'm interested in design, AI, and process automation.",
        "In my free time, I travel, test new tools, and share knowledge on my blog."
      ],
      highlights: [
        '10+ years in IT',
        'Projects launched in 7 countries',
        'Speaker at industry conferences',
        'Mentor in educational programs',
        'Specialties: React, Next.js, Node.js, TypeScript, UX/UI'
      ],
    },
    portfolio: {
      title: 'Selected Projects',
      items: [
        { name: 'Analytics Dashboard', desc: 'Dashboard with visualizations, data export, and real-time alerts.' },
        { name: 'Sales Application', desc: 'Store with advanced cart logic and payment integrations.' },
        { name: 'Desktop Tool', desc: 'Electron app for report management and local synchronization.' }
      ]
    },
    contact: { title: 'Ready to start?', desc: 'Write to: ', email: 'your.email@domain.com' }
  }
};

export default function Page(): JSX.Element {
  const [lang, setLang] = useState<Lang>('pl');
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    const savedLang = (localStorage.getItem('site-lang') as Lang) || undefined;
    const savedTheme = localStorage.getItem('site-theme');
    if (savedLang) setLang(savedLang);
    if (savedTheme) setIsDark(savedTheme === 'dark');
  }, []);

  useEffect(() => { localStorage.setItem('site-lang', lang); }, [lang]);
  useEffect(() => { localStorage.setItem('site-theme', isDark ? 'dark' : 'light'); }, [isDark]);

  const t = copy[lang];

  return (
    <div className={isDark ? 'min-h-screen bg-gray-900 text-gray-100' : 'min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 text-gray-900'}>
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg bg-gradient-to-br from-indigo-500 to-pink-500 shadow-lg">JS</div>
          <div>
            <h1 className="text-lg font-semibold">Full‑Stack Dev</h1>
            <p className="text-xs opacity-70">Web & Desktop</p>
          </div>
        </motion.div>

        <nav className="flex items-center gap-4">
          <ul className="hidden sm:flex gap-6 mr-4">
            <li className='hover:border-b-2 hover:border-indigo-600'><Link href="/">{t.nav.home}</Link></li>
            <li className='hover:border-b-2 hover:border-indigo-600'><Link href="#portfolio">{t.nav.portfolio}</Link></li>
            <li className='hover:border-b-2 hover:border-indigo-600'><Link href="/services">{t.nav.uslugi ?? t.nav.services}</Link></li>
            <li className='hover:border-b-2 hover:border-indigo-600'><Link href="#contact">{t.nav.kontakt ?? t.nav.contact}</Link></li>
            <li className='hover:border-b-2 hover:border-indigo-600'><Link href="#blog">{t.nav.blog}</Link></li>
          </ul>

          <div className="flex items-center gap-2">
            <motion.button whileTap={{ scale: 0.9 }} onClick={() => setIsDark(d => !d)} className="px-3 py-2 rounded-md border text-sm">
              {isDark ? '🌙' : '☀️'}
            </motion.button>
            <motion.button whileTap={{ scale: 0.9 }} onClick={() => setLang(l => (l === 'pl' ? 'en' : 'pl'))} className="px-3 py-2 rounded-md border text-sm">
              {lang === 'pl' ? 'PL' : 'EN'}
            </motion.button>
          </div>
        </nav>
      </header>

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
            <motion.h2 variants={scaleIn} className="text-3xl md:text-4xl font-extrabold leading-tight text-indigo-600 dark:text-gray-100">{t.hero.title}</motion.h2>
            <motion.p variants={fadeIn} className="mt-4 text-lg opacity-80">{t.hero.subtitle}</motion.p>
            <motion.div variants={fadeIn} className="mt-6 flex gap-4 flex-wrap">
              <motion.div variants={scaleIn}><Link href="#portfolio" className="px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700">{t.hero.cta1}</Link></motion.div>
              <motion.div variants={scaleIn}><Link href={`mailto:${t.contact.email}`} className="px-6 py-3 rounded-md border font-semibold hover:bg-indigo-50 dark:hover:bg-gray-800">{t.hero.cta2}</Link></motion.div>
            </motion.div>
          </motion.div>
          <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden shadow-xl p-6 bg-gradient-to-br from-indigo-100 to-pink-100 dark:from-gray-800 dark:to-gray-900">
            <motion.div animate={{ rotate: [0, 1, -1, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="h-64 w-full flex items-center justify-center">
              <div className="text-center">
                <motion.h3 variants={fadeIn} className="text-xl font-bold">{t.hero.title}</motion.h3>
                <motion.p variants={fadeIn} className="mt-2 text-sm opacity-80 max-w-xs mx-auto">{t.hero.subtitle}</motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Blog */}
        <motion.section
          id="blog"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16"
        >
          <motion.h3 variants={scaleIn} className="text-2xl font-bold text-pink-600 dark:text-gray-100">{t.blog.title}</motion.h3>
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
                <motion.h4 variants={scaleIn} className="font-semibold text-indigo-700 dark:text-indigo-300"><Link href={`/blog/${post.slug}`}>{post.title}</Link></motion.h4>
                <motion.p variants={fadeIn} className="mt-3 text-sm opacity-80">{post.excerpt}</motion.p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Portfolio */}
        <motion.section
          id="portfolio"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12"
        >
          <motion.h3 variants={scaleIn} className="text-2xl font-bold text-indigo-600 dark:text-gray-100">{t.portfolio.title}</motion.h3>
          <motion.p variants={fadeIn} className="mt-2 text-sm opacity-80">{lang === 'pl' ? 'Kilka najciekawszych projektów — krótki opis, rolę i efekt biznesowy.' : 'A handful of standout projects — short descriptions, role and business impact.'}</motion.p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.portfolio.items.map((p: any, i: number) => (
              <motion.article
                key={p.name}
                whileHover={{ scale: 1.03 }}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className={isDark ? 'p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 shadow' : 'p-6 rounded-2xl bg-gradient-to-br from-indigo-50 via-pink-50 to-white border shadow-sm'}
              >
                <motion.h4 variants={scaleIn} className="font-semibold text-lg text-pink-600 dark:text-gray-100"><Link href={`/portfolio/${p.slug}`}>{p.name}</Link></motion.h4>
                <motion.p variants={fadeIn} className="mt-3 text-sm opacity-80">{p.desc}</motion.p>
                <motion.div variants={fadeIn} className="mt-4 flex items-center gap-3">
                  <motion.span variants={scaleIn} className="text-xs px-2 py-1 rounded-full border bg-white dark:bg-gray-700">React</motion.span>
                  <motion.span variants={scaleIn} className="text-xs px-2 py-1 rounded-full border bg-white dark:bg-gray-700">TS</motion.span>
                  <motion.span variants={scaleIn} className="text-xs px-2 py-1 rounded-full border bg-white dark:bg-gray-700">Node</motion.span>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* About */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          <div className="md:col-span-2">
            <motion.h3 variants={scaleIn} className="text-2xl font-bold text-indigo-600 dark:text-gray-100">{t.about.title}</motion.h3>
            <motion.div className="space-y-4">
              {t.about.paragraphs.map((p: string, i: number) => (
                <motion.p
                  key={i}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-base opacity-90 leading-relaxed bg-white/70 dark:bg-gray-900/70 rounded-lg p-4 shadow"
                >{p}</motion.p>
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
              <h4 className="font-semibold text-indigo-600 dark:text-pink-400 mb-2">{lang === 'pl' ? 'Osiągnięcia i specjalizacje' : 'Highlights & Specialties'}</h4>
              <ul className="flex flex-wrap gap-3">
                {t.about.highlights.map((item: string, i: number) => (
                  <li key={i} className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-gray-800 text-sm font-medium border border-indigo-200 dark:border-gray-700 text-indigo-700 dark:text-pink-300 shadow">{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="mt-6 p-4 rounded-lg bg-indigo-50 dark:bg-gray-800"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h4 variants={scaleIn} className="font-semibold text-pink-600 dark:text-gray-100">{lang === 'pl' ? 'Jak pracuję' : 'How I work'}</motion.h4>
              <motion.ul variants={staggerContainer} className="mt-3 list-disc list-inside text-sm opacity-85">
                <motion.li variants={fadeIn}>{lang === 'pl' ? 'Szybkie prototypy i walidacja pomysłu' : 'Rapid prototyping and idea validation'}</motion.li>
                <motion.li variants={fadeIn}>{lang === 'pl' ? 'Regularne review i demonstracje' : 'Regular reviews & demos'}</motion.li>
                <motion.li variants={fadeIn}>{lang === 'pl' ? 'Skupienie na jakości i utrzymywalności' : 'Focus on quality and maintainability'}</motion.li>
              </motion.ul>
            </motion.div>
          </div>

          <motion.aside
            className={isDark ? 'p-6 rounded-xl bg-gray-800/60' : 'p-6 rounded-xl bg-gradient-to-br from-yellow-50 via-indigo-50 to-pink-50'}
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h4 variants={scaleIn} className="font-semibold text-indigo-700 dark:text-gray-100">{lang === 'pl' ? 'Szybkie fakty' : 'Quick facts'}</motion.h4>
            <motion.ul variants={staggerContainer} className="mt-3 text-sm opacity-80 space-y-2">
              <motion.li variants={fadeIn}>5+ {lang === 'pl' ? 'lat doświadczenia' : 'years experience'}</motion.li>
              <motion.li variants={fadeIn}>{lang === 'pl' ? 'Wdrażam produkcyjnie' : 'Production deployments'}</motion.li>
              <motion.li variants={fadeIn}>Code reviews • Architektura • DevOps</motion.li>
            </motion.ul>

            <motion.div variants={scaleIn} className="mt-6">
              <a href={`mailto:${t.contact.email}`} className="inline-block w-full text-center px-4 py-3 rounded-md font-semibold bg-gradient-to-r from-pink-500 to-indigo-500 text-white">{t.contact.title}</a>
            </motion.div>
          </motion.aside>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16"
        >
          <motion.h3 variants={scaleIn} className="text-2xl font-bold text-indigo-600 dark:text-gray-100">{t.contact.title}</motion.h3>
          <motion.p variants={fadeIn} className="mt-2 text-sm opacity-80">{t.contact.desc} <a className="underline text-pink-600" href={`mailto:${t.contact.email}`}>{t.contact.email}</a></motion.p>

          <motion.form variants={staggerContainer} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.input variants={fadeIn} className="p-3 rounded-md border" placeholder={lang === 'pl' ? 'Twoje imię' : 'Your name'} />
            <motion.input variants={fadeIn} className="p-3 rounded-md border" placeholder={lang === 'pl' ? 'E-mail' : 'Email'} />
            <motion.textarea variants={fadeIn} className="sm:col-span-2 p-3 rounded-md border h-32" placeholder={lang === 'pl' ? 'Opisz swój projekt' : 'Describe your project'} />
            <motion.button variants={scaleIn} className={isDark ? 'sm:col-span-2 px-6 py-3 rounded-md bg-indigo-500 text-white font-semibold' : 'sm:col-span-2 px-6 py-3 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold'}>Wyślij</motion.button>
          </motion.form>
        </motion.section>
      </main>

      <footer className="mt-20 py-8 border-t">
        <div className="max-w-6xl mx-auto px-6 text-sm opacity-70 flex items-center justify-between">
          <div>© {new Date().getFullYear()} - Full‑Stack Dev</div>
          <div className="flex items-center gap-4">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}