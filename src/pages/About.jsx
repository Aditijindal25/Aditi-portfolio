function About() {
  return (
    <main className="page">
      <div className="page-number">01 / ABOUT THE ENGINEER</div>

      <div className="about-layout">
        {/* LEFT COLUMN */}
        <div className="about-intro">
          <p className="eyebrow">ENGINEERING PROFILE</p>
          <h1 className="page-title">
            Engineering with
            <br />
            <span>mathematical intent.</span>
          </h1>

          <p className="about-tagline">
            Systems thinker. Algorithmic problem solver.
            <br />
            Obsessed with latency, resilience &amp; clean design.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="about-content">
          <p className="big-text">
            I am Aditi Jindal, a Computer Science &amp; IT undergraduate engineering distributed transaction pipelines,
            real-time telemetry systems, and high-performance web applications.
          </p>

          <p>
            My engineering philosophy is rooted in algorithmic rigor and defensive software design. Whether optimizing
            debt settlement graphs from $O(V!)$ down to $O(V \cdot 2^V)$, designing double-entry ledger invariants with
            Redis distributed locks, or running quantized ONNX models at the edge for packet anomaly detection, I focus on
            building systems that hold up under real-world constraints.
          </p>

          <p>
            Beyond architecture, I believe modern software teams thrive on engineering hygiene: comprehensive automated testing
            (Vitest / Jest), strict continuous integration pipelines (GitHub Actions), containerized workflows (Docker), and
            relentless attention to Core Web Vitals and accessibility.
          </p>

          {/* CURRENT INITIATIVES */}
          <div className="about-current">
            <span className="about-label">ACTIVE ENGINEERING FOCUS</span>
            <p>
              Architecting distributed transactional settlement engines, benchmarking high-throughput WebSocket pipelines,
              and advancing competitive programming problem-solving across graph algorithms and dynamic programming.
            </p>
          </div>

          {/* METRIC / FOCUS CARDS */}
          <div className="about-cards">
            <div className="about-card">
              <span>01</span>
              <h3>FOUNDATIONS</h3>
              <p>
                B.Tech in CS &amp; IT
                <br />
                KIET Ghaziabad (CGPA: 8.03)
                <br />
                DSA &amp; OS Fundamentals
              </p>
            </div>

            <div className="about-card">
              <span>02</span>
              <h3>SYSTEMS FOCUS</h3>
              <p>
                Distributed Ledgers
                <br />
                Edge AI &amp; Telemetry
                <br />
                High-Framerate Frontend
              </p>
            </div>

            <div className="about-card">
              <span>03</span>
              <h3>HYGIENE &amp; TOOLS</h3>
              <p>
                TDD &amp; Automated CI/CD
                <br />
                Docker &amp; Containerization
                <br />
                Open Source (GSSoC)
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
