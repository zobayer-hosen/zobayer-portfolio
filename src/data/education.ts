export type Education = {
  logo: string;
  institution: string;
  degree: string;
  year: string;
  score?: string;
  description: string;
  tags: string[];
};

export const education: Education[] = [
  {
    logo: "AIUB",
    institution: "American International University–Bangladesh (AIUB), Dhaka",
    degree: "B.Sc. in Computer Science & Engineering",
    year: "Expected Dec 2026",
    score: "CGPA 3.41 / 4.00",
    description:
      "Final-semester CSE student. Research in explainable machine learning and network security; 2nd Runner-Up at the AIUB FST Apps Showcasing for the AIUB-Chatbot project.",
    tags: ["Software Engineering", "Full-Stack Development", "Machine Learning", "Network Security"],
  },
  {
    logo: "CBC",
    institution: "Chattogram Bandar College, Chattogram",
    degree: "Higher Secondary Certificate (H.S.C.), Science",
    year: "2022",
    score: "GPA 5.00 / 5.00",
    description: "Higher Secondary Certificate in the Science group, achieving a perfect GPA.",
    tags: ["Science Group"],
  },
  {
    logo: "JPBM",
    institution: "Julon Pole BM High School, Chattogram",
    degree: "Secondary School Certificate (S.S.C.), Science",
    year: "2020",
    score: "GPA 4.67 / 5.00",
    description: "Secondary School Certificate in the Science group.",
    tags: ["Science Group"],
  },
];
