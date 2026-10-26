import { profile } from "@/data/profile";
import CurrentYear from "./CurrentYear";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-brand">{profile.name}</span>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
        <p>
          © <CurrentYear /> {profile.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
