import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import type { Project } from "@/app/data/portfolio";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article
      className={`project-card ${project.image ? "project-card--visual" : "project-card--text"}`}
    >
      {project.image ?
        <div className="project-card__image-wrap">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="project-card__image"
          />
        </div>
      : <div className="project-card__text-visual" aria-hidden="true">
          <span>{project.number}</span>
          <p>Product / system / detail</p>
        </div>
      }

      <div className="project-card__content">
        <div className="flex items-start justify-between gap-5">
          <p className="eyebrow">{project.category}</p>
          <span className="font-mono text-xs text-[var(--accent)]">
            {project.number}
          </span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__footer">
          <ul aria-label={`Teknologi ${project.name}`}>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          {project.demoUrl || project.sourceUrl ?
            <div className="flex flex-wrap gap-4">
              {project.demoUrl ?
                <ProjectLink href={project.demoUrl}>Demo</ProjectLink>
              : null}
              {project.sourceUrl ?
                <ProjectLink href={project.sourceUrl}>Source</ProjectLink>
              : null}
            </div>
          : <p className="project-card__private">Case study on request</p>}
        </div>
      </div>
    </article>
  );
}

function ProjectLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="project-link">
      {children}
      <ArrowUpRightIcon className="size-3.5" />
    </a>
  );
}
