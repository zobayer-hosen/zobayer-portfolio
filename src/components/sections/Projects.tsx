import { profile } from "@/data/profile";
import { Icon } from "../Icon";
import ProjectBrowser from "./ProjectBrowser";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="proj-heading">
      <div className="container">
        <div className="text-center">
          <span className="section-label reveal">🚀 Work</span>
          <h2 className="section-title reveal" id="proj-heading">Projects</h2>
          <p className="section-sub reveal">
            Full-stack apps, backend APIs and UI builds, from race-safe booking systems to multi-AI platforms.
          </p>
        </div>

        <ProjectBrowser />

        <div className="projects-more">
          <a className="show-all-btn" href={profile.github} target="_blank" rel="noopener noreferrer">
            More on GitHub <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
