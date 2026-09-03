
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
            I'm Aditi Jindal, a Computer Science and
            Information Technology undergraduate
            interested in building useful technology
            and solving real-world problems.
          </p>

          <p>
            My journey in development has taken me
            through web development, programming and
            problem-solving. I enjoy transforming ideas
            into responsive, functional and meaningful
            digital experiences.
          </p>

          <p>
            I also enjoy working on hackathons, team-based
            projects and open-source initiatives while
            exploring areas such as algorithms, AI/ML and
            intelligent systems.
          </p>

          {/* CURRENTLY */}
          <div className="about-current">

            <span className="about-label">
              CURRENTLY
            </span>

            <p>
              Exploring full-stack development, AI/ML
              and building projects that solve practical
              problems.
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

