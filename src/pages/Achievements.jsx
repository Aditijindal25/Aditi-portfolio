function Achievements() {
  const proofMetrics = [
    {
      value: "< 14ms",
      label: "P99 SETTLEMENT LATENCY",
      detail: "Achieved via Bitmask Dynamic Programming and Redis Redlock distributed synchronization.",
    },
    {
      value: "99.4%",
      label: "DETECTION ACCURACY",
      detail: "Quantized neural inference on network packet anomaly streams in Rakshak AI (SIH).",
    },
    {
      value: "100%",
      label: "AUTOMATED CI COVERAGE",
      detail: "Continuous integration pipeline running Vitest unit suites and lint checks on every commit.",
    },
    {
      value: "60 FPS",
      label: "DOM VIRTUALIZATION",
      detail: "Sustained rendering performance across 50,000+ interactive task records with zero layout thrashing.",
    },
    {
      value: "60+",
      label: "STUDENTS TRAINED",
      detail: "Led applied cybersecurity workshops with hands-on vulnerability demos, raising scores by 42%.",
    },
    {
      value: "8.03",
      label: "ACADEMIC CGPA",
      detail: "B.Tech in Computer Science & Information Technology at KIET Group of Institutions (2025–2029).",
    },
  ];

  const milestones = [
    {
      title: "Smart India Hackathon (SIH 2026)",
      role: "Core Systems Architect & ML Engineer",
      outcome: "Architected edge neural anomaly detection pipeline for national critical infrastructure security.",
    },
    {
      title: "GirlScript Summer of Code (GSSoC)",
      role: "Open Source Contributor",
      outcome: "Collaborated on production open-source codebases, participating in code reviews and Git workflows.",
    },
    {
      title: "ICAC Championship",
      role: "Algorithmic Competitor",
      outcome: "Solved complex competitive programming problems under strict time and space asymptotic constraints.",
    },
  ];

  return (
    <main className="page achievements-page">
      <div className="page-number">06 / PROOF OF IMPACT</div>

      <header className="achievements-header">
        <p className="eyebrow">MEASURABLE ENGINEERING OUTCOMES</p>
        <h1 className="page-title">
          Quantifiable signals
          <br />
          <span>and verified impact.</span>
        </h1>
        <p className="achievements-intro">
          Engineering rigor measured in latency bounds, algorithmic complexity reductions, automated CI/CD safeguards,
          and demonstrated community leadership.
        </p>
      </header>

      {/* Grid of Quantifiable Metrics */}
      <section className="achievement-grid" aria-label="Quantifiable performance metrics">
        {proofMetrics.map((item, idx) => (
          <article className="achievement-item" key={idx}>
            <strong>{item.value}</strong>
            <span className="achievement-label">{item.label}</span>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      {/* Verified Milestones & Hackathons */}
      <section className="milestones-section">
        <div className="milestones-header">
          <p className="eyebrow">VERIFIED RECOGNITION &amp; INITIATIVES</p>
          <h2>Competitive milestones &amp; open source.</h2>
        </div>

        <div className="milestones-grid">
          {milestones.map((m, idx) => (
            <div className="milestone-card" key={idx}>
              <div className="milestone-top">
                <span className="milestone-index">0{idx + 1}</span>
                <h3>{m.title}</h3>
              </div>
              <span className="milestone-role">{m.role}</span>
              <p className="milestone-outcome">{m.outcome}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Achievements;
