import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  return (
    <main className="home">
      <aside className="social-rail" aria-label="Social links">
        <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        <a href="mailto:aditijindal441@gmail.com" aria-label="Email">@</a>
        <span className="social-line"></span>
      </aside>

      <div className="home-content">
        <p className="eyebrow intro-animate delay-1">HELLO, I'M</p>

        <h1 className="intro-animate delay-2">
          Aditi
          <span>Jindal.</span>
        </h1>

        <h2 className="intro-animate delay-3">
          BUILDING DIGITAL EXPERIENCES. <span>LEARNING THE SYSTEMS BEHIND THEM.</span>
        </h2>

        <p className="intro intro-animate delay-4">
          Computer Science undergraduate building responsive web applications with React and JavaScript, strengthening problem-solving fundamentals, and exploring AI, full-stack development, cloud and security.
        </p>

        <div className="home-buttons intro-animate delay-5">
          <Link to="/projects" className="primary-btn">EXPLORE MY WORK <span>→</span></Link>
          <Link to="/contact" className="outline-btn">LET'S CONNECT <span>↗</span></Link>
        </div>

        <div className="home-tags intro-animate delay-6">
          <span>REACT</span>
          <span>FULL STACK</span>
          <span>AI / ML</span>
          <span>DSA</span>
        </div>

        <div className="code-detail intro-animate delay-6">
          <span className="code-detail-mark">&gt;</span>
          <code>const build = <b>"something meaningful"</b>;</code>
        </div>

        <button className="terminal-trigger" onClick={() => setTerminalOpen(true)}>
          &gt; OPEN_TERMINAL
        </button>
      </div>

      <div className="glass-sculpture" aria-hidden="true">
        <span className="glass-ribbon glass-ribbon-back"></span>
        <span className="glass-ribbon glass-ribbon-front"></span>
        <span className="glass-highlight"></span>
      </div>

      <section className="system-card intro-animate delay-6" aria-label="System status">
        <div className="system-card-top">
          <div className="system-title">
            <span className="pulse-dot"></span>
            SYSTEM STATUS <b>— ONLINE</b>
          </div>
          <span className="system-index">01 / 04</span>
        </div>

        <div className="system-row">
          <span>LEARNING</span>
          <strong>DSA &amp; ALGORITHMS</strong>
        </div>
        <div className="system-row">
          <span>BUILDING</span>
          <strong>REACT / FULL STACK</strong>
        </div>
        <div className="system-row">
          <span>EXPLORING</span>
          <strong>CLOUD &amp; SECURITY</strong>
        </div>
        <div className="system-row">
          <span>CURRENTLY</span>
          <strong>RAKSHAK AI</strong>
        </div>

        <div className="system-card-footer">
          <span>STATUS</span>
          <strong><i></i> ONLINE</strong>
        </div>
      </section>

      <span className="hero-coordinate coordinate-top">28.6139° N / 77.2090° E</span>
      <span className="hero-coordinate coordinate-bottom">BUILD / 2025—29</span>
      {terminalOpen && (
  <div className="terminal-overlay">

    <div className="terminal-window">

      <div className="terminal-top">

        <span>ADITI@PORTFOLIO:~</span>

        <button
          onClick={() => setTerminalOpen(false)}
          className="terminal-close"
        >
          ×
        </button>

      </div>

      <div className="terminal-body">

        <p>
          <span className="terminal-purple">&gt;</span>{" "}
          aditi.init()
        </p>

        <p className="terminal-success">
          ✓ portfolio loaded
        </p>

        <p className="terminal-success">
          ✓ projects loaded
        </p>

        <p className="terminal-success">
          ✓ skills loaded
        </p>

        <br />

        <p>
          <span className="terminal-purple">&gt;</span>{" "}
          status
        </p>

        <p className="terminal-label">
          AVAILABLE FOR:
        </p>

        <p>→ INTERNSHIPS</p>
        <p>→ PROJECTS</p>
        <p>→ COLLABORATIONS</p>

        <br />

        <p>
          <span className="terminal-purple">&gt;</span>{" "}
          location
        </p>

        <p>→ INDIA</p>

        <br />

        <p className="terminal-cursor-line">
          <span className="terminal-purple">&gt;</span>{" "}
          _
        </p>

      </div>

    </div>

  </div>
)}

      <div className="home-meta intro-animate delay-6">
        <span>CS / IT</span>
        <span>ADITI JINDAL</span>
        <span>2025 — 2029</span>
      </div>

    </main>
  );
}

export default Home;