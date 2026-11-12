import { useState, type FormEvent } from "react";
import Section from "./Section";
import SocialButtons from "./SocialButtons";
import { person } from "../data/profile";

type Errors = { name?: string; email?: string; message?: string };
type Status = "idle" | "sending" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: { name: string; email: string; message: string }): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please add your name.";
  if (!values.email.trim()) {
    errors.email = "Please add your email address.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "That email address doesn't look right.";
  }
  if (!values.message.trim()) {
    errors.message = "Please add a short message.";
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");

    try {
      // FormSubmit relays the message to person.email. The very first
      // submission sends an activation link to that inbox — it must be
      // confirmed once before deliveries start.
      const response = await fetch(
        `https://formsubmit.co/ajax/${person.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name.trim(),
            email: values.email.trim(),
            message: values.message.trim(),
            _subject: `Portfolio message from ${values.name.trim()}`,
            _captcha: "false",
            _template: "table",
          }),
        },
      );

      const data = (await response.json()) as { success?: string | boolean };

      if (response.ok && data.success !== false) {
        setStatus("success");
        setValues({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Want to work together, or just say hi?">
      <div className="contact-grid">
        <div className="contact-copy">
          <p>
            I'm open to frontend, React, and full-stack roles. The quickest way
            to reach me is email, and I usually reply within a day.
          </p>
          <ul className="contact-channels">
            <li>
              <span className="channel-label">Email</span>
              <a href={"mailto:" + person.email}>{person.email}</a>
            </li>
          </ul>
          <SocialButtons />
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              onChange={(event) =>
                setValues((current) => ({ ...current, name: event.target.value }))
              }
            />
            {errors.name && (
              <p className="field-error" id="contact-name-error" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              onChange={(event) =>
                setValues((current) => ({ ...current, email: event.target.value }))
              }
            />
            {errors.email && (
              <p className="field-error" id="contact-email-error" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={values.message}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              onChange={(event) =>
                setValues((current) => ({ ...current, message: event.target.value }))
              }
            />
            {errors.message && (
              <p className="field-error" id="contact-message-error" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          {/* Honeypot — hidden from humans, catches most bots. */}
          <input type="text" name="_honey" className="honeypot" tabIndex={-1} autoComplete="off" />

          <button
            className="button button-solid"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="form-success" role="status">
              Your message is on its way — I'll get back to you at the email
              address you left. You can also reach me directly at {person.email}.
            </p>
          )}
          {status === "error" && (
            <p className="form-error" role="alert">
              The message could not be sent right now. Please try again, or
              email me directly at {person.email}.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
