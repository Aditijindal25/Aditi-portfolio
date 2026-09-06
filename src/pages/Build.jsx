function Build() {
  const steps = [
    {
      number: "01",
      title: "UNDERSTAND",
      description: "Define the problem.",
    },
    {
      number: "02",
      title: "DESIGN",
      description: "Simplify the experience.",
    },
    {
      number: "03",
      title: "BUILD",
      description: "Turn ideas into systems.",
    },
    {
      number: "04",
      title: "ITERATE",
      description: "Test. Learn. Improve.",
    },
  ];

  return (
    <main className="page build-page">
      <div className="page-number">05 / HOW I BUILD</div>

      <div className="build-page-header">
        <p className="eyebrow">MY APPROACH</p>
        <h1 className="page-title">
          From question
          <br />
          <span>to system.</span>
        </h1>
        <p className="build-page-intro">
          I use a simple loop to turn unclear problems into focused, useful software.
        </p>
      </div>

      <section className="build-process build-process-page" aria-labelledby="build-process-title">
        <div className="build-process-heading">
          <p className="eyebrow">THE LOOP</p>
          <h2 id="build-process-title">Clarity before <span>complexity.</span></h2>
        </div>

        <div className="build-process-list">
          {steps.map((step) => (
            <article className="build-step" key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Build;
