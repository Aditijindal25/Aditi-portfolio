import { useState } from "react";

function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  const skillGroups = [
    {
      number: "01",
      title: "Programming",
      description: "Languages & programming fundamentals",
      skills: ["C", "Python", "JavaScript"],
    },
    {
      number: "02",
      title: "Web Development",
      description: "Modern frontend development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Vite",
        "Tailwind CSS",
      ],
    },
    {
      number: "03",
      title: "Problem Solving",
      description: "Logic, algorithms & data structures",
      skills: ["DSA", "Problem Solving", "Algorithm Design"],
    },
    {
      number: "04",
      title: "Fundamentals",
      description: "Core computer science concepts",
      skills: [
        "OOP",
        "DOM Manipulation",
        "Responsive Design",
        "OS",
      ],
    },
    {
      number: "05",
      title: "Tools",
      description: "Development & collaboration workflow",
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      number: "06",
      title: "Cloud & Security",
      description: "Cloud infrastructure & security basics",
      skills: ["IAM", "Basic Security Concepts"],
    },
  ];

  return (
    <main className="page skills-page">

      <div className="page-number">
        02 / SKILLS
      </div>

      <div className="skills-header">

        <div>
          <p className="eyebrow">
            MY TOOLKIT
          </p>

          <h1 className="page-title">
            What I
            <br />
            <span>work with</span>
          </h1>
        </div>

        <div className="skills-intro">

          <span className="skills-intro-label">
            06 AREAS
          </span>

          <p>
            Technologies, concepts and tools I've
            worked with while building projects and
            exploring software development.
          </p>

        </div>

      </div>

      <div className="skills-list">

        {skillGroups.map((skill) => (

          <div
            className={`skill-row ${
              activeSkill === skill.number
                ? "skill-active"
                : ""
            } ${
              activeSkill !== null &&
              activeSkill !== skill.number
                ? "skill-dim"
                : ""
            }`}
            key={skill.number}
            onMouseEnter={() =>
              setActiveSkill(skill.number)
            }
            onMouseLeave={() =>
              setActiveSkill(null)
            }
          >

            <div className="skill-number">
              {skill.number}
            </div>

            <div className="skill-main">

              <h2>
                {skill.title}
              </h2>

              <p className="skill-description">
                {skill.description}
              </p>

            </div>

            <div className="skill-tags">

              {skill.skills.map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}

            </div>

          </div>

        ))}

      </div>

      <div className="skills-footer">

        <span>CORE STACK</span>

        <p>
          React · JavaScript · Python · Git
        </p>

      </div>

    </main>
  );
}

export default Skills;