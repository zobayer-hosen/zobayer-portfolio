import { asset } from "@/lib/asset";

export const profile = {
  name: "Md Zobayer Hosen",
  firstName: "Zobayer",
  lastName: "Hosen",
  initials: "ZH",
  jobTitle: "Full-Stack Developer",
  headline: "Full-Stack Developer | Next.js, NestJS & TypeScript | AI/ML Enthusiast",
  description:
    "Portfolio of Md Zobayer Hosen, Full-Stack Developer building scalable web applications with Next.js, NestJS, TypeScript and PostgreSQL, exploring Go, Docker, CI/CD and agentic AI workflows.",
  location: "Dhaka, Bangladesh",
  email: "zobayer.aiub.cse@gmail.com",
  phone: "+880 1834 044434",
  phoneHref: "tel:+8801834044434",
  github: "https://github.com/zobayer-hosen",
  linkedin: "https://www.linkedin.com/in/zobayer-hosen-aiub/",
  // Follows the GitHub Pages base path, e.g. https://zobayer-hosen.github.io/zobayer-portfolio/
  siteUrl: `https://zobayer-hosen.github.io${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/`,
  cv: asset("/Md_Zobayer_Hosen_CV.pdf"),
  credentials: "https://drive.google.com/file/d/1SvkhA-YAenvDk1XN8185KRocnREo9eh2/view?usp=sharing",
  company: "Bee Smart IoT Solutions",
  university: "American International University–Bangladesh",
};

/** Lines cycled by the typing animation under the hero title. */
export const roles = [
  "Full-Stack Developer",
  "Next.js · NestJS · TypeScript",
  "Backend Engineer · Go & PostgreSQL",
  "AI/ML Enthusiast · Agentic AI",
];

export const interests = [
  { icon: "🧩", label: "Full-Stack Development", tip: "Next.js front ends on NestJS and PostgreSQL back ends" },
  { icon: "⚙️", label: "Backend Engineering", tip: "API design, authentication and race-safe concurrency" },
  { icon: "🏗️", label: "System Design", tip: "Low-level design, layered and Clean Architecture" },
  { icon: "🗄️", label: "Database Architecture", tip: "PostgreSQL schemas, constraints, row locks and migrations" },
  { icon: "🐹", label: "Go (Golang)", tip: "Layered REST APIs with chi, pgx and JWT" },
  { icon: "🐳", label: "DevOps & CI/CD", tip: "Docker, GitHub Actions and cloud deploys" },
  { icon: "🤖", label: "AI Agents", tip: "LLM APIs, LangChain, RAG and agentic workflows" },
  { icon: "🧪", label: "Explainable AI", tip: "Interpretable ML models that show why they decide" },
  { icon: "📡", label: "IoT Solutions", tip: "Web dashboards for IoT monitoring and control" },
];

export const metrics = [
  { icon: "🚀", value: 9, suffix: "+", label: "Projects" },
  { icon: "💼", value: 2, label: "Internships" },
  { icon: "🔬", value: 2, label: "Research Works" },
  { icon: "🎓", value: 3.41, decimals: 2, label: "CGPA" },
];
