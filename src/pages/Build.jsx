import { useEffect, useRef, useState } from "react";

const buildSteps = [
  {
    number: "01",
    title: "UNDERSTAND",
    description: "Clarify the problem, constraints and desired outcome before writing code.",
    detail: "Make the problem concrete: what needs to change, what constraints shape the solution, and what result would address the need?",
  },
  {
    number: "02",
    title: "DESIGN",
    description: "Break the problem into a practical structure, interface and technical approach.",
    detail: "Choose a clear structure and an interface that fit the problem before committing to an implementation.",
  },
  {
    number: "03",
    title: "BUILD",
    description: "Turn the design into working software with attention to clarity and maintainability.",
    detail: "Implement the solution in understandable pieces, keeping the code clear enough to change as the work evolves.",
  },
  {
    number: "04",
    title: "TEST AND IMPROVE",
    description: "Test the result, identify what can be better, and iterate.",
    detail: "Check the result against the original need, find what falls short, and use those findings to guide the next iteration.",
  },
];

function Build() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const pageRef = useRef(null);
  const activeStep = buildSteps[activeStepIndex];

  useEffect(() => {
    const revealItems = pageRef.current?.querySelectorAll("[data-build-reveal]");
    if (!revealItems?.length) return undefined;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
      || !("IntersectionObserver" in window)
    ) {
      revealItems.forEach((item) => item.setAttribute("data-reveal-state", "visible"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-reveal-state", "visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });

    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
      item.setAttribute("data-reveal-state", "waiting");
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="page build-page" ref={pageRef}>
      <div className="page-number">05 / HOW I BUILD</div>

      <header className="build-page-header">
        <p className="eyebrow">MY APPROACH</p>
        <h1 className="page-title">
          From question
          <br />
          <span>to system.</span>
        </h1>
        <p className="build-page-intro">A four-step engineering process.</p>
      </header>

      <section className="build-process build-process-page" aria-labelledby="build-process-title">
        <div className="build-process-heading">
          <p className="eyebrow">THE LOOP</p>
          <h2 id="build-process-title">
            Question, design,
            <br />
            <span>implementation, review.</span>
          </h2>
        </div>

        <div className="build-process-list" role="group" aria-label="Four stages of the engineering process">
          {buildSteps.map((step, index) => (
            <button
              className="build-step"
              key={step.number}
              type="button"
              aria-pressed={activeStepIndex === index}
              aria-controls="build-step-detail"
              data-build-reveal
              onMouseEnter={() => setActiveStepIndex(index)}
              onFocus={() => setActiveStepIndex(index)}
              onClick={() => setActiveStepIndex(index)}
            >
              <span className="build-step-number">{step.number}</span>
              <span className="build-step-title">{step.title}</span>
              <span className="build-step-description">{step.description}</span>
            </button>
          ))}
        </div>

        <div
          className="build-step-detail"
          id="build-step-detail"
          aria-live="polite"
          data-build-reveal
        >
          <p className="build-step-detail-label">ACTIVE STAGE</p>
          <div className="build-step-detail-content" key={activeStep.number}>
            <p className="build-step-detail-title">
              <span>{activeStep.number}</span> / {activeStep.title}
            </p>
            <p className="build-step-detail-description">{activeStep.detail}</p>
          </div>
        </div>
      </section>

      <footer className="build-conclusion" data-build-reveal>
        <p className="eyebrow">FROM FIRST QUESTION TO BETTER NEXT VERSION</p>
        <p className="build-conclusion-statement">
          Understand deeply.
          <br />
          <span>Build deliberately.</span>
          <br />
          Improve continuously.
        </p>
      </footer>
    </main>
  );
}

export default Build;
