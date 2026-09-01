import { useState } from "react";

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
        "EXPENSE MANAGEMENT · React.js · Vite · Tailwind CSS · Chart.js",
      github: "https://github.com/Aditijindal25/Smart-Splitter",
    },
    {
      number: "02",
      title: "SKILL SWAP",
      description:
        "LEARNING PLATFORM · React.js · Vite · JavaScript",
      github: "https://github.com/Aditijindal25/SKILLSWAP-AI",
    },
    {
      number: "03",
      title: "CAREERLAUNCH",
      description:
        "CAREER DASHBOARD · JavaScript · Web Development",
      github: "https://github.com/Aditijindal25/CARRERLAUNCH",
    },
    {
      number: "04",
      title: "PHOTOGRAPHY SITE",
      description:
        "VISUAL WEB DESIGN · HTML · CSS",
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
          Things I've
          <br />
          <span>built.</span>
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
          >

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

    </main>
  );
}

export default Projects;