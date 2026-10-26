"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Fades `.reveal` elements in as they scroll into view. */
export function RevealObserver() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    if (reducedMotion() || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}

/** Decorative particles drifting up the page. */
export function Particles() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || reducedMotion()) return;
    const count = window.innerWidth < 640 ? 10 : 18;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      const size = 2 + Math.random() * 3;
      const duration = 14 + Math.random() * 16;
      p.className = "particle";
      p.style.left = `${(Math.random() * 100).toFixed(2)}%`;
      p.style.width = p.style.height = `${size.toFixed(1)}px`;
      p.style.animationDuration = `${duration.toFixed(1)}s`;
      p.style.animationDelay = `${(-Math.random() * duration).toFixed(1)}s`;
      host.appendChild(p);
    }
    return () => host.replaceChildren();
  }, []);

  return <div id="particles" ref={hostRef} aria-hidden="true" />;
}

const RING = 2 * Math.PI * 23;

/** Back-to-top button whose ring fills with scroll progress. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const ringRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(y / max, 1) : 0;
      setVisible(y > 600);
      ringRef.current?.style.setProperty("stroke-dashoffset", (RING * (1 - progress)).toFixed(2));
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={visible ? "ui-top is-visible" : "ui-top"}
      id="toTop"
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: reducedMotion() ? "auto" : "smooth" })}
    >
      <svg className="ui-top-ring" viewBox="0 0 48 48" aria-hidden="true">
        <circle className="ui-top-ring-track" cx="24" cy="24" r="23" />
        <circle
          ref={ringRef}
          className="ui-top-ring-progress"
          cx="24"
          cy="24"
          r="23"
          style={{ strokeDasharray: RING.toFixed(2), strokeDashoffset: RING.toFixed(2) }}
        />
      </svg>
      <Icon name="up" />
    </button>
  );
}

/** Counts up from 0 the first time the number scrolls into view. */
export function CountUp({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion() || !("IntersectionObserver" in window)) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let start: number | null = null;
        const step = (ts: number) => {
          start ??= ts;
          const p = Math.min((ts - start) / 1400, 1);
          setShown(value * (1 - Math.pow(1 - p, 3)));
          if (p < 1) frame = window.requestAnimationFrame(step);
        };
        frame = window.requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref}>{decimals ? shown.toFixed(decimals) : Math.round(shown)}</span>;
}
