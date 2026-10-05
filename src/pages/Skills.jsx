import { useState } from "react";

function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  const skillGroups = [
    {
      number: "01",
      title: "Systems & Core Languages",
      description: "Low-level awareness, statically typed contracts, and asynchronous event loops",
      skills: ["TypeScript", "Python", "C / C++", "JavaScript (ESNext)", "SQL", "POSIX Shell"],
      capabilities: [
        "Memory Awareness & Pointers",
        "Strict Type-Safe API Contracts",
        "Async Event Loop Optimization",
      ],
    },
    {
      number: "02",
      title: "Frontend Systems & Web Performance",
      description: "High-framerate rendering, state machines, offline persistence, and Web Vitals",
      skills: ["React 19", "DOM Virtualization", "IndexedDB", "Web Workers", "Tailwind CSS", "Vite"],
      capabilities: [
        "Sub-1.2s LCP & Zero CLS",
        "60 FPS List Virtualization",
        "Optimistic UI & Offline Sync",
      ],
    },
    {
      number: "03",
      title: "Backend & Distributed Systems",
      description: "Microservice communication, distributed concurrency control, and transactional ledgers",
      skills: ["Node.js / Express", "FastAPI (Python)", "Redis (Redlock)", "WebSockets", "WebRTC", "REST APIs"],
      capabilities: [
        "Distributed Mutex & Concurrency",
        "Event-Driven Microservices",
        "Double-Entry Ledger Invariants",
      ],
    },
    {
      number: "04",
      title: "Algorithms & Graph Theory",
      description: "Graph optimization, dynamic programming with bitmasking, and optimal asymptotic bounds",
      skills: ["Min-Cost Flow", "Bitmask DP", "Graphs & Trees", "Heaps & Priority Queues", "Union-Find"],
      capabilities: [
        "O(V·2^V) Cycle Minimization",
        "Time-Space Bound Optimization",
        "Rigorous Invariant Verification",
      ],
    },
    {
      number: "05",
      title: "Storage Engines & Cache Topologies",
      description: "Relational normalization, ACID transactions, index optimization, and cache-aside patterns",
      skills: ["PostgreSQL", "Redis Cache-Aside", "MongoDB", "ACID Invariants", "Materialized Views"],
      capabilities: [
        "Query Execution Plan Tuning",
        "Cache Invalidation & TTL Jitter",
        "Strict Foreign Key Constraints",
      ],
    },
    {
      number: "06",
      title: "DevOps, CI/CD & Engineering Hygiene",
      description: "Automated pipelines, containerization, test-driven development, and runtime isolation",
      skills: ["Docker", "GitHub Actions CI", "Vitest & RTL", "Linux Environment", "Git Flow", "Vercel"],
      capabilities: [
        "Automated Test Regression CI",
        "Containerized Multi-Stage Builds",
        "Defensive Production Logging",
      ],
    },
  ];

  return (
    <main className="page skills-page">
      <div className="page-number">02 / CAPABILITY MATRIX</div>

      <header className="skills-header">
        <div>
          <p className="eyebrow">ENGINEERING CAPABILITIES</p>
          <h1 className="page-title">
            Systems &amp;
            <br />
            <span>engineering matrix.</span>
          </h1>
        </div>

        <div className="skills-intro">
          <span className="skills-intro-label">06 CORE DOMAINS</span>
          <p>
            An engineering capability matrix spanning distributed ledger guarantees, real-time edge telemetry,
            asymptotic algorithm optimization, and production frontend architecture.
          </p>
        </div>
      </header>

      <div className="skills-list">
        {skillGroups.map((skill) => (
          <article
            className={`skill-row ${
              activeSkill === skill.number ? "skill-active" : ""
            } ${
              activeSkill !== null && activeSkill !== skill.number ? "skill-dim" : ""
            }`}
            key={skill.number}
            onMouseEnter={() => setActiveSkill(skill.number)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            <div className="skill-number">{skill.number}</div>

            <div className="skill-main">
              <h2>{skill.title}</h2>
              <p className="skill-description">{skill.description}</p>

              {/* Architectural Capabilities */}
              <div className="skill-capabilities">
                {skill.capabilities.map((cap, i) => (
                  <span key={i} className="skill-cap-item">
                    &bull; {cap}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-tags">
              {skill.skills.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <footer className="skills-footer">
        <span>PRIMARY PRODUCTION STACK</span>
        <p>
          TypeScript · React 19 · Node.js · Redis · PostgreSQL · Python · Docker · Vitest
        </p>
      </footer>
    </main>
  );
}

export default Skills;