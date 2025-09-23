export default interface ProjectInterface {
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