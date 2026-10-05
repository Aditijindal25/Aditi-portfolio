function Journey() {
  const journeyItems = [
    {
      year: "2025 — 2029",
      title: "B.TECH — COMPUTER SCIENCE & INFORMATION TECHNOLOGY",
      organization: "KIET Group of Institutions (AKTU)",
      description:
        "Computer Science and Information Technology · CGPA: 8.03 / 10.0 · Core coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Object-Oriented Software Design.",
    },
    {
      year: "AUG — SEP 2026",
      title: "FULL STACK SOFTWARE ENGINEERING INTERN",
      organization: "Future Interns",
      description:
        "Architected and deployed 3 production-grade web applications with React and Node.js. Optimized client-side bundle performance by 35% through dynamic imports and code-splitting, and implemented structured REST API contracts.",
    },
    {
      year: "2026",
      title: "SMART INDIA HACKATHON (SIH)",
      organization: "National Engineering Hackathon",
      description:
        "Spearheaded technical architecture for Rakshak AI, an edge network telemetry and anomaly detection system. Quantized neural inference to INT8, achieving sub-10ms classification of malicious traffic patterns.",
    },
    {
      year: "2026",
      title: "ALGORITHMIC COMPETITOR",
      organization: "ICAC Championship & Competitive Platforms",
      description:
        "Honed competitive algorithmic problem-solving with 250+ solved challenges across dynamic programming, graph theory (minimum path, flow algorithms), heaps, and greedy heuristics under strict runtime and memory limits.",
    },
    {
      year: "2026",
      title: "OPEN SOURCE CONTRIBUTOR",
      organization: "GirlScript Summer of Code (GSSoC)",
      description:
        "Engaged in collaborative open-source engineering: authored maintainable pull requests, adhered to strict code review guidelines, resolved merge conflicts, and improved documentation for public developer tools.",
    },
    {
      year: "2026",
      title: "CYBERSECURITY WORKSHOP LEAD & INSTRUCTOR",
      organization: "Government School Community Outreach",
      description:
        "Designed and instructed a hands-on cybersecurity curriculum for 60+ students, covering simulated phishing vectors and digital hygiene, resulting in a 42% measurable improvement on post-training assessments.",
    },
  ];

  return (
    <main className="page">
      <div className="page-number">04 / TRACK RECORD</div>

      <header className="journey-header">
        <p className="eyebrow">PROFESSIONAL PROGRESSION</p>
        <h1 className="page-title">
          Engineering track record
          <br />
          <span>with verified evidence.</span>
        </h1>
        <p className="journey-intro">
          A progression grounded in academic computer science fundamentals, hackathon systems engineering,
          open-source collaboration, and applied software internships.
        </p>
      </header>

      <div className="journey-list">
        {journeyItems.map((item, index) => (
          <article className="journey-item" key={index}>
            <span className="journey-year">{item.year}</span>
            <div className="journey-body">
              <h2>{item.title}</h2>
              <h3>{item.organization}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Journey;