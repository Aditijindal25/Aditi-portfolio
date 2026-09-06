function Contact() {
  return (
    <main className="page">

      <div className="page-number">
        07 / CONTACT
      </div>

      <div className="contact-content">

        <p className="eyebrow">
          LET'S CONNECT
        </p>

        <h1 className="contact-title">
          Let's make
          <br />
          <span>something</span>
          <br />
          worth building.
        </h1>

        <p className="contact-description">
          I am open to software engineering internships, thoughtful collaborations and projects where I can contribute, learn quickly and ship useful work.
        </p>

        <a
          href="mailto:aditijindal441@gmail.com"
          className="contact-email"
        >
          aditijindal441@gmail.com →
        </a>

        <div className="contact-links">

          <a
            href="https://www.linkedin.com/in/aditijindal2506/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN ↗
          </a>

          <a
            href="https://github.com/Aditijindal25"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB ↗
          </a>

        </div>

        <div className="contact-cta">

          <span>
            OPEN TO
          </span>

          <strong>
            Internships · Projects · Collaborations
          </strong>

        </div>

      </div>

    </main>
  );
}

export default Contact;