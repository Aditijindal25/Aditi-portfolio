function About() {
  return (
    <main className="page">

      <div className="page-number">
        01 / ABOUT
      </div>

      <div className="about-layout">

        <div>

          <p className="eyebrow">
            WHO I AM
          </p>

          <h1 className="page-title">
            More than
            <br />
            <span>just code.</span>
          </h1>

        </div>

        <div className="about-content">

          <p className="big-text">
            I'm Aditi Jindal, a Computer Science and
            Information Technology undergraduate
            interested in building useful technology
            and solving real-world problems.
          </p>

          <p>
            My development journey has focused on
            programming, web development and
            problem-solving. I enjoy turning ideas into
            functional, responsive applications.
          </p>

          <p>
            Alongside development, I've participated
            in hackathons and team-based projects,
            contributed to open-source initiatives,
            and explored areas including algorithms,
            intelligent systems and scalable computing.
          </p>

          <div className="about-cards">

            <div>
              <span>01</span>
              <h3>EDUCATION</h3>
              <p>
                B.Tech — CS & IT
                <br />
                KIET Ghaziabad
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>CGPA</h3>
              <p>
                8.03
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>FOCUS</h3>
              <p>
                Software Development
                <br />
                Algorithms & Intelligent Systems
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default About;