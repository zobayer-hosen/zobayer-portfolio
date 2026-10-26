import Image from "next/image";
import heroPhoto from "@/assets/profile-hero.webp";
import { profile, roles } from "@/data/profile";
import { Icon } from "../Icon";
import TypedRole from "./TypedRole";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-visual reveal">
          <div className="hero-avatar-wrap">
            <div className="hero-avatar" data-initials={profile.initials}>
              <Image src={heroPhoto} alt={`${profile.name} profile photo`} width={180} height={180}
                loading="eager" fetchPriority="high" />
            </div>
          </div>
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            Open to Opportunities
          </div>
        </div>

        <h1 className="hero-title reveal reveal-delay-1" id="hero-heading">
          Hi, I&apos;m <span className="hero-title-accent">{profile.firstName}</span>
          <br />
          {profile.lastName}
        </h1>

        <p className="hero-role-line reveal reveal-delay-2">
          <span aria-hidden="true">&gt;&nbsp;</span>
          <span className="sr-only">{roles.join(", ")}.</span>
          <TypedRole />
          <span className="cursor" aria-hidden="true" />
        </p>

        <p className="hero-desc reveal reveal-delay-3">
          Final-semester CSE student at AIUB and Full-Stack Developer at {profile.company}, building{" "}
          <strong>scalable web applications with Next.js, NestJS, TypeScript and PostgreSQL</strong>. I love backend
          fundamentals (API design, authentication, concurrency and system design) and I&apos;m exploring{" "}
          <strong>Go, Docker, CI/CD and agentic AI workflows</strong>.
        </p>

        <div className="hero-links reveal reveal-delay-4">
          <a href={profile.cv} target="_blank" rel="noopener" className="hero-icon-link primary" aria-label="View résumé PDF">
            <Icon name="cv" /> Resume
          </a>
          <a href={`mailto:${profile.email}`} className="hero-icon-link" aria-label={`Email ${profile.firstName}`}>
            <Icon name="mail" /> Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero-icon-link" aria-label="LinkedIn profile">
            <Icon name="linkedin" className="ic-linkedin" /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hero-icon-link" aria-label="GitHub profile">
            <Icon name="github" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
