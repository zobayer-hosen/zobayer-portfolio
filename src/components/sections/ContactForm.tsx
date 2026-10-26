"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "../Icon";

type Field = HTMLInputElement | HTMLTextAreaElement;

/** No backend: a valid form opens the visitor's email app with the message filled in. */
export default function ContactForm({ email }: { email: string }) {
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<{ text: string; error: boolean } | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = Array.from(form.querySelectorAll<Field>(".cf-input, .cf-textarea"));
    const bad = Object.fromEntries(fields.map((f) => [f.name, !f.checkValidity() || !f.value.trim()]));
    setInvalid(bad);

    const firstBad = fields.find((f) => bad[f.name]);
    if (firstBad) {
      setStatus({ text: "✗ Please fill in every field with a valid email address.", error: true });
      firstBad.focus();
      return;
    }

    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const body = `Name: ${get("name")}\nEmail: ${get("email")}\n\n${get("message")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(get("subject"))}&body=${encodeURIComponent(body)}`;
    setStatus({ text: `✓ Opening your email app… If nothing happens, write to ${email}.`, error: false });
  }

  // Clear a field's error as soon as it becomes valid
  function onInput(e: FormEvent<HTMLFormElement>) {
    const f = e.target as Field;
    if (invalid[f.name] && f.checkValidity() && f.value.trim()) setInvalid({ ...invalid, [f.name]: false });
  }

  const cls = (base: string, name: string) => (invalid[name] ? `${base} is-invalid` : base);

  return (
    <form className="contact-form" id="contactForm" noValidate onSubmit={onSubmit} onInput={onInput}>
      <div className="cf-row">
        <div className="cf-field">
          <label className="cf-label" htmlFor="cf-name">Name</label>
          <input className={cls("cf-input", "name")} id="cf-name" name="name" type="text" autoComplete="name"
            placeholder="Your name" required aria-invalid={!!invalid.name} />
        </div>
        <div className="cf-field">
          <label className="cf-label" htmlFor="cf-email">Email</label>
          <input className={cls("cf-input", "email")} id="cf-email" name="email" type="email" autoComplete="email"
            placeholder="you@example.com" required aria-invalid={!!invalid.email} />
        </div>
      </div>
      <div className="cf-field">
        <label className="cf-label" htmlFor="cf-subject">Subject</label>
        <input className={cls("cf-input", "subject")} id="cf-subject" name="subject" type="text"
          placeholder="Job opportunity, collaboration, project…" required aria-invalid={!!invalid.subject} />
      </div>
      <div className="cf-field">
        <label className="cf-label" htmlFor="cf-message">Message</label>
        <textarea className={cls("cf-textarea", "message")} id="cf-message" name="message" rows={5}
          placeholder="Tell me a bit about it…" required aria-invalid={!!invalid.message} />
      </div>
      <button className="cf-submit" type="submit">
        <Icon name="send" /> Send Message
      </button>
      <p className={status?.error ? "cf-status is-error" : "cf-status"} role="status" aria-live="polite">
        {status?.text}
      </p>
    </form>
  );
}
