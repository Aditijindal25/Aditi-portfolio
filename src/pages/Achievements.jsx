function Achievements() {
  const achievements = [
    {
      value: "01",
      label: "INTERNSHIP",
      detail: "Full-stack web development",
    },
    {
      value: "03",
      label: "COMMUNITIES",
      detail: "Hackathons and open source",
    },
    {
      value: "19",
      label: "PROJECTS",
      detail: "Projects built across web and software",
    },
    {
      value: "06",
      label: "FOCUS AREAS",
      detail: "From frontend to cloud basics",
    },
  ];

  return (
    <main className="page achievements-page">
      <div className="page-number">06 / ACHIEVEMENTS</div>

      <div className="achievements-header">
        <p className="eyebrow">SIGNALS OF PROGRESS</p>
        <h1 className="page-title">
          Work with
          <br />
          <span>evidence.</span>
        </h1>
        <p className="achievements-intro">
          A few grounded signals from study, building, collaboration and community work.
        </p>
      </div>

      <section className="achievement-grid" aria-label="Achievements and proof points">
        {achievements.map((achievement) => (
          <article className="achievement-item" key={achievement.label}>
            <strong>{achievement.value}</strong>
            <span>{achievement.label}</span>
            <p>{achievement.detail}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Achievements;
