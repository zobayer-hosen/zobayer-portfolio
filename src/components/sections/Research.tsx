import { Fragment } from "react";
import { research, RESEARCH_STATES } from "@/data/research";

/** Turns `**text**` into a highlighted phrase. */
function Rich({ text }: { text: string }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 ? <strong className="pub-accent" key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>,
  );
}

export default function Research() {
  return (
    <section id="research" aria-labelledby="research-heading">
      <div className="container">
        <div className="text-center">
          <span className="section-label reveal">🔬 Research</span>
          <h2 className="section-title reveal" id="research-heading">Research</h2>
          <p className="section-sub reveal">Ongoing work in explainable machine learning and network security.</p>
        </div>

        <div className="pub-list">
          {research.map((r) => (
            <article className="pub-card reveal" key={r.title}>
              {r.icon && <div className="pub-icon" aria-hidden="true">{r.icon}</div>}
              {r.highlight && (
                <div className="pub-result-badge">
                  <span aria-hidden="true">✦</span> {r.highlight}
                </div>
              )}
              <h3 className="pub-title">{r.title}</h3>
              <p className="pub-meta">{r.meta.join("  ·  ")}</p>
              <p className="pub-abstract">
                <Rich text={r.abstract} />
              </p>
              <ul className="pub-tags">
                {r.tags.map((t) => (
                  <li className="pub-tag" key={t}>{t}</li>
                ))}
              </ul>
              <div className="pub-actions">
                {r.status && <span className={`pub-state is-${r.status}`}>{RESEARCH_STATES[r.status]}</span>}
                {r.links?.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="btn-sm-link">
                    {l.label} ↗
                  </a>
                ))}
                {r.note && <p className="pub-status">✦ {r.note}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
