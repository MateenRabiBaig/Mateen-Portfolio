import Section from "./Section";
import { about } from "../data/profile";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A short introduction">
      <div className="about-grid">
        <div className="about-copy">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
        <dl className="facts">
          {about.facts.map((fact) => (
            <div className="fact" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>
                {fact.href ? <a href={fact.href}>{fact.value}</a> : fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
