/** Colour tone of a skill block: ai = emerald, code = teal, data = violet */
type Tone = "ai" | "code" | "data";

export const skillGroups: { title: string; tone: Tone; items: string[] }[] = [
  { title: "Programming Languages", tone: "code", items: ["JavaScript", "TypeScript", "Python", "Go (Golang)", "C++", "C#"] },
  { title: "Frontend Development", tone: "data", items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"] },
  {
    title: "Backend Development",
    tone: "ai",
    items: ["Node.js", "NestJS", "Go", "REST APIs", "PostgreSQL", "SQL", "TypeORM", "Low-Level Design (LLD)"],
  },
  { title: "DevOps & Tools", tone: "code", items: ["Git", "GitHub", "Docker", "CI/CD Pipelines", "GitHub Actions", "Swagger", "Linux"] },
  {
    title: "AI Engineering",
    tone: "data",
    items: ["LLM APIs", "LangChain", "Prompt Engineering", "RAG", "AI Agents", "Agentic Workflows"],
  },
  { title: "AI / ML", tone: "ai", items: ["Machine Learning", "Explainable AI (XAI)", "Data Analysis"] },
];

export const practices = [
  "API Design",
  "Database Architecture",
  "Authentication & JWT",
  "Role-Based Access Control",
  "Concurrency Control",
  "System Design",
  "Clean Architecture",
  "Automated Testing",
  "Code Reviews",
  "Agile Workflows",
];

/** `ink` icons are monochrome brand marks that follow the text colour in both themes */
export const toolbox: { name: string; icon: string; ink?: boolean }[] = [
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "Python", icon: "devicon-python-plain" },
  { name: "Go", icon: "devicon-go-plain" },
  { name: "C++", icon: "devicon-cplusplus-plain" },
  { name: "C#", icon: "devicon-csharp-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Next.js", icon: "devicon-nextjs-plain", ink: true },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "NestJS", icon: "devicon-nestjs-original" },
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  { name: "Tailwind", icon: "devicon-tailwindcss-original" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "TypeORM", icon: "devicon-typeorm-plain", ink: true },
  { name: "Docker", icon: "devicon-docker-plain" },
  { name: "GH Actions", icon: "devicon-githubactions-plain" },
  { name: "Swagger", icon: "devicon-swagger-plain" },
  { name: "Postman", icon: "devicon-postman-plain" },
  { name: "Jest", icon: "devicon-jest-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "GitHub", icon: "devicon-github-original", ink: true },
  { name: "Linux", icon: "devicon-linux-plain", ink: true },
  { name: "Vercel", icon: "devicon-vercel-original", ink: true },
];
