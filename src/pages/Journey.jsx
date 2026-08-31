function Journey() {
  const journeyItems = [
    {
      year: "2025 — 2029",
      title: "B.TECH — CS & IT",
      organization: "Krishna Institute of Engineering and Technology",
      description:
        "Computer Science and Information Technology · CGPA: 8.03",
    },

    {
      year: "26 AUG — 26 SEP 2026",
      title: "FULL STACK WEB DEVELOPMENT INTERN",
      organization: "Future Interns",
      description:
        "One-month internship focused on full stack web development, practical project development, skill development, and real-world application.",
    },

    {
      year: "2026",
      title: "SMART INDIA HACKATHON",
      organization: "Hackathon",
      description:
        "Contributed to a team-based solution focused on solving real-world problems.",
    },

    {
      year: "2026",
      title: "ICAC CHAMPIONSHIP",
      organization: "Competitive Programming",
      description:
        "Participated in competitive programming and problem-solving.",
    },

    {
      year: "2026",
      title: "GIRLSCRIPT SUMMER OF CODE",
      organization: "Open Source",
      description:
        "Contributed to open-source development.",
    },

    {
      year: "2026",
      title: "PYTHON WEATHER APPLICATION",
      organization: "Personal Project",
      description:
        "Built a Python-based weather application using APIs, Git, and GitHub.",
    },

    {
      year: "2026",
      title: "SOCIAL INTERNSHIP",
      organization: "Government School",
      description:
        "Led a social internship and conducted cybersecurity workshops for 60+ students using AI-powered tools and interactive content.",
    },
  ];

  return (
    <main className="page">

      <div className="page-number">
        04 / JOURNEY
      </div>

      <div className="journey-header">

        <p className="eyebrow">
          MY JOURNEY
        </p>

        <h1 className="page-title">
          Still
          <br />
          <span>becoming.</span>
        </h1>

      </div>

      <div className="journey-list">

        {journeyItems.map((item, index) => (
          <div
            className="journey-item"
            key={index}
          >

            <span className="journey-year">
              {item.year}
            </span>

            <div>

              <h2>
                {item.title}
              </h2>

              <h3>
                {item.organization}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </main>
  );
}

export default Journey;