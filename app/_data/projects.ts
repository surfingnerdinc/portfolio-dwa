import SOT from "../../public/assets/SOT-main.png";
import PORTFOLIO from "../../public/assets/portfolio.png";
import IPLEX from "../../public/assets/iplex-main.png";
import ZNAKIPATENT from "../../public/assets/znakipatent-home.png";
import WEDDING_MM from "../../public/assets/mm-main.png";

export type Lang = "pl" | "en";

export interface Project {
  slug: string;
  name: string;
  desc: string;
  image: string | { src: string };
  stack: string[];
  award?: string;
  live?: string;
  details?: string[];
  links?: { label: string; url: string }[];
}

export const projectsCopy: Record<Lang, Array<Project>> = {
  pl: [
    {
      slug: "studyontrack",
      name: "StudyOnTrack - Aplikacja do zarządzania nauką",
      desc: "Aplikacja do zarządzania nauką i śledzenia postępów. Pozwala użytkownikom planować zadania, monitorować cele i analizować wyniki. Zbudowana w React, Firebase i Tailwind CSS. Dostępna online.",
      image: SOT,
      stack: ["Next.js", "GC", "Java", "Tailwind CSS", "MySQL"],
      details: [
        "Efekt biznesowy: Ułatwiona nauka i organizacja dla studentów.",
        "Funkcje: Dashboard, planowanie zadań, śledzenie celów, analiza postępów.",
      ],
      links: [
        { label: "Live", url: "https://studyontrack.netlify.app" },
        {
          label: "GitHub",
          url: "https://github.com/surfingnerdinc/school-mgmt-app",
        },
      ],
    },
    {
      slug: "portfolio",
      name: "Portfolio Website",
      desc: "Jest to moje portfolio, które prezentuje moje umiejętności, projekty i doświadczenie zawodowe, jednak tylko po angielsku. Zawiera podstawowe informacje o mnie oraz moje prace. Zbudowane przy użyciu React, Tailwind CSS i Framer Motion. Dostępne online.",
      image: PORTFOLIO,
      stack: ["React", "Tailwind CSS", "Framer Motion"],
      details: [
        "Strona została stworzona na potrzeby prezentacji moich umiejętności i projektów.",
        "Zaprojektowana z myślą o responsywności i nowoczesnym wyglądzie.",
      ],
      links: [
        { label: "Demo", url: "https://surfingnerdinc.netlify.app/" },
        { label: "GitHub", url: "https://github.com/surfingnerdinc/portfolio" },
      ],
    },
    {
      slug: "iplex",
      name: "IPlex",
      desc: "Strona domowa kancelarii IPlex, oferującej usługi prawne dla firm i klientów indywidualnych. Zawiera informacje o usługach, zespole i możliwościach kontaktu. Zbudowana przy użyciu Next.js, Tailwind CSS. Dostępna online.",
      image: IPLEX,
      stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
      details: [
        "Rola: Developer",
        "Efekt biznesowy: Strona firmowa zwiększająca widoczność online i pozyskiwanie klientów.",
      ],
      links: [
        { label: "Demo", url: "https://lexip.netlify.app" },
        { label: "GitHub", url: "https://github.com/surfingnerdinc/iplex" },
      ],
    },
    {
      slug: "znakipatent",
      name: "ZnakiPatent - System zarządzania znakami towarowymi",
      desc: "System zarządzania znakami towarowymi, oferujący funkcje rejestracji, monitorowania i ochrony znaków towarowych. Zbudowany przy użyciu Next.js, Tailwind CSS. Dostępny online.",
      image: ZNAKIPATENT,
      stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
      details: [
        "Rola: Developer",
        "Efekt biznesowy: Strona firmowa zwiększająca widoczność online i pozyskiwanie klientów.",
      ],
      links: [
        { label: "Demo", url: "https://znak-patent.netlify.app/" },
        {
          label: "GitHub",
          url: "https://github.com/surfingnerdinc/znakipatent",
        },
      ],
    },
    {
      slug: "wedding-mm",
      name: "Wedding-MM - Strona ślubna",
      desc: "Strona poświęcona ślubowi Marcina i Magdy, zawierająca informacje o wydarzeniu, harmonogramie i lokalizacji. Zbudowana przy użyciu React.js, Tailwind CSS. Dostępna online.",
      image: WEDDING_MM,
      stack: ["React.js", "Tailwind CSS"],
      details: [
        "Poinformowanaie gości o szczegółach ślubu i ułatwienie organizacji.",
      ],
      links: [
        { label: "Demo", url: "https://mm-wedding.netlify.app/" },
        {
          label: "GitHub",
          url: "https://github.com/surfingnerdinc/wedding-mm",
        },
      ],
    },
  ],
  en: [
    {
      slug: "studyontrack",
      name: "StudyOnTrack - Learning Management App",
      desc: "An application for managing learning and tracking progress. Allows users to plan tasks, monitor goals, and analyze results. Built with React, Firebase, and Tailwind CSS. Available online.",
      image: SOT,
      stack: ["Next.js", "GC", "Java", "Tailwind CSS", "MySQL"],
      details: [
        "Business impact: Easier learning and organization for students.",
        "Features: Dashboard, task planning, goal tracking, progress analytics.",
      ],
      links: [
        { label: "Live", url: "https://studyontrack.netlify.app" },
        {
          label: "GitHub",
          url: "https://github.com/surfingnerdinc/school-mgmt-app",
        },
      ],
    },
    {
      slug: "portfolio",
      name: "Portfolio Website",
      desc: "This is my portfolio, presenting my skills, projects, and professional experience, but only in English. It contains basic information about me and my work. Built with React, Tailwind CSS, and Framer Motion. Available online.",
      image: PORTFOLIO,
      stack: ["React", "Tailwind CSS", "Framer Motion"],
      details: [
        "The site was created to showcase my skills and projects.",
        "Designed for responsiveness and a modern look.",
      ],
      links: [
        { label: "Demo", url: "https://surfingnerdinc.netlify.app/" },
        { label: "GitHub", url: "https://github.com/surfingnerdinc/portfolio" },
      ],
    },
    {
      slug: "iplex",
      name: "IPlex",
      desc: "Homepage for the IPlex law firm, offering legal services for companies and individual clients. Includes information about services, the team, and contact options. Built with Next.js, Tailwind CSS. Available online.",
      image: IPLEX,
      stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
      details: [
        "Role: Developer",
        "Business impact: Company website increasing online visibility and client acquisition.",
      ],
      links: [
        { label: "Demo", url: "https://iplex.netlify.app/" },
        { label: "GitHub", url: "https://github.com/surfingnerdinc/iplex" },
      ],
    },
    {
      slug: "znakipatent",
      name: "ZnakiPatent - Trademark Management System",
      desc: "Trademark management system offering registration, monitoring, and protection features. Built with Next.js, Tailwind CSS. Available online.",
      image: ZNAKIPATENT,
      stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
      details: [
        "Role: Developer",
        "Business impact: Company website increasing online visibility and client acquisition.",
      ],
      links: [
        { label: "Demo", url: "https://znak-patent.netlify.app/" },
        {
          label: "GitHub",
          url: "https://github.com/surfingnerdinc/znakipatent",
        },
      ],
    },
    {
      slug: "wedding-mm",
      name: "Wedding-MM - Wedding Page",
      desc: "A page dedicated to Marcin and Magda's wedding, containing information about the event, schedule, and location. Built with React.js, Tailwind CSS. Available online.",
      image: WEDDING_MM,
      stack: ["React.js", "Tailwind CSS"],
      details: [
        "Informing guests about the wedding details and facilitating organization.",
      ],
      links: [
        { label: "Demo", url: "https://mm-wedding.netlify.app/" },
        {
          label: "GitHub",
          url: "https://github.com/surfingnerdinc/wedding-mm",
        },
      ],
    },
  ],
};
