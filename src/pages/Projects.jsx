import { useState } from "react";

function Projects() {
  const [cursorVisible, setCursorVisible] = useState(false);

  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

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

  return (
    <main className="page">

      <div className="page-number">
        03 / PROJECTS
      </div>

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

      <div className="projects-list">

        {projects.map((project) => (

          <div
            className="project-item"
            key={project.number}
            onMouseEnter={() => setCursorVisible(true)}
            onMouseLeave={() => setCursorVisible(false)}
            onMouseMove={handleMouseMove}
          >

            <span className="project-number">
              {project.number}
            </span>

            <h2>
              {project.title}
            </h2>

            <p>
              {project.description}
            </p>

            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              VIEW →
            </a>

          </div>

        ))}

      </div>

      {cursorVisible && (
  <div
    className="project-cursor"
    style={{
      left: `${cursorPosition.x}px`,
      top: `${cursorPosition.y}px`,
    }}
  >
    VIEW PROJECT →
  </div>
)}

    </main>
  );
}

export default Projects;