import React from "react";
import { motion } from "framer-motion";

const blogTexts: Record<string, { title: string; content: React.ReactElement }> = {
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
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-6 rounded-xl bg-gradient-to-br from-indigo-200 via-pink-200 to-white border-2 border-indigo-400 shadow-lg mb-8">
          <h2 className="text-xl font-bold mb-2 text-indigo-700">Jak wdrażać UX?</h2>
          <p className="text-base text-gray-900">Testuj prototypy z użytkownikami, analizuj dane, iteruj projekt. Współpracuj z designerem i developerem na każdym etapie.</p>
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
         <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-6 rounded-xl bg-gradient-to-br from-indigo-200 via-pink-200 to-white border-2 border-indigo-400 shadow-lg mb-8">
          <h2 className="text-xl font-bold mb-2 text-indigo-700">Narzędzia do ochrony</h2>
          <p className="text-base text-gray-900">Warto korzystać z narzędzi takich jak <span className='font-semibold text-indigo-700'>OWASP ZAP, Snyk</span> czy automatyczne testy CI/CD. Bezpieczeństwo to proces, nie jednorazowe zadanie.</p>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="text-lg">
          Dbaj o bezpieczeństwo od pierwszego dnia projektu – to inwestycja w zaufanie klientów i stabilność biznesu.
        </motion.p>
      </>
    )
  },
};

export default blogTexts;
