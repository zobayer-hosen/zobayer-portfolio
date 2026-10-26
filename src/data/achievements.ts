import { profile } from "./profile";

export const achievements: {
  icon: string;
  title: string;
  items: { title: string; meta: string }[];
  link?: { label: string; url: string; external?: boolean };
}[] = [
  {
    icon: "🏆",
    title: "Awards & Recognition",
    items: [
      { title: "2nd Runner-Up, AIUB FST Apps Showcasing", meta: "Recognized for developing the AIUB-Chatbot project" },
      { title: "Internship Offer, Head Blocks", meta: "Selected for an AI/ML internship through a competitive selection process" },
    ],
  },
  {
    icon: "📜",
    title: "Certificates",
    items: [
      {
        title: "Certifications & verified credentials",
        meta: "Course completions, verifications and other credentials in one place",
      },
    ],
    link: { label: "View Credentials ↗", url: profile.credentials, external: true },
  },
  {
    icon: "🌐",
    title: "Languages",
    items: [
      { title: "English", meta: "Professional working proficiency" },
      { title: "Bengali", meta: "Native" },
    ],
    link: { label: "Get in Touch ↓", url: "#contact" },
  },
];

export const references = [
  {
    name: "Sazzad Hossain",
    role: "Assistant Professor, Dept. of CS",
    org: "American International University–Bangladesh (AIUB) · Course Instructor",
    email: "sazzad@aiub.edu",
  },
  {
    name: "S.M. Ehsanur Rahman Kawser Irom Rushee",
    role: "Chief Executive Officer (CEO)",
    org: "Bee Smart IoT Solutions",
    email: "ehsanur@beesmartech.com",
  },
];
