import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  return (
    <main className="home">

      <div className="home-content">

        <p className="eyebrow intro-animate delay-1">
          HELLO, I'M
        </p>

        <h1 className="intro-animate delay-2">
          Aditi
          <span>Jindal.</span>
        </h1>

        <h2 className="intro-animate delay-3">
          Crafting digital
          <br />
          <span>experiences that work.</span>
        </h2>

        <p className="intro intro-animate delay-4">
          Computer Science undergraduate who enjoys building
          user-focused web applications, solving problems,
          and turning ideas into meaningful digital experiences.
        </p>

        <div className="home-buttons intro-animate delay-5">

          <Link to="/projects" className="primary-btn">
            EXPLORE MY WORK →
          </Link>

          <Link to="/contact" className="outline-btn">
            LET'S CONNECT
          </Link>

        </div>

        <div className="home-tags intro-animate delay-6">
          <span>REACT</span>
          <span>JAVASCRIPT</span>
          <span>PYTHON</span>
          <span>GIT</span>
        </div>
        
        <button
  className="terminal-trigger"
  onClick={() => setTerminalOpen(true)}
>
  &gt; OPEN_TERMINAL
</button>

        {/* MOVING SIGNATURE */}

        <div className="availability-wrapper intro-animate delay-6">

          <div className="availability-track">

            <div className="availability-text">
              AVAILABLE FOR
              <span>INTERNSHIPS</span>
              <b>•</b>
              <span>PROJECTS</span>
              <b>•</b>
              <span>COLLABORATIONS</span>
              <b>•</b>

              AVAILABLE FOR
              <span>INTERNSHIPS</span>
              <b>•</b>
              <span>PROJECTS</span>
              <b>•</b>
              <span>COLLABORATIONS</span>
              <b>•</b>
            </div>

          </div>

        </div>

      </div>

      {/* CURRENTLY */}

      <div className="currently-card intro-animate delay-6">

        <div className="currently-heading">
          <span className="pulse-dot"></span>
          CURRENTLY ACTIVE
        </div>

        <div className="currently-item">
          <span>LEARNING</span>
          <strong>DSA & ALGORITHMS</strong>
        </div>

        <div className="currently-item">
          <span>BUILDING</span>
          <strong>REACT PROJECTS</strong>
        </div>

        <div className="currently-item">
          <span>EXPLORING</span>
          <strong>CLOUD & SECURITY</strong>
        </div>

        <div className="currently-item">
          <span>WORKING ON</span>
          <strong>FULL STACK DEVELOPMENT</strong>
        </div>

      </div>
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