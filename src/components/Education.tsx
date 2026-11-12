import Section from "./Section";
import { education, certificates } from "../data/profile";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education & certificates" title="Education">
      <div className="education-grid">
        <div className="education-list">
          <h3 className="subheading">Education</h3>
          {education.map((item) => (
            <article className="education-item" key={item.qualification}>
              <h4>{item.qualification}</h4>
              <p className="education-meta">
                {item.institution} · {item.period}
              </p>
              {item.detail && <p>{item.detail}</p>}
            </article>
          ))}
        </div>

        <div className="education-list">
          <h3 className="subheading">Certificates</h3>
          {certificates.length > 0 ? (
            certificates.map((item) => (
              <article className="education-item" key={item.name}>
                <h4>{item.url ? <a href={item.url}>{item.name}</a> : item.name}</h4>
                <p className="education-meta">
                  {item.issuer} · {item.year}
                </p>
              </article>
            ))
          ) : (
            <p className="empty-note">
              No certificates listed yet.
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
