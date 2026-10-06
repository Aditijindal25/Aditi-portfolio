const currentFocus = [
  "Software Development",
  "AI / ML & Intelligent Systems",
  "Data Structures & Algorithms",
  "Open Source",
];

const buildAreas = [
  "Web Applications",
  "Interactive Frontend Experiences",
  "Full-Stack Applications",
  "Developer Tools",
  "AI-powered / Intelligent Systems",
];

function About() {
  return (
    <main className="page about-page">
      <div className="page-number">01 / ABOUT</div>

      <section className="about-editorial" aria-labelledby="about-title">
        <div className="about-intro" data-reveal>
          <p className="eyebrow">ABOUT ME</p>
          <h1 className="about-title" id="about-title">
            More than
            <br />
            <span>just code.</span>
          </h1>
        </div>

        <div className="about-lede" data-reveal>
          <p>
            I&apos;m a Computer Science &amp; Information Technology undergraduate
            who enjoys turning ideas into practical software. I work primarily
            with JavaScript, React and Python, and I enjoy building products
            that combine thoughtful interfaces with solid engineering.
          </p>
          <p className="about-personal">
            I enjoy the part of development where a vague idea becomes something
            people can actually use.
          </p>
          <p className="about-search">
            Currently looking for a software development internship.
          </p>
        </div>
      </section>

      <div className="about-details">
        <section className="about-detail-block" aria-labelledby="about-current-title" data-reveal>
          <p className="eyebrow" id="about-current-title">CURRENTLY</p>
          <ul className="about-focus-list">
            {currentFocus.map((item, index) => (
              <li className="about-focus-item about-detail-block" key={item}>
                <span className="about-focus-number">{`0${index + 1}`}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="about-detail-block about-education" aria-labelledby="about-education-title" data-reveal>
          <p className="eyebrow" id="about-education-title">EDUCATION</p>
          <h2>B.Tech — Computer Science &amp; Information Technology</h2>
          <p>KIET Group of Institutions, Ghaziabad</p>
        </section>
      </div>

      <section className="about-build" aria-labelledby="about-build-title">
        <div className="about-section-heading" data-reveal>
          <p className="eyebrow">WHAT I BUILD</p>
          <h2 id="about-build-title">
            Practical software,
            <br />
            thoughtfully made.
          </h2>
        </div>
        <ul className="about-build-list">
          {buildAreas.map((area, index) => (
            <li
              className="about-capability"
              data-reveal
              key={area}
              style={{ "--about-stagger": `${index * 45}ms` }}
            >
              <span className="about-capability-number">{`0${index + 1}`}</span>
              {area}
            </li>
          ))}
        </ul>
      </section>

      <section className="about-closing" aria-label="Closing statement">
        <div className="about-section-heading about-closing-heading" data-reveal>
          <p className="about-closing-line">Build. Learn. Improve.</p>
        </div>
      </section>
    </main>
  );
}

export default About;
