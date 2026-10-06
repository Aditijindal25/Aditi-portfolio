import { useCallback, useEffect, useRef, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const projects = [
  {
    number: "01",
    title: "LEADFLOW CRM",
    summary: "Full-stack CRM application designed to manage leads, contacts and customer workflows through a structured business dashboard.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs"],
    architecture: [
      { label: "Frontend", value: "React" },
      { label: "API", value: "Node.js · Express" },
      { label: "Database", value: "PostgreSQL" },
    ],
    github: "https://github.com/Aditijindal25/Leadflow-crm",
    live: "https://leadflow-crm-orcin.vercel.app/",
  },
  {
    number: "02",
    title: "SMART SPLITTER",
    summary: "Expense management application that helps users organize shared expenses, split costs and track spending through an intuitive interface.",
    technologies: ["React", "Vite"],
    github: "https://github.com/Aditijindal25/Smart-Splitter",
  },
  {
    number: "03",
    title: "SKILL SWAP",
    summary: "Interactive learning platform that connects people around skills and knowledge sharing, creating a simple way to discover and exchange expertise.",
    technologies: ["React", "Vite", "JavaScript"],
    github: "https://github.com/Aditijindal25/SKILLSWAP-AI",
  },
  {
    number: "04",
    title: "CAREERLAUNCH",
    summary: "Career-focused web application that brings useful career resources and tools together in a structured and accessible experience.",
    technologies: ["JavaScript", "Web Development"],
    github: "https://github.com/Aditijindal25/CARRERLAUNCH",
  },
  {
    number: "05",
    title: "VINES CAFE",
    summary: "Responsive café website designed to create a polished digital experience for exploring the brand, menu and overall hospitality experience.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/Aditijindal25/Vines-Cafe",
    live: "https://vines-cafe.vercel.app/",
  },
  {
    number: "06",
    title: "COLLEGE IQ",
    summary: "College-focused web application designed to organize and present useful academic information through a simple, accessible interface.",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "MongoDB"],
    github: "https://github.com/Aditijindal25/COLLEGEIQ",
  },
];

function ProjectModal({ project, opener, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab") {
        const focusable = [...dialogRef.current.querySelectorAll(
          "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])",
        )];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      opener?.focus();
    };
  }, [onClose, opener]);

  return (
    <div
      className="case-study-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article
        ref={dialogRef}
        className="case-study"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        tabIndex={-1}
      >
        <div className="case-study-topline">
          <span>{project.number} / PROJECT DETAILS</span>
          <button
            ref={closeButtonRef}
            className="case-study-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            CLOSE <b>×</b>
          </button>
        </div>
        <div className="case-study-content">
          <p className="eyebrow">PROJECT</p>
          <h2 id="project-dialog-title">{project.title}</h2>
          <p className="case-study-summary">{project.summary}</p>

          {project.architecture && (
            <section className="project-architecture" aria-labelledby="project-architecture-title">
              <h3 id="project-architecture-title">Architecture</h3>
              <div className="architecture-flow">
                {project.architecture.map((node, index) => (
                  <div className="architecture-node" key={node.label}>
                    <span>{node.label}</span>
                    <strong>{node.value}</strong>
                    {index < project.architecture.length - 1 && (
                      <span className="architecture-arrow" aria-hidden="true">→</span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          <dl className="case-study-details">
            {project.technologies.length > 0 && (
              <div>
                <dt>Tech stack</dt>
                <dd>{project.technologies.join(" · ")}</dd>
              </div>
            )}
            {(project.live || project.github) && (
              <div>
                <dt>Project links</dt>
                <dd>{[project.live, project.github].filter(Boolean).join(" · ")}</dd>
              </div>
            )}
          </dl>

          <div className="case-study-actions">
            {project.live && (
              <a className="case-study-link" href={project.live} target="_blank" rel="noopener noreferrer">
                LIVE DEMO ↗
              </a>
            )}
            {project.github && (
              <a className="case-study-link" href={project.github} target="_blank" rel="noopener noreferrer">
                GITHUB ↗
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpener, setModalOpener] = useState(null);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const closeModal = useCallback(() => {
    setSelectedProject(null);
    setModalOpener(null);
  }, []);
  const filters = ["ALL", ...new Set(projects.flatMap((project) => project.technologies.map((tech) => tech.toUpperCase())))];

  const selectFilter = (filter) => {
    setActiveFilter(filter);
  };

  const openProject = (project, trigger) => {
    setModalOpener(trigger);
    setSelectedProject(project);
  };

  const renderProject = (project) => {
    const isVisible = activeFilter === "ALL"
      || project.technologies.some((technology) => technology.toUpperCase() === activeFilter);
    return (
    <article
      className="project-item"
      data-project-cursor
      data-reveal
      id={`project-${project.number}`}
      key={project.number}
      tabIndex={0}
      hidden={!isVisible}
      inert={!isVisible}
      aria-hidden={!isVisible}
      role="group"
      aria-label={`${project.title}. Press Enter or Space to view project details.`}
      aria-haspopup="dialog"
      onClick={(event) => {
        if (!event.target.closest("a")) openProject(project, event.currentTarget);
      }}
      onKeyDown={(event) => {
        if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          openProject(project, event.currentTarget);
        }
      }}
    >
      <span className="project-number">{project.number}</span>
      <div className="project-copy">
        <h2>{project.title}</h2>
        <p>{project.summary}</p>
        <div className="project-technologies" aria-label="Technologies">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </div>
      <div className="project-actions">
        <button
          className="project-link project-case-study-button"
          onClick={(event) => {
            event.stopPropagation();
            openProject(project, event.currentTarget);
          }}
        >
          DETAILS <span aria-hidden="true">↗</span>
        </button>
        {project.live && (
          <a className="project-link" href={project.live} target="_blank" rel="noopener noreferrer">
            LIVE DEMO <span aria-hidden="true">↗</span>
          </a>
        )}
        {project.github && (
          <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer">
            GITHUB <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
    );
  };

  return (
    <main className="page projects-page">
      <div className="page-number">03 / PROJECTS</div>
      <div className="projects-header" data-reveal>
        <p className="eyebrow">SELECTED BUILDS</p>
        <h1 className="page-title">
          Things I&apos;ve
          <br />
          <span>built.</span>
        </h1>
        <p className="projects-intro">
          Selected work across web development, full-stack applications, interfaces and software systems.
        </p>
        <p className="projects-meta">06 PROJECTS <span>·</span> WEB · FULL STACK · SOFTWARE</p>
      </div>

      <div className="project-filters" role="group" aria-label="Filter projects by technology" data-reveal>
        {filters.map((filter) => (
          <button
            className={activeFilter === filter ? "project-filter active" : "project-filter"}
            type="button"
            key={filter}
            aria-pressed={activeFilter === filter}
            onClick={() => selectFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <section className="projects-list" aria-label="All projects">
        {projects.map(renderProject)}
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} opener={modalOpener} onClose={closeModal} />
      )}
    </main>
  );
}

export default Projects;
