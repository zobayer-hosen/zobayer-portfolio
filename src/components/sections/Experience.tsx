import { experience } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-heading">
      <div className="container">
        <span className="section-label reveal">💼 Work History</span>
        <h2 className="section-title reveal" id="exp-heading">Experience</h2>
        <p className="section-sub reveal">Where I build, ship and research.</p>

        <div className="exp-list">
          {experience.map((x) => (
            <ExperienceCard key={`${x.company}-${x.start}`} x={x} />
          ))}
        </div>
      </div>
    </section>
  );
}
