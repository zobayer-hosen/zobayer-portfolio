"use client";

import type { Experience } from "@/data/experience";
import { formatDuration, formatYm, parseYm, type YearMonth } from "@/lib/dates";
import { useToday } from "@/lib/use-today";

export default function ExperienceCard({ x }: { x: Experience }) {
  const today = useToday();
  const now: YearMonth = [today.getFullYear(), today.getMonth() + 1];
  const start = parseYm(x.start);
  const end = x.end ? parseYm(x.end) : null; // no end date = ongoing
  const active = !end || end[0] * 12 + end[1] >= now[0] * 12 + now[1];
  const duration = start ? formatDuration(start, end ?? now) : "";

  return (
    <article className="exp-card reveal">
      <div className="exp-header exp-company-header">
        <span className="exp-logo" aria-hidden="true">
          {x.logo}
        </span>
        <div className="exp-info">
          <div className="exp-company-row">
            <strong>{x.company}</strong>
          </div>
          {x.location && (
            <div className="exp-meta-row">
              <span className="exp-meta-chip">{x.location}</span>
            </div>
          )}
        </div>
      </div>

      <div className="exp-role">
        <div className="exp-title-row">
          <h3 className="exp-job-title">{x.title}</h3>
          <span className={active ? "exp-status is-active" : "exp-status"}>{active ? "Active" : "Completed"}</span>
        </div>
        {x.type && (
          <div className="exp-company-row">
            <strong>{x.type}</strong>
          </div>
        )}
        {start && (
          <div className="exp-meta-row">
            <span className="exp-meta-chip">
              📅 {formatYm(start)} – {end ? formatYm(end) : "Present"}
              {duration && (
                <>
                  {" · "}
                  <span className="exp-duration">{duration}</span>
                </>
              )}
            </span>
          </div>
        )}
        {x.description && <p className="exp-desc">{x.description}</p>}

        {!!x.projects?.length && (
          <div className="exp-projects-panel">
            <div className="exp-projects-header">{x.projectsLabel ?? "🗂 Key Projects"}</div>
            {x.projects.map((p) => (
              <div className="exp-project" key={p.title}>
                <div className="exp-project-dot" />
                <div>
                  <div className="exp-project-title">{p.title}</div>
                  <div className="exp-project-desc">{p.description}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!!x.skills?.length && (
          <div className="exp-skills-row">
            <span className="exp-skills-label">{x.skillsLabel ?? "Skills"}:</span>
            {x.skills.map((k) => (
              <span className="exp-skill" key={k}>
                {k}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
