import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [localTime, setLocalTime] = useState(() => new Date());

  useEffect(() => {
    const updateLocalTime = () => setLocalTime(new Date());
    const interval = window.setInterval(updateLocalTime, 30000);
    return () => window.clearInterval(interval);
  }, []);

  const localTimeLabel = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZoneName: "short",
  }).format(localTime);

  return (
    <main className="home">
      <aside className="social-rail" aria-label="Social links">
        <a href="https://github.com/Aditijindal25" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
        <a href="https://www.linkedin.com/in/aditijindal2506" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        <a href="mailto:aditijindal441@gmail.com" aria-label="Email">@</a>
        <span className="social-line" />
      </aside>

      <div className="home-content">
        <p className="eyebrow intro-animate delay-1">SOFTWARE ENGINEERING INTERN CANDIDATE</p>
        <h1 className="intro-animate delay-2">Aditi<span>Jindal</span></h1>
        <h2 className="intro-animate delay-3">Full-stack developer</h2>
        <p className="intro intro-animate delay-4">
          I'm a second-year B.Tech CS&amp;IT student at KIET Ghaziabad. I'm seeking a software engineering internship.
        </p>

        <div className="home-buttons intro-animate delay-5">
          <Link to="/projects" className="primary-btn">VIEW CASE STUDIES <span>→</span></Link>
          <Link to="/contact" className="outline-btn">CONTACT ME <span>↗</span></Link>
        </div>

        <div className="home-tags intro-animate delay-6">
          <span>REACT</span>
          <span>NODE.JS</span>
          <span>EXPRESS</span>
          <span>POSTGRESQL</span>
        </div>

        <div className="code-detail intro-animate delay-6">
          <span className="code-detail-mark">&gt;</span>
          <code>const stack = <b>"React · Node.js · Express · PostgreSQL"</b>;</code>
        </div>

        <button
          className="terminal-trigger"
          title="Open the portfolio terminal"
          onClick={() => window.dispatchEvent(new Event("portfolio:open-terminal"))}
        >
          &gt; OPEN_PROFILE
        </button>
      </div>

      <div className="glass-sculpture" aria-hidden="true">
        <span className="glass-ribbon glass-ribbon-back" />
        <span className="glass-ribbon glass-ribbon-front" />
        <span className="glass-highlight" />
      </div>

      <section className="system-card intro-animate delay-6" aria-label="Current profile details">
        <div className="system-card-top">
          <div className="system-title">
            <span className="pulse-dot" />
            PROFILE <b>— OPEN</b>
          </div>
          <span className="system-index">KIET · CS&amp;IT</span>
        </div>

        <div className="system-row">
          <span>PROJECT</span>
          <strong>LEADFLOW CRM</strong>
        </div>
        <div className="system-row">
          <span>STACK</span>
          <strong>REACT · NODE · EXPRESS · POSTGRESQL</strong>
        </div>
        <div className="system-row">
          <span>INTERNSHIP</span>
          <strong>SOFTWARE ENGINEERING</strong>
        </div>
        <div className="system-row">
          <span>LOCATION</span>
          <strong>KIET GHAZIABAD</strong>
        </div>

      </section>

      <span className="hero-coordinate coordinate-top">{localTimeLabel}</span>
      <span className="hero-coordinate coordinate-bottom">B.TECH / 2025–2029</span>

      <div className="home-meta intro-animate delay-6">
        <span>B.TECH CS&amp;IT</span>
        <span>KIET GHAZIABAD</span>
        <span>2025–2029</span>
      </div>
    </main>
  );
}

export default Home;