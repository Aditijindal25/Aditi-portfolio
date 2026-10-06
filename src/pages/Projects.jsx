import { useCallback, useEffect, useRef, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const projects = [
  {
    number: "01",
    title: "LEADFLOW CRM",
    summary: "Full-stack CRM application.",
    technologies: ["React", "JavaScript", "Node.js", "Express", "PostgreSQL"],
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
    summary: "Description to be added.",
    technologies: [],
    github: "https://github.com/Aditijindal25/Smart-Splitter",
  },
  {
    number: "03",
    title: "SKILL SWAP",
    summary: "Description to be added.",
    technologies: ["Vite"],
    github: "https://github.com/Aditijindal25/SKILLSWAP-AI",
  },
  {
    number: "04",
    title: "CAREERLAUNCH",
    summary: "Description to be added.",
    technologies: [],
  },
  {
    number: "05",
    title: "VINES CAFE",
    summary: "Description to be added.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/Aditijindal25/Vines-Cafe",
    live: "https://vines-cafe.vercel.app/",
  },
  {
    number: "06",
    title: "COLLEGE IQ",
    summary: "Description to be added.",
    technologies: [],
  },
];

const projectDetails = ["problem", "approach", "challenge", "learnings"];
const detailLabels = {
  problem: "Problem",
  approach: "Approach",
  challenge: "Challenge",
  learnings: "Learnings",
};

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

  const architecture = project.architecture || [
    { label: "Architecture", value: "Details to be added." },
  ];

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

          <section className="project-architecture" aria-labelledby="project-architecture-title">
            <h3 id="project-architecture-title">Architecture</h3>
            <div className="architecture-flow">
              {architecture.map((node, index) => (
                <div className="architecture-node" key={node.label}>
                  <span>{node.label}</span>
                  <strong>{node.value}</strong>
                  {index < architecture.length - 1 && (
                    <span className="architecture-arrow" aria-hidden="true">→</span>
                  )}
                </div>
              ))}
            </div>
          </section>

          <dl className="case-study-details">
            <div>
              <dt>Tech stack</dt>
              <dd>{project.technologies.length ? project.technologies.join(" · ") : "Details to be added."}</dd>
            </div>
            {projectDetails.map((field) => (
              <div key={field}>
                <dt>{detailLabels[field]}</dt>
                <dd>{project[field] || "Details to be added."}</dd>
              </div>
            ))}
            <div>
              <dt>Project links</dt>
              <dd>
                {project.live || project.github
                  ? [project.live, project.github].filter(Boolean).join(" · ")
                  : "Project links to be added."}
              </dd>
            </div>
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
  const [renderedProjects, setRenderedProjects] = useState(projects);
  const [exitingProjects, setExitingProjects] = useState([]);
  const [enteringProjects, setEnteringProjects] = useState([]);
  const filterTimerRef = useRef(null);
  const renderedProjectsRef = useRef(projects);
  const closeModal = useCallback(() => {
    setSelectedProject(null);
    setModalOpener(null);
  }, []);
  const filters = ["ALL", ...new Set(projects.flatMap((project) => project.technologies.map((tech) => tech.toUpperCase())))];
  useEffect(() => {
    return () => window.clearTimeout(filterTimerRef.current);
  }, []);

  const selectFilter = (filter) => {
    if (filter === activeFilter) return;
    const nextProjects = projects.filter((project) =>
      filter === "ALL" || project.technologies.some((tech) => tech.toUpperCase() === filter),
    );
    const currentProjects = renderedProjectsRef.current;
    const leaving = currentProjects.filter((project) => !nextProjects.includes(project));
    const entering = nextProjects.filter((project) => !currentProjects.includes(project));
    const nextDisplayProjects = [...nextProjects, ...leaving];

    window.clearTimeout(filterTimerRef.current);
    setActiveFilter(filter);
    setExitingProjects(leaving);
    setEnteringProjects(entering);
    renderedProjectsRef.current = nextDisplayProjects;
    setRenderedProjects(nextDisplayProjects);
    filterTimerRef.current = window.setTimeout(() => {
      renderedProjectsRef.current = nextProjects;
      setRenderedProjects(nextProjects);
      setExitingProjects([]);
      setEnteringProjects([]);
    }, 220);
  };

  const openProject = (project, trigger) => {
    setModalOpener(trigger);
    setSelectedProject(project);
  };

  const renderProject = (project) => {
    const isExiting = exitingProjects.includes(project);
    const isEntering = enteringProjects.includes(project);
    return (
    <article
      className={`project-item${isExiting ? " project-item-exiting" : ""}${isEntering ? " project-item-entering" : ""}`}
      data-project-cursor
      data-reveal
      id={`project-${project.number}`}
      key={project.number}
      tabIndex={0}
      inert={isExiting}
      aria-hidden={isExiting}
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
          {project.technologies.length
            ? project.technologies.map((technology) => <span key={technology}>{technology}</span>)
            : <span>Tech details to be added</span>}
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
    <main className="page">
      <div className="page-number">03 / PROJECTS</div>
      <div className="projects-header" data-reveal>
        <p className="eyebrow">SELECTED BUILDS</p>
        <h1 className="page-title">
          Projects with
          <br />
          <span>working parts.</span>
        </h1>
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
        {renderedProjects.map(renderProject)}
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} opener={modalOpener} onClose={closeModal} />
      )}
    </main>
  );
}

export default Projects;
