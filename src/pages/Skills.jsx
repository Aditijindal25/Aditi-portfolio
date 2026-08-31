import { useState } from "react";

function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  const skillGroups = [
    {
      number: "01",
      title: "PROGRAMMING",
      skills: "C · Python · JavaScript"
    },

    {
      number: "02",
      title: "WEB DEVELOPMENT",
      skills: "HTML · CSS · JavaScript · React · Vite · Tailwind CSS"
    },

    {
      number: "03",
      title: "PROBLEM SOLVING",
      skills: "DSA · Problem Solving · Algorithm Design"
    },

    {
      number: "04",
      title: "FUNDAMENTALS",
      skills: "OOP · DOM Manipulation · Responsive Design"
    },

    {
      number: "05",
      title: "TOOLS",
      skills: "Git · GitHub · VS Code"
    },

    {
      number: "06",
      title: "CLOUD & SECURITY",
      skills: "IAM · Basic Security Concepts"
    }
  ];

  return (
    <main className="page">

      <div className="page-number">
        02 / SKILLS
      </div>

      <div className="skills-header">

        <div>

          <p className="eyebrow">
            MY TOOLKIT
          </p>

          <h1 className="page-title">
            Things I
            <br />
            <span>work with.</span>
          </h1>

        </div>

        <p className="skills-description">
          Technologies, concepts and tools I've
          worked with while building projects and
          exploring software development.
        </p>

      </div>

      <div className="skills-list">

        {skillGroups.map((skill) => (

  <div
    className={`skill-row ${
      activeSkill === skill.number ? "skill-active" : ""
    } ${
      activeSkill !== null && activeSkill !== skill.number
        ? "skill-dim"
        : ""
    }`}
    key={skill.number}
    onMouseEnter={() => setActiveSkill(skill.number)}
    onMouseLeave={() => setActiveSkill(null)}
  >

            <span>{skill.number}</span>

            <h2>{skill.title}</h2>

            <p>{skill.skills}</p>

            <strong>→</strong>

          </div>

        ))}

      </div>

    </main>
  );
}

export default Skills;