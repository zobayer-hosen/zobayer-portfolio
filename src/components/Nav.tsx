"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { THEME_COLORS, THEME_KEY } from "./theme";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];

function syncThemeColor(theme: string) {
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? THEME_COLORS.dark : THEME_COLORS.light);
}

function ThemeToggle() {
  // The theme was applied before paint by the <head> script; only the browser chrome colour is left to sync
  useEffect(() => syncThemeColor(document.documentElement.getAttribute("data-theme") ?? "light"), []);

  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    syncThemeColor(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* storage blocked: the choice lasts for this page view only */
    }
  }

  // Which label shows is decided in CSS from data-theme, so the static HTML is right for both themes
  return (
    <button className="theme-btn" id="themeToggle" type="button" onClick={toggle}>
      <span className="icon-sun" aria-hidden="true">☀️</span>
      <span className="icon-moon" aria-hidden="true">🌙</span>
      <span className="sr-only">Switch to </span>
      <span className="theme-label-dark">Dark</span>
      <span className="theme-label-light">Light</span>
      <span className="sr-only"> mode</span>
    </button>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const navRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  // Highlight the link of the section in the middle of the viewport
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape or a click outside the bar
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      burgerRef.current?.focus();
    };
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <nav className="nav" id="nav" aria-label="Main navigation" ref={navRef}>
      <div className="nav-inner">
        <a className="nav-brand" href="#home" aria-label={`${profile.name}, portfolio home`}>
          {profile.name}
        </a>

        <button
          ref={burgerRef}
          className={open ? "hamburger open" : "hamburger"}
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={open ? "nav-links-wrap open" : "nav-links-wrap"} id="navLinks">
          <ul className="nav-links">
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={active === id ? "active" : undefined}
                  aria-current={active === id ? "location" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
