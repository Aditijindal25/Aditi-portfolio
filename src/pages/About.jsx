
function About() {
  return (
    <main className="page">

      <div className="page-number">
        01 / ABOUT
      </div>

      <div className="about-layout">

        {/* LEFT SIDE */}
        <div className="about-intro">

          <p className="eyebrow">
            WHO I AM
          </p>

          <h1 className="page-title">
            Building with
            <br />
            <span>purpose.</span>
          </h1>

          <p className="about-tagline">
            Developer. Problem solver.
            <br />
            Constantly learning.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="about-content">

          <p className="big-text">
            I'm Aditi Jindal, a Computer Science and Information Technology undergraduate focused on building useful software and developing the fundamentals to engineer it well.
          </p>

          <p>
            I build responsive web applications with React, JavaScript and Python, with an emphasis on clear interfaces, maintainable code and practical user outcomes.
          </p>

          <p>
            Alongside product work, I am strengthening data structures and algorithms, exploring AI/ML and cloud systems, and using internships, hackathons and open source to learn how strong engineering teams ship.
          </p>

          {/* CURRENTLY */}
          <div className="about-current">

            <span className="about-label">
              CURRENTLY
            </span>

            <p>
              Building full-stack projects, improving algorithmic problem solving, and looking for opportunities to contribute to high-ownership engineering work.
            </p>

          </div>

          {/* INFO CARDS */}
          <div className="about-cards">

            <div className="about-card">
              <span>01</span>

              <h3>EDUCATION</h3>

              <p>
                B.Tech — CS & IT
                <br />
                KIET Ghaziabad
              </p>
            </div>

            <div className="about-card">
              <span>02</span>

              <h3>FOCUS</h3>

              <p>
                Software Development
                <br />
                AI/ML & Intelligent Systems
              </p>
            </div>

            <div className="about-card">
              <span>03</span>

              <h3>INTERESTS</h3>

              <p>
                Web Development
                <br />
                Open Source & Problem Solving
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default About;

