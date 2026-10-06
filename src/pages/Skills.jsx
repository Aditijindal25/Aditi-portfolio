const coreSkills = [
  { name: "React", context: "Frontend library", project: "Leadflow CRM", href: "https://leadflow-crm-orcin.vercel.app/" },
  { name: "JavaScript", context: "Application language", project: "Leadflow CRM", href: "https://leadflow-crm-orcin.vercel.app/" },
  { name: "Node.js", context: "Server runtime", project: "Leadflow CRM", href: "https://leadflow-crm-orcin.vercel.app/" },
  { name: "Express", context: "Backend framework", project: "Leadflow CRM", href: "https://leadflow-crm-orcin.vercel.app/" },
  { name: "PostgreSQL", context: "Relational database", project: "Leadflow CRM", href: "https://leadflow-crm-orcin.vercel.app/" },
  { name: "Python", context: "Programming language" },
  { name: "Git", context: "Version control", project: "Leadflow CRM", href: "https://github.com/Aditijindal25/Leadflow-crm" },
  { name: "Vite", context: "Frontend build tool", project: "Skill Swap", href: "https://github.com/Aditijindal25/SKILLSWAP-AI" },
];

const projectEvidence = [
  { technology: "React", project: "Leadflow CRM", href: "https://leadflow-crm-orcin.vercel.app/", context: "Frontend development" },
  { technology: "JavaScript", project: "Leadflow CRM", href: "https://leadflow-crm-orcin.vercel.app/", context: "Application logic" },
  { technology: "HTML", project: "The Vines Cafe", href: "https://vines-cafe.vercel.app/", context: "Web structure" },
  { technology: "CSS", project: "The Vines Cafe", href: "https://vines-cafe.vercel.app/", context: "Interface styling" },
  { technology: "Vite", project: "Skill Swap", href: "https://github.com/Aditijindal25/SKILLSWAP-AI", context: "Development tooling" },
  { technology: "Git", project: "Leadflow CRM", href: "https://github.com/Aditijindal25/Leadflow-crm", context: "Source control" },
  { technology: "AI / ML", project: "Kavachx / Rakshak AI", context: "Project work" },
];

const comfortableSkills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "PostgreSQL",
  "REST APIs",
  "Python",
  "Vite",
  "Git",
];

const learningSkills = [
  {
    name: "Data Structures & Algorithms",
    description: "Currently strengthening algorithmic problem solving.",
  },
  {
    name: "AI / ML",
    description: "Exploring intelligent systems through project work.",
  },
  {
    name: "Cloud / Security",
    description: "Learning practical cloud and identity concepts.",
  },
];

function Skills() {
  return (
    <main className="page skills-page">
      <div className="page-number">02 / SKILLS</div>

      <header className="skills-header" data-reveal>
        <div>
          <p className="eyebrow">TECH I USE AND STUDY</p>
          <h1 className="page-title skills-page-title">
            What I
            <br />
            <span>work with.</span>
          </h1>
        </div>
        <p className="skills-intro">Technologies I use to build, experiment, and keep learning.</p>
      </header>

      <div className="skills-list">
        <section className="skill-group" aria-labelledby="core-stack-title" data-reveal>
          <div className="skill-section-heading">
            <h2 className="eyebrow" id="core-stack-title">01 / CORE STACK</h2>
          </div>
          <div className="core-skill-grid">
            {coreSkills.map((skill) => (
              <article className="core-skill" key={skill.name}>
                <h3>{skill.name}</h3>
                <p>{skill.context}</p>
                {skill.project && (
                  <a href={skill.href} target="_blank" rel="noopener noreferrer">
                    {skill.project}<span aria-hidden="true"> ↗</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="skill-group" aria-labelledby="project-evidence-title" data-reveal>
          <div className="skill-section-heading skill-section-heading-inline">
            <p className="eyebrow">02 / PROJECT EVIDENCE</p>
            <h2 id="project-evidence-title">Where the tools become real.</h2>
          </div>
          <div className="evidence-grid">
            {projectEvidence.map((item) => (
              <article className="evidence-card" key={`${item.technology}-${item.project}`}>
                <div>
                  <h3>{item.technology}</h3>
                  <p>{item.context}</p>
                </div>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.project}<span aria-hidden="true"> ↗</span>
                  </a>
                ) : (
                  <span className="evidence-project">{item.project}</span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="skill-group" aria-labelledby="comfortable-title" data-reveal>
          <div className="skill-section-heading">
            <p className="eyebrow">03 / COMFORTABLE WITH</p>
            <h2 className="sr-only" id="comfortable-title">Technologies I’m comfortable with</h2>
          </div>
          <ul className="comfortable-grid">
            {comfortableSkills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </section>

        <section className="skill-group" aria-labelledby="learning-title" data-reveal>
          <div className="skill-section-heading">
            <p className="eyebrow">04 / CURRENTLY LEARNING</p>
            <h2 className="sr-only" id="learning-title">Areas I’m currently learning</h2>
          </div>
          <div className="learning-grid">
            {learningSkills.map((skill) => (
              <article className="learning-card" key={skill.name}>
                <span>EXPLORING</span>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Skills;
