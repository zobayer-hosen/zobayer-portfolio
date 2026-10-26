import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" aria-labelledby="edu-heading">
      <div className="container">
        <span className="section-label reveal">🎓 Academic Journey</span>
        <h2 className="section-title reveal" id="edu-heading">Education</h2>
        <p className="section-sub reveal">Institutions that shaped my technical foundation.</p>

        <div className="edu-timeline">
          {education.map((e) => (
            <div className="edu-item reveal" key={e.degree}>
              <div className="edu-card">
                <span className="edu-logo" aria-hidden="true">{e.logo}</span>
                <div className="edu-content">
                  <div className="edu-inst">{e.institution}</div>
                  <div className="edu-meta">
                    <h3 className="edu-degree">{e.degree}</h3>
                    <span className="edu-badge year">{e.year}</span>
                    {e.score && <span className="edu-badge score">{e.score}</span>}
                  </div>
                  <p className="edu-desc">{e.description}</p>
                  <ul className="edu-tags">
                    {e.tags.map((t) => (
                      <li className="edu-tag" key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
