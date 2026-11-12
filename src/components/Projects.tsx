import Section from "./Section";
import { otherProjects, projects, type Project } from "../data/profile";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      {project.image && (
        <img
          className="project-image"
          src={project.image}
          alt={project.imageAlt ?? ""}
          loading="lazy"
          width="1200"
          height="750"
        />
      )}
      <div className="project-body">
        <div className="project-title-row">
          <h3>{project.name}</h3>
          {project.year && <span className="project-year">{project.year}</span>}
        </div>
        <p className="project-tagline">{project.tagline}</p>

        <dl className="project-details">
          <div>
            <dt>Problem / purpose</dt>
            <dd>{project.purpose}</dd>
          </div>
          <div>
            <dt>My contribution</dt>
            <dd>{project.contribution}</dd>
          </div>
          <div>
            <dt>Built with</dt>
            <dd>
              <ul className="tech-list">
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <div className="project-links">
          {project.liveUrl && (
            <a
              className="button button-small button-solid"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live demo
              <svg
                className="button-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </a>
          )}
          {project.sourceUrl && (
            <a
              className="button button-small button-outline"
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="button-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
              </svg>
              Source code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      wide
    >
      <p className="skills-note">
        Real repositories with honest links — if a project has no live demo,
        it means the deployment has been retired.
      </p>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <h3 className="subheading other-projects-heading">More on GitHub</h3>
      <div className="other-project-grid">
        {otherProjects.map((project) => (
          <article className="other-project" key={project.name}>
            <div className="project-title-row">
              <h3>{project.name}</h3>
            </div>
            <p>{project.tagline}</p>
            <ul className="tech-list" aria-label={`${project.name} technologies`}>
              {project.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.sourceUrl && (
              <a href={project.sourceUrl}>View source code</a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
