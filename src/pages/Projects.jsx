import { useState } from "react";
import { useEffect } from "react";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  const projects = [
    {
      number: "01",
      title: "SMART SPLITTER",
      description:
        "EXPENSE MANAGEMENT · React.js · Vite · Tailwind CSS · Chart.js · DATA VISUALIZATION",
      summary:
        "A focused expense management interface that turns everyday spending into a clear, visual workflow.",
      focus: "Data visualization · Responsive UI · Product clarity",
      github: "https://github.com/Aditijindal25/Smart-Splitter",
    },
    {
      number: "02",
      title: "SKILL SWAP",
      description:
        "LEARNING PLATFORM · React.js · Vite · JavaScript · PRODUCT WORKFLOW",
      summary:
        "A learning platform concept designed around exchanging skills and making peer-to-peer growth easier to navigate.",
      focus: "Interaction design · Frontend architecture · User flow",
      github: "https://github.com/Aditijindal25/SKILLSWAP-AI",
    },
    {
      number: "03",
      title: "CAREERLAUNCH",
      description:
        "CAREER DASHBOARD · JavaScript · WEB DEVELOPMENT · INFORMATION DESIGN",
      summary:
        "A career dashboard that organizes development opportunities into a more useful, scannable experience.",
      focus: "Information design · JavaScript · Responsive layouts",
      github: "https://github.com/Aditijindal25/CARRERLAUNCH",
    },
    {
      number: "04",
      title: "PHOTOGRAPHY SITE",
      description:
        "VISUAL WEB DESIGN · HTML · CSS · RESPONSIVE UI",
      summary:
        "A responsive visual site built to give photography a clean, deliberate stage across screen sizes.",
      focus: "Visual hierarchy · HTML · CSS · Responsive UI",
      github: "https://github.com/Aditijindal25/PHOTOGRAPHY-SITE",
    },
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const openCaseStudy = (project, event) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    setSelectedProject({
      project,
      origin: {
        x: bounds.left,
        y: bounds.top,
        width: bounds.width,
        height: bounds.height,
      },
    });
  };

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <main className="page">

      {/* Page Number */}
      <div className="page-number">
        03 / PROJECTS
      </div>

      {/* Header */}
      <div className="projects-header">
        <p className="eyebrow">
          SELECTED WORK
        </p>

        <h1 className="page-title">
          Selected work
          <br />
          <span>with intent.</span>
        </h1>
      </div>

      {/* Projects List */}
      <div className="projects-list">

        {projects.map((project) => (
          <div
            className="project-item"
            key={project.number}
            onMouseEnter={() => setActiveProject(project.number)}
            onMouseLeave={() => setActiveProject(null)}
            onMouseMove={handleMouseMove}
            onClick={(event) => openCaseStudy(project, event)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openCaseStudy(project, event);
              }
            }}
            role="button"
            tabIndex="0"
          >

            <div className={`project-visual project-visual-${project.number}`} aria-hidden="true">
              <span></span>
              <i></i>
            </div>

            {/* Number */}
            <span className="project-number">
              {project.number}
            </span>

            {/* Title */}
            <h2>
              {project.title}
            </h2>

            {/* Description */}
            <p>
              {project.description}
            </p>

            {/* GitHub */}
            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              VIEW →
            </a>

            {/* Custom Cursor */}
            {activeProject === project.number && (
              <div
                className="project-cursor"
                style={{
                  left: `${cursorPosition.x}px`,
                  top: `${cursorPosition.y}px`,
                }}
              >
                VIEW
                <br />
                PROJECT →
              </div>
            )}

          </div>
        ))}

      </div>

      {selectedProject && (
        <div className="case-study-overlay" onMouseDown={() => setSelectedProject(null)}>
          <article
            className="case-study"
            style={{
              "--case-x": `${selectedProject.origin.x}px`,
              "--case-y": `${selectedProject.origin.y}px`,
              "--case-scale-x": selectedProject.origin.width / window.innerWidth,
              "--case-scale-y": selectedProject.origin.height / window.innerHeight,
            }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="case-study-topline">
              <span>{selectedProject.project.number} / CASE STUDY</span>
              <button className="case-study-close" onClick={() => setSelectedProject(null)} aria-label="Close case study">
                ESC <b>×</b>
              </button>
            </div>

            <div className="case-study-content">
              <p className="eyebrow">SELECTED BUILD</p>
              <h2>{selectedProject.project.title}</h2>
              <p className="case-study-summary">{selectedProject.project.summary}</p>

              <div className="case-study-details">
                <div>
                  <span>FOCUS</span>
                  <strong>{selectedProject.project.focus}</strong>
                </div>
                <div>
                  <span>STACK</span>
                  <strong>{selectedProject.project.description.split(" · ").slice(1).join(" · ")}</strong>
                </div>
              </div>

              <a className="case-study-link" href={selectedProject.project.github} target="_blank" rel="noopener noreferrer">
                OPEN REPOSITORY <span>↗</span>
              </a>
            </div>
          </article>
        </div>
      )}

    </main>
  );
}

export default Projects;