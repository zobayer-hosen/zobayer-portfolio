import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import { BackToTop, Particles, RevealObserver } from "@/components/Effects";
import { IconSprite } from "@/components/Icon";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import { THEME_COLORS, themeInitScript } from "@/components/theme";
import { profile } from "@/data/profile";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

const title = `${profile.name} | Full-Stack Developer`;

export const metadata: Metadata = {
  // Origin only: Next.js already puts the basePath into metadata file URLs
  metadataBase: new URL(new URL(profile.siteUrl).origin),
  title,
  description: profile.description,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  keywords: [
    profile.name, "Full-Stack Developer", "Next.js", "NestJS", "TypeScript", "PostgreSQL", "Go",
    "Backend Developer", "AI/ML", "Dhaka", "Bangladesh", "AIUB",
  ],
  openGraph: {
    type: "profile",
    url: profile.siteUrl,
    siteName: profile.name,
    title,
    description: "Full-stack web applications with Next.js, NestJS, TypeScript and PostgreSQL, plus Go, Docker and agentic AI.",
  },
  twitter: { card: "summary_large_image", title, description: profile.description },
};

export const viewport: Viewport = { themeColor: THEME_COLORS.light };

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.jobTitle,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  telephone: profile.phoneHref.replace("tel:", ""),
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  worksFor: { "@type": "Organization", name: profile.company },
  alumniOf: { "@type": "CollegeOrUniversity", name: profile.university },
  knowsAbout: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Go", "Docker", "REST APIs", "Machine Learning", "Explainable AI", "AI Agents"],
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // The head script sets data-theme and the "js" class before hydration
    <html lang="en" className={`${manrope.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/devicon@2.18.0/devicon.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <IconSprite />
        <Particles />
        <Nav />
        {children}
        <BackToTop />
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
