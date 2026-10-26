import type { StaticImageData } from "next/image";
import echogpt from "@/assets/projects/echogpt.webp";
import bytespace from "@/assets/projects/bytespace.webp";

export type Project = {
  name: string;
  /** Screenshot for the cover; without one, the gradient cover with `cover.icon` is shown */
  image?: StaticImageData;
  cover: { theme: "a" | "b" | "c" | "d" | "e" | "f"; icon: string; label: string };
  badge?: string;
  stack: string[];
  /** Filter ids from `projectFilters` */
  categories: string[];
  description: string;
  tags: string[];
  links: { label: string; icon: "github" | "live"; url: string }[];
};

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "nextjs", label: "Next.js" },
  { id: "nestjs", label: "NestJS" },
  { id: "go", label: "Go" },
  { id: "postgres", label: "PostgreSQL" },
  { id: "php", label: "PHP / Laravel" },
  { id: "mobile", label: "📱 Mobile" },
  { id: "ai", label: "🤖 AI" },
];

const gh = (repo: string) => ({ label: "GitHub", icon: "github" as const, url: `https://github.com/zobayer-hosen/${repo}` });
const live = (url: string) => ({ label: "Live Demo", icon: "live" as const, url });

export const projects: Project[] = [
  {
    name: "Dhaka Tesla Pool - Ride-Pooling Platform",
    cover: { theme: "b", icon: "devicon-nextjs-plain", label: "Tesla Pool" },
    badge: "🚀 Live Demo",
    stack: ["Next.js", "NestJS", "PostgreSQL", "TypeORM", "Docker"],
    categories: ["nextjs", "nestjs", "postgres"],
    description:
      "Ride-pooling MVP where passengers heading the same way share a 3-seat car, with separate passenger and driver flows and a strict ride lifecycle. A single atomic SQL update backed by a CHECK constraint prevents overbooking under simultaneous requests, proven by a concurrent race test. Ships with 91 passing tests and GitHub Actions CI.",
    tags: ["ride-pooling", "concurrency", "ci-cd", "vercel-render-neon"],
    links: [gh("dhaka-tesla-pool"), live("https://dhaka-tesla-pool-web-five.vercel.app")],
  },
  {
    name: "EchoGPT Backend - Multi-AI Chrome Extension API",
    image: echogpt,
    cover: { theme: "c", icon: "devicon-nestjs-original", label: "EchoGPT" },
    badge: "🚀 Live Demo",
    stack: ["NestJS", "PostgreSQL", "TypeORM", "TypeScript"],
    categories: ["nestjs", "postgres", "ai"],
    description:
      "REST API that lets users chat with OpenAI, Anthropic and Gemini models and run AI-assisted searches through one interface, streaming responses over Server-Sent Events. Rotating refresh tokens with database-backed sessions, Free/Premium plans with atomically enforced daily quotas and AES-256-GCM encrypted provider keys.",
    tags: ["llm-apis", "sse-streaming", "jwt-rotation", "swagger"],
    links: [gh("echogpt-backend"), live("https://echogpt-redesign-mauve.vercel.app/")],
  },
  {
    name: "Hospital Management System",
    cover: { theme: "a", icon: "devicon-nestjs-original", label: "Hospital MS" },
    badge: "🌐 Open Source",
    stack: ["Next.js", "React", "NestJS", "TypeORM", "PostgreSQL"],
    categories: ["nextjs", "nestjs", "postgres"],
    description:
      "Full-stack hospital management platform with separate dashboards for patients, doctors, receptionists and system administrators. JWT-based authentication, protected API routes and fine-grained role-based access control over scalable NestJS REST endpoints.",
    tags: ["rbac", "jwt-auth", "dashboards", "full-stack"],
    links: [gh("hospital-management-system")],
  },
  {
    name: "ShopNest - Full-Stack E-Commerce Platform",
    cover: { theme: "d", icon: "devicon-go-plain", label: "ShopNest" },
    badge: "🌐 Open Source",
    stack: ["Go", "chi", "PostgreSQL", "Next.js", "TanStack Query"],
    categories: ["go", "nextjs", "postgres"],
    description:
      "Go REST API (chi, pgx, Clean Architecture) with a Next.js storefront, customer portal and admin back office. JWT access and refresh tokens, cart and transactional checkout, order and inventory management with stock movements, and an admin dashboard.",
    tags: ["go-api", "clean-architecture", "e-commerce", "admin-dashboard"],
    links: [gh("ecommerce-api")],
  },
  {
    name: "ByteSpace - Course Marketplace",
    image: bytespace,
    cover: { theme: "e", icon: "devicon-nextjs-plain", label: "ByteSpace" },
    badge: "🚀 Live Demo",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    categories: ["nextjs"],
    description:
      "Figma-to-code build of an online course marketplace: landing page, URL-synced course search and filters, course detail tabs, creator profiles and auth forms. Responsive from 320px, keyboard accessible, with motion that respects reduced-motion settings.",
    tags: ["figma-to-code", "framer-motion", "accessibility", "responsive"],
    links: [gh("bytespace"), live("https://bytespace-zobayer-s.vercel.app")],
  },
  {
    name: "Seat Reservation API",
    cover: { theme: "f", icon: "devicon-laravel-original", label: "Seat Reservation" },
    badge: "🌐 Open Source",
    stack: ["Laravel 12", "PHP", "PostgreSQL", "JWT"],
    categories: ["php", "postgres"],
    description:
      "REST API that guarantees a seat never has more than one active reservation, even when users click at the same instant, using a transaction plus a PostgreSQL row lock (SELECT … FOR UPDATE). JWT auth, ownership policies and PHPUnit concurrency tests.",
    tags: ["concurrency", "row-locking", "jwt-auth", "phpunit"],
    links: [gh("seat-reservation-api")],
  },
  {
    name: "6 Designs - Interior Studio Website",
    cover: { theme: "c", icon: "devicon-nextjs-plain", label: "6 Designs" },
    badge: "🌐 Open Source",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    categories: ["nextjs"],
    description:
      "Multi-page website for an interior design and construction firm (Home, About, Services, Contact) with Lenis smooth scrolling, parallax and reveal animations, pricing tabs, an FAQ and an inquiry form.",
    tags: ["marketing-site", "motion", "lenis", "tailwind"],
    links: [gh("6designs")],
  },
  {
    name: "Go Products API",
    cover: { theme: "b", icon: "devicon-go-plain", label: "Products API" },
    badge: "🚧 In Progress",
    stack: ["Go", "PostgreSQL", "JWT"],
    categories: ["go", "postgres"],
    description:
      "Products REST API in Go with a layered handler, service and repository architecture, JWT authentication middleware, request logging and versioned SQL migrations with CHECK constraints on price and stock.",
    tags: ["golang", "rest-api", "jwt", "layered-architecture"],
    links: [gh("go-products-api")],
  },
  {
    name: "AI Engineer Bangla - Learning App",
    cover: { theme: "e", icon: "devicon-reactnative-original", label: "AI Engineer Bangla" },
    badge: "🚧 In Progress",
    stack: ["React Native", "Expo", "TypeScript", "TanStack Query"],
    categories: ["mobile", "ai"],
    description:
      "Mobile-first app that guides beginners from Python basics to job-ready AI engineering in short lessons with quizzes and a prerequisite-based roadmap, offline caching and a planned AI tutor on a Go backend.",
    tags: ["react-native", "expo", "edtech", "offline-first"],
    links: [gh("ai-engineer-bangla")],
  },
];
