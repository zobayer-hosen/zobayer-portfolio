"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { projectFilters, projects, type Project } from "@/data/projects";
import { Icon } from "../Icon";

const matches = (p: Project, filter: string) => filter === "all" || p.categories.includes(filter);

function ProjectCard({ p, hidden }: { p: Project; hidden: boolean }) {
  return (
    <article className="project-card reveal" data-category={p.categories.join(" ")} hidden={hidden}>
      <div className={`project-cover cover-${p.cover.theme}`}>
        {p.image ? (
          <Image className="project-cover-image" src={p.image} alt={`${p.name} preview`} />
        ) : (
          <i className={p.cover.icon} aria-hidden="true" />
        )}
        <span>{p.cover.label}</span>
      </div>
      {p.badge && <span className="project-card-badge">{p.badge}</span>}
      <div className="project-body">
        <div className="project-lang">{p.stack.join(" · ")}</div>
        <h3 className="project-name">{p.name}</h3>
        <p className="project-desc">{p.description}</p>
        <div className="project-tags">
          {p.tags.map((t) => (
            <span className="project-tag" key={t}>
              #{t}
            </span>
          ))}
        </div>
        {p.links.length > 0 && (
          <footer className="project-actions">
            {p.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className={l.icon === "live" ? "project-btn is-live" : "project-btn"}
                aria-label={`${l.label}: ${p.name}`}
              >
                <Icon name={l.icon} /> {l.label}
              </a>
            ))}
          </footer>
        )}
      </div>
    </article>
  );
}

export default function ProjectBrowser() {
  const [filter, setFilter] = useState("all");
  const gridRef = useRef<HTMLDivElement>(null);
  const shown = projects.filter((p) => matches(p, filter)).length;

  function choose(next: string) {
    // Cards un-hidden by a filter may never have scrolled into view, so reveal them straight away
    gridRef.current?.querySelectorAll(".project-card").forEach((card, i) => {
      if (matches(projects[i], next)) card.classList.add("visible");
    });
    setFilter(next);
  }

  return (
    <>
      <div className="filter-bar reveal">
        <div className="filter-row" role="group" aria-label="Filter projects by stack">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              className={filter === f.id ? "filter-btn active" : "filter-btn"}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => choose(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <span className="filter-summary" aria-live="polite">
          {filter === "all" ? `Showing all ${shown} projects` : `Showing ${shown} of ${projects.length} projects`}
        </span>
      </div>

      <div className="projects-grid" ref={gridRef}>
        {projects.map((p) => (
          <ProjectCard key={p.name} p={p} hidden={!matches(p, filter)} />
        ))}
      </div>
    </>
  );
}
