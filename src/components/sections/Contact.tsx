import { references } from "@/data/achievements";
import { profile } from "@/data/profile";
import { Icon } from "../Icon";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <span className="section-label reveal">📬 Get in Touch</span>
        <h2 className="section-title reveal" id="contact-heading">Contact Me</h2>

        <div className="contact-card reveal">
          <p className="contact-tagline">
            I&apos;m open to full-stack and backend developer roles, AI engineering opportunities, research
            collaborations and exciting projects. Based in {profile.location}. Feel free to reach out.
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="contact-link primary-link" aria-label={`Send email to ${profile.firstName}`}>
              <Icon name="mail" /> {profile.email}
            </a>
            <a href={profile.phoneHref} className="contact-link" aria-label={`Call ${profile.phone}`}>
              <Icon name="phone" /> {profile.phone}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="View LinkedIn profile">
              <Icon name="linkedin" className="ic-linkedin" /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="View GitHub profile">
              <Icon name="github" /> GitHub
            </a>
            <a href={profile.cv} target="_blank" rel="noopener" className="contact-link" aria-label="View résumé PDF">
              <Icon name="cv" /> Resume
            </a>
          </div>

          <div className="contact-form-wrap">
            <h3 className="contact-form-title">Send a Message</h3>
            <ContactForm email={profile.email} />
          </div>
        </div>

        <div className="refs-head reveal">
          <h3 className="refs-title">References</h3>
        </div>
        <div className="refs-grid">
          {references.map((r, i) => (
            <article className={i ? `ref-card reveal reveal-delay-${i}` : "ref-card reveal"} key={r.email}>
              <h4>{r.name}</h4>
              <p className="ref-role">{r.role}</p>
              <p className="ref-dept">{r.org}</p>
              <div className="ref-links">
                <a href={`mailto:${r.email}`}>
                  <Icon name="mail" /> {r.email}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
