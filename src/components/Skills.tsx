import Section from "./Section";
import SkillIcon from "./SkillIcon";
import { skillGroups } from "../data/profile";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      wide
    >
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <section className="skill-group" key={group.title} aria-labelledby={"skills-" + group.title.replace(/[^a-z]/gi, "")}>
            <h3 id={"skills-" + group.title.replace(/[^a-z]/gi, "")}>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>
                  <SkillIcon name={skill} />
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
