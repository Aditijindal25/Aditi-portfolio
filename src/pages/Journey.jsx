function Journey() {
  const journeyItems = [
    {
      year: "2025 — 2029",
      title: "B.TECH — CS & IT",
      organization: "Krishna Institute of Engineering and Technology",
      description:
        "Computer Science and Information Technology · CGPA: 8.03 · Focused on software engineering, algorithms and applied systems.",
    },

    {
      year: "26 AUG — 26 SEP 2026",
      title: "FULL STACK WEB DEVELOPMENT INTERN",
      organization: "Future Interns",
      description:
        "One-month full-stack internship focused on shipping practical web projects, applying development workflows, and turning requirements into working software.",
    },

    {
      year: "2026",
      title: "SMART INDIA HACKATHON",
      organization: "Hackathon",
      description:
        "Worked in a team-based problem-solving environment focused on translating a real-world challenge into a usable technical solution.",
    },

    {
      year: "2026",
      title: "ICAC CHAMPIONSHIP",
      organization: "Competitive Programming",
      description:
        "Built competitive programming discipline through timed problem solving, algorithmic reasoning and implementation under constraints.",
    },

    {
      year: "2026",
      title: "GIRLSCRIPT SUMMER OF CODE",
      organization: "Open Source",
      description:
        "Practiced collaborative development through open-source contribution, code review and working within an existing project context.",
    },

    {
      year: "2026",
      title: "PYTHON WEATHER APPLICATION",
      organization: "Personal Project",
      description:
        "Built a Python weather application using API integration, Git and GitHub, with a focus on consuming external data reliably.",
    },

    {
      year: "2026",
      title: "SOCIAL INTERNSHIP",
      organization: "Government School",
      description:
        "Led a social internship and delivered cybersecurity workshops for 60+ students using AI-supported tools and interactive learning content.",
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
          Evidence in
          <br />
          <span>progress.</span>
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