import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  wide?: boolean;
};

export default function Section({ id, title, eyebrow, children, wide }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={id + "-title"}>
      <div className={wide ? "container container-wide" : "container"}>
        <header className="section-heading">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 id={id + "-title"}>{title}</h2>
        </header>
        {children}
      </div>
    </section>
  );
}
