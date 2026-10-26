import { achievements } from "@/data/achievements";
import { practices, skillGroups, toolbox } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <span className="section-label reveal">💡 Capabilities</span>
        <h2 className="section-title reveal" id="skills-heading">Skills</h2>
        <p className="section-sub reveal">Technical depth across full-stack engineering, DevOps and applied AI.</p>

        <div className="skills-cat-grid reveal">
          {skillGroups.map((g) => (
            <div className={`skill-cat-block tone-${g.tone}`} key={g.title}>
              <div className={`skill-cat-header skill-cat-${g.tone}`}>
                <span className="skill-cat-dot" /> {g.title}
              </div>
              <div className="skill-cat-pills">
                {g.items.map((s) => (
                  <span className="skill-cat-pill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-soft-wrap reveal">
          <h3 className="skill-heading">Engineering Practices</h3>
          <div className="soft-pills">
            {practices.map((s) => (
              <span className="soft-pill" key={s}>{s}</span>
            ))}
          </div>
        </div>

        <hr className="divider" />

        <span className="section-label reveal">🔧 Stack</span>
        <h2 className="section-title reveal">Toolbox</h2>
        <p className="section-sub reveal">Languages, frameworks &amp; platforms I use regularly.</p>
        <div className="toolbox-grid reveal" role="list">
          {toolbox.map((t) => (
            <div className="tool-tile" role="listitem" key={t.name}>
              <i className={`${t.icon} ${t.ink ? "is-ink" : "colored"} tool-icon`} aria-hidden="true" />
              <span>{t.name}</span>
            </div>
          ))}
        </div>

        <hr className="divider" />

        <span className="section-label reveal">🏅 Recognition</span>
        <h2 className="section-title reveal">Honours &amp; Achievements</h2>
        <p className="section-sub reveal">Awards, verified credentials and languages.</p>
        <div className="achieve-grid">
          {achievements.map((a, i) => (
            <div className={i ? `achieve-card reveal reveal-delay-${i}` : "achieve-card reveal"} key={a.title}>
              <div className="achieve-icon" aria-hidden="true">{a.icon}</div>
              <div className="achieve-title">{a.title}</div>
              <ul className="mini-list">
                {a.items.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <br />
                    <span className="mini-meta">{item.meta}</span>
                  </li>
                ))}
              </ul>
              {a.link && (
                <a href={a.link.url} className="btn-sm-link"
                  {...(a.link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  {a.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
