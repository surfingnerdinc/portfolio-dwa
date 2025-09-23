export default interface TextInterface {
  nav: {
    home: string;
    portfolio: string;
    uslugi?: string;
    services?: string;
    kontakt?: string;
    contact?: string;
    blog: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    browserFrame: {
      title: string;
      desc: string;
    };
  };
  blog: {
    title: string;
    posts: Array<{
      slug: string;
      title: string;
      excerpt: string;
    }>;
  };
  about: {
    title: string;
    paragraphs: string[];
    highlights: string[];
  };
  portfolio: {
    title: string;
    items: Array<{
      slug:string;
      name: string;
      desc: string;
      tech: string;
    }>;
  };
  contact: {
    title: string;
    desc: string;
    email: string;
  };
}
