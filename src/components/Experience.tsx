import Section from "./Section";
import { experience } from "../data/profile";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="timeline">
        {experience.map((item) => (
          <li key={item.title}>
            <div className="timeline-meta">
              <span className="timeline-period">{item.period}</span>
            </div>
            <div className="timeline-body">
              <h3>{item.title}</h3>
              <p className="timeline-org">{item.org}</p>
              <p className="timeline-tech">
                <strong>Tech:</strong> {item.tech}
              </p>
              <p>{item.summary}</p>
              <ul className="timeline-details">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
