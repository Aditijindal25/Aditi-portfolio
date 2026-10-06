function Journey() {
  const journeyItems = [
    {
      section: "01 / EDUCATION",
      date: "2025–2029",
      title: "B.TECH · COMPUTER SCIENCE AND INFORMATION TECHNOLOGY",
      organization: "KIET Ghaziabad",
    },
    {
      section: "02 / EXPERIENCE",
      title: "ONE-MONTH FULL-STACK WEB DEVELOPMENT INTERNSHIP",
      organization: "Future Interns",
    },
    {
      section: "03 / COMMUNITY",
      title: "SOCIAL INTERNSHIP · GOVERNMENT SCHOOL",
      organization: "Cybersecurity workshops",
      description: "Delivered workshops for 60+ students.",
    },
  ];

  return (
    <main className="page journey-page">
      <div className="page-number">04 / JOURNEY</div>
      <div className="journey-header">
        <p className="eyebrow">EDUCATION AND ENGINEERING</p>
        <h1 className="page-title">
          Learning through
          <br />
          <span>the work.</span>
        </h1>
        <p className="journey-intro">
          Education, hands-on experience, and the work that has shaped how I build.
        </p>
      </div>
      <ol className="journey-timeline" aria-label="Education, experience, and community">
        {journeyItems.map((item) => (
          <li className="journey-item" key={item.section}>
            <div className="journey-meta">
              {item.date && <span className="journey-year">{item.date}</span>}
              <span className="journey-category">{item.section}</span>
            </div>
            <span className="journey-marker" aria-hidden="true" />
            <div className="journey-entry-content">
              <h2 className="journey-entry-title">{item.title}</h2>
              {item.organization && <p className="journey-organization">{item.organization}</p>}
              {item.description && <p className="journey-description">{item.description}</p>}
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}

export default Journey;