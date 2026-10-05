function Build() {
  const steps = [
    {
      number: "01",
      title: "RFC & SYSTEM SPECIFICATION",
      subtitle: "Architecture Decision Records & Interface Contracts",
      description:
        "Define problem constraints, latency budgets, data schemas, and failure domains before writing code. Author architectural specs that eliminate ambiguity.",
      signal: "Zero architectural ambiguity prior to implementation",
    },
    {
      number: "02",
      title: "TRADE-OFF & ASYMPTOTIC MODELING",
      subtitle: "Time-Space Complexity & CAP Theorem Boundaries",
      description:
        "Evaluate algorithmic bounds (e.g. O(V·2^V) graph optimizations), weigh consistency vs. availability, choose appropriate caching topologies, and remove single points of failure.",
      signal: "Optimal asymptotic scaling & predictable failure modes",
    },
    {
      number: "03",
      title: "DEFENSIVE ENGINEERING & TDD",
      subtitle: "Strict Type Contracts & Automated Regression Testing",
      description:
        "Construct systems with strict TypeScript interfaces, double-entry transactional invariants, and automated unit/integration suites (Vitest) validating boundary conditions.",
      signal: "Deterministic runtime behavior and regression-free merges",
    },
    {
      number: "04",
      title: "CI/CD, BENCHMARKING & OBSERVABILITY",
      subtitle: "Automated Shipping, P99 Profiling & Telemetry",
      description:
        "Package applications via Docker containers, run automated CI pipelines on every pull request, and benchmark performance under load to safeguard sub-20ms P99 latency budgets.",
      signal: "Production-ready automation with quantifiable metrics",
    },
  ];

  return (
    <main className="page build-page">
      <div className="page-number">05 / ENGINEERING METHODOLOGY</div>

      <header className="build-page-header">
        <p className="eyebrow">PRODUCTION PHILOSOPHY</p>
        <h1 className="page-title">
          From problem constraint
          <br />
          <span>to resilient system.</span>
        </h1>
        <p className="build-page-intro">
          A disciplined engineering lifecycle modeled on high-concurrency Big Tech standards: rigorous RFC specifications,
          deliberate trade-off modeling, test-driven validation, and automated continuous delivery.
        </p>
      </header>

      <section className="build-process build-process-page" aria-labelledby="build-process-title">
        <div className="build-process-heading">
          <p className="eyebrow">THE ENGINEERING LIFECYCLE</p>
          <h2 id="build-process-title">
            Architectural clarity <span>before production code.</span>
          </h2>
        </div>

        <div className="build-process-list">
          {steps.map((step) => (
            <article className="build-step" key={step.number}>
              <span className="build-step-num">{step.number}</span>
              <div className="build-step-body">
                <h3>{step.title}</h3>
                <span className="build-step-subtitle">{step.subtitle}</span>
                <p>{step.description}</p>
                <div className="build-step-signal">
                  <strong>BENCHMARK:</strong> <em>{step.signal}</em>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Build;
