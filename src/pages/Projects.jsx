import { useState } from "react";
import { projectsData } from "../data/projectsData";
import CaseStudyModal from "../components/CaseStudyModal";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const categories = [
    "ALL",
    "DISTRIBUTED SYSTEMS",
    "AI & CYBERSECURITY",
    "FRONTEND ARCHITECTURE",
  ];

  const filteredProjects = selectedCategory === "ALL"
    ? projectsData
    : projectsData.filter((p) => {
        if (selectedCategory === "DISTRIBUTED SYSTEMS") {
          return p.category.includes("Distributed") || p.category.includes("Backend");
        }
        if (selectedCategory === "AI & CYBERSECURITY") {
          return p.category.includes("AI");
        }
        if (selectedCategory === "FRONTEND ARCHITECTURE") {
          return p.category.includes("Frontend") || p.category.includes("Real-Time");
        }
        return true;
      });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const openCaseStudy = (project) => {
    setSelectedProject(project);
  };

  return (
    <main className="page projects-page">
      {/* Page Index */}
      <div className="page-number">03 / PRODUCTION SYSTEMS</div>

      {/* Header */}
      <header className="projects-header">
        <p className="eyebrow">ENGINEERING CASE STUDIES</p>
        <h1 className="page-title">
          Architected systems
          <br />
          <span>with measurable impact.</span>
        </h1>
        <p className="projects-lead">
          Production systems spanning distributed transaction algorithms, real-time edge AI telemetry,
          offline-first synchronization, and high-framerate DOM virtualization.
        </p>

        {/* Category Filters */}
        <div className="projects-filter-bar" role="tablist" aria-label="Filter projects by domain">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
              role="tab"
              aria-selected={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Projects List */}
      <div className="projects-list">
        {filteredProjects.map((project) => (
          <article
            className="project-item"
            key={project.number}
            onMouseEnter={() => setActiveProject(project.number)}
            onMouseLeave={() => setActiveProject(null)}
            onMouseMove={handleMouseMove}
            onClick={() => openCaseStudy(project)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openCaseStudy(project);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`View system case study for ${project.title}`}
          >
            <div className={`project-visual project-visual-${project.number}`} aria-hidden="true">
              <span></span>
              <i></i>
            </div>

            {/* Top row: Number and Category */}
            <div className="project-top-row">
              <span className="project-number">{project.number}</span>
              <span className="project-badge">{project.type}</span>
            </div>

            {/* Title and Subtitle */}
            <h2>{project.title}</h2>
            <p className="project-subtext">{project.subtitle}</p>

            {/* High-Impact Metrics Strip */}
            <div className="project-card-metrics">
              {project.metrics.slice(0, 3).map((m, idx) => (
                <div key={idx} className="card-metric-pill">
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>

            {/* Summary */}
            <p className="project-summary-text">{project.summary}</p>

            {/* Focus / Stack */}
            <div className="project-tags-preview">
              {project.focus.split(" · ").map((item, idx) => (
                <span key={idx} className="project-tech-tag">{item}</span>
              ))}
            </div>

            {/* Actions */}
            <div className="project-actions-row">
              <button
                className="case-study-trigger-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  openCaseStudy(project);
                }}
              >
                SYSTEM DESIGN DEEP DIVE &rarr;
              </button>
              <a
                className="project-link"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                GITHUB &#8599;
              </a>
            </div>

            {/* Custom Interactive Floating Cursor */}
            {activeProject === project.number && (
              <div
                className="project-cursor"
                style={{
                  left: `${cursorPosition.x}px`,
                  top: `${cursorPosition.y}px`,
                }}
              >
                SYSTEM
                <br />
                DESIGN &rarr;
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Case Study Deep Dive Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
}

export default Projects;