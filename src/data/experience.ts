export type Experience = {
  logo: string;
  company: string;
  location?: string;
  title: string;
  type?: string;
  /** "YYYY-MM" */
  start: string;
  /** "YYYY-MM"; leave out while the role is ongoing */
  end?: string;
  description?: string;
  projectsLabel?: string;
  projects?: { title: string; description: string }[];
  skillsLabel?: string;
  skills?: string[];
};

export const experience: Experience[] = [
  {
    logo: "BS",
    company: "Bee Smart IoT Solutions",
    location: "📍 Dhaka, Bangladesh",
    title: "Full-Stack Developer Intern",
    type: "Internship · Web & IoT Platforms",
    start: "2026-08",
    description:
      "Building production web applications with Next.js, NestJS, TypeScript and PostgreSQL: RESTful APIs and responsive user interfaces for IoT-based monitoring and control solutions, developed with the team on the company repository through Git, code reviews and Agile workflows.",
    projectsLabel: "🗂 Key Projects",
    projects: [
      {
        title: "Bee Smart IoT Solutions website",
        description: "Official company website built with Next.js, NestJS, TypeORM and PostgreSQL.",
      },
      {
        title: "Nexoit Solution website",
        description: "Official website for Nexoit Solution on the same Next.js, NestJS and PostgreSQL stack.",
      },
      {
        title: "IoT monitoring & control",
        description: "RESTful APIs and responsive interfaces for IoT-based monitoring and control solutions.",
      },
    ],
    skillsLabel: "Stack",
    skills: ["Next.js", "NestJS", "TypeScript", "TypeORM", "PostgreSQL", "REST APIs", "Git", "Agile"],
  },
  {
    logo: "HB",
    company: "Head Blocks",
    location: "📍 Dhaka, Bangladesh",
    title: "AI/ML Intern",
    type: "Internship · Machine Learning Research",
    start: "2024-03",
    end: "2024-05",
    description:
      "Selected for the internship through a competitive selection process. Researched machine learning models end to end in Python and explored how to make their predictions transparent.",
    projectsLabel: "🗂 Key Work",
    projects: [
      {
        title: "Machine learning model research",
        description: "Data preprocessing, model training and evaluation using Python.",
      },
      {
        title: "Explainable ML",
        description: "Explored explainability techniques to interpret model predictions and improve transparency.",
      },
    ],
    skillsLabel: "Skills",
    skills: ["Python", "Machine Learning", "Data Preprocessing", "Model Evaluation", "Explainable AI"],
  },
];
