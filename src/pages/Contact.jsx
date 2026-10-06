function Contact() {
  return (
    <main className="page">

      <div className="page-number">
        06 / CONTACT
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
          I'm seeking a software engineering internship. Email is the fastest way to reach me.
        </p>

        <a
          href="mailto:aditijindal441@gmail.com"
          className="contact-email contact-action contact-action-primary"
        >
          aditijindal441@gmail.com →
        </a>

        <div className="contact-links" aria-label="Professional profiles and resume">

          <a
            href="https://www.linkedin.com/in/aditijindal2506/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-action"
          >
            LINKEDIN ↗
          </a>

          <a
            href="https://github.com/Aditijindal25"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-action"
          >
            GITHUB ↗
          </a>

          <a className="contact-action" href="/ADITI-JINDAL.pdf" target="_blank" rel="noopener noreferrer">
            RESUME ↗
          </a>

        </div>

        <div className="contact-cta">

          <strong>
            Available for a software engineering internship.
          </strong>

        </div>

      </div>

    </main>
  );
}

export default Contact;