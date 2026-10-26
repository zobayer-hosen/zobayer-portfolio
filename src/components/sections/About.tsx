import Image from "next/image";
import aboutPhoto from "@/assets/profile-about.webp";
import { interests, metrics, profile } from "@/data/profile";
import { CountUp } from "../Effects";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <div className="about-img-frame">
              <div className="about-img" data-initials={profile.initials}>
                <Image src={aboutPhoto} alt={profile.name} width={380} height={475} />
              </div>
            </div>
          </div>

          <div className="about-text">
            <span className="section-label reveal">👤 Who I Am</span>
            <h2 className="section-title reveal" id="about-heading">About Me</h2>
            <p className="reveal">
              I am a <span className="highlight">final-semester Computer Science &amp; Engineering student at AIUB</span>{" "}
              and a <span className="highlight">Full-Stack Developer at {profile.company}</span>, where I build company
              websites, RESTful APIs and responsive interfaces for IoT monitoring and control. I care most about{" "}
              <span className="highlight">backend fundamentals: API design, database architecture, authentication, concurrency and system design</span>.
            </p>
            <p className="reveal">
              I have shipped a <span className="highlight">ride-pooling platform with 91 passing tests and race-safe booking</span>,
              a <span className="highlight">multi-AI chat API that streams answers from OpenAI, Anthropic and Gemini</span> and
              a role-based hospital management system. Beyond engineering, I research{" "}
              <span className="highlight">explainable machine learning</span> for crop-yield prediction and network-traffic
              detection of APT command-and-control, and I&apos;m exploring AI agents and agentic workflows.
            </p>

            <div className="metrics" role="list" aria-label="Quick stats">
              {metrics.map((m, i) => (
                <div className={`metric-box reveal reveal-delay-${i + 1}`} role="listitem" key={m.label}>
                  <span className="metric-icon" aria-hidden="true">{m.icon}</span>
                  <div className="metric-number">
                    <CountUp value={m.value} decimals={m.decimals} />
                    {m.suffix}
                  </div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="divider" />

        <span className="section-label reveal">🎯 Focus Areas</span>
        <h2 className="section-title reveal">Interests</h2>
        <p className="section-sub reveal">Domains I&apos;m actively building and learning in.</p>
        <ul className="interests-grid reveal">
          {interests.map((it) => (
            <li className="interest-chip" tabIndex={0} data-tooltip={it.tip} key={it.label}>
              {it.icon} {it.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
