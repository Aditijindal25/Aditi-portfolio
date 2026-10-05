import { useState, useEffect } from "react";

function CaseStudyModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("architecture");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="case-study-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <article
        className="case-study-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="case-modal-header">
          <div className="case-modal-meta">
            <span className="case-badge">{project.number} / {project.category.toUpperCase()}</span>
            <span className="case-type-badge">{project.type}</span>
          </div>
          <button className="case-modal-close" onClick={onClose} aria-label="Close modal">
            ESC <span aria-hidden="true">&times;</span>
          </button>
        </div>

        {/* Title & Tagline */}
        <div className="case-modal-intro">
          <h2>{project.title}</h2>
          <p className="case-modal-subtitle">{project.subtitle}</p>
          <p className="case-modal-tagline">{project.tagline}</p>
        </div>

        {/* Key Metrics Banner */}
        <div className="case-metrics-banner">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="case-metric-tile">
              <span className="metric-val">{m.value}</span>
              <span className="metric-name">{m.label}</span>
              <small className="metric-detail">{m.detail}</small>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <nav className="case-tabs-nav" aria-label="Case study sections">
          <button
            className={`case-tab-btn ${activeTab === "architecture" ? "active" : ""}`}
            onClick={() => setActiveTab("architecture")}
          >
            01 / System Architecture
          </button>
          <button
            className={`case-tab-btn ${activeTab === "tradeoffs" ? "active" : ""}`}
            onClick={() => setActiveTab("tradeoffs")}
          >
            02 / Engineering Trade-offs
          </button>
          <button
            className={`case-tab-btn ${activeTab === "code" ? "active" : ""}`}
            onClick={() => setActiveTab("code")}
          >
            03 / Implementation & Code
          </button>
          <button
            className={`case-tab-btn ${activeTab === "stack" ? "active" : ""}`}
            onClick={() => setActiveTab("stack")}
          >
            04 / Stack & Specs
          </button>
        </nav>

        {/* Tab Content */}
        <div className="case-tab-body">
          {activeTab === "architecture" && (
            <section className="tab-pane">
              <div className="case-section-block">
                <h3>THE ENGINEERING CHALLENGE</h3>
                <p>{project.architecture.problem}</p>
              </div>

              <div className="case-section-block">
                <h3>THE ARCHITECTURAL SOLUTION</h3>
                <p>{project.architecture.solution}</p>
              </div>

              <div className="case-section-block">
                <h3>SYSTEM FLOW DIAGRAM</h3>
                <pre className="case-ascii-diagram">
                  <code>{project.architecture.flowDiagram}</code>
                </pre>
              </div>
            </section>
          )}

          {activeTab === "tradeoffs" && (
            <section className="tab-pane">
              <h3>SYSTEM DESIGN TRADE-OFFS & DECISION LOG</h3>
              <p className="tab-lead">
                Every architectural choice involves evaluating constraints against production trade-offs.
              </p>
              <div className="tradeoffs-list">
                {project.architecture.tradeoffs.map((item, idx) => (
                  <div key={idx} className="tradeoff-card">
                    <h4>{item.choice}</h4>
                    <p>{item.rationale}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === "code" && (
            <section className="tab-pane">
              <div className="code-header-bar">
                <span>CORE ENGINE / CRITICAL ALGORITHM</span>
                <span>PRODUCTION LOGIC</span>
              </div>
              <pre className="case-code-block">
                <code>{project.codeSnippet}</code>
              </pre>
            </section>
          )}

          {activeTab === "stack" && (
            <section className="tab-pane">
              <h3>PRODUCTION TECHNOLOGY SPECIFICATION</h3>
              <div className="tech-stack-grid">
                {project.techStack.map((tech, idx) => (
                  <div key={idx} className="tech-item-card">
                    <strong>{tech.name}</strong>
                    <span>{tech.role}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Action Footer */}
        <footer className="case-modal-footer">
          <div className="case-modal-links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="case-action-btn primary"
            >
              VIEW SOURCE CODE <span>&rarr;</span>
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="case-action-btn secondary"
              >
                LIVE SYSTEM DEMO <span>&#8599;</span>
              </a>
            )}
          </div>
          <span className="case-footer-status">&bull; AUDITED FOR PRODUCTION STANDARDS</span>
        </footer>
      </article>
    </div>
  );
}

export default CaseStudyModal;
