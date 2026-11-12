import { person } from "../data/profile";

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <p className="eyebrow">{person.role}</p>
        <h1 id="hero-title">
          Hi, I'm {person.name}.<br />
          I build React apps that stay fast and easy to maintain.
        </h1>
        <p className="hero-intro">{person.intro}</p>
        <div className="hero-actions">
          <a className="button button-solid" href="#projects">
            View Projects
          </a>
          <a className="button button-outline" href="#contact">
            Contact Me
          </a>
        </div>
        <dl className="hero-meta">
          <div>
            <dt>Location</dt>
            <dd>{person.location}</dd>
          </div>
          <div>
            <dt>GitHub</dt>
            <dd>
              <a href={person.github}>MateenRabiBaig</a>
            </dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>React · TypeScript · React Native</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
