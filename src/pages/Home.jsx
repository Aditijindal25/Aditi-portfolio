import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "ADITI_OS v2.4.0 (x86_64-antigravity-linux-gnu)" },
    { type: "system", text: "Type 'help' to inspect available system commands, or 'projects' to review production systems." },
  ]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [cmdHistory, setCmdHistory] = useState([]);
  const terminalEndRef = useRef(null);
  const terminalInputRef = useRef(null);

  useEffect(() => {
    if (terminalOpen) {
      terminalInputRef.current?.focus();
    }
  }, [terminalOpen]);

  useEffect(() => {
    if (terminalOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, terminalOpen]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const rawCmd = inputVal.trim();
      const cmd = rawCmd.toLowerCase();

      const newHistory = [...history, { type: "user", text: `$ ${rawCmd}` }];
      if (rawCmd) {
        setCmdHistory((prev) => [...prev, rawCmd]);
        setCmdIndex(-1);
      }

      switch (cmd) {
        case "help":
          newHistory.push({
            type: "output",
            text: [
              "Available System Commands:",
              "  projects   - List top production architectures and metrics",
              "  skills     - Display core engineering capabilities & stack",
              "  arch       - Print ASCII diagram of SplitFlow settlement engine",
              "  metrics    - Display benchmark latencies and throughput stats",
              "  status     - Show real-time environment telemetry",
              "  whoami     - Engineering profile and career focus",
              "  contact    - Communication endpoints and social rails",
              "  clear      - Clear terminal buffer",
              "  exit       - Close the terminal shell",
            ].join("\n"),
          });
          break;

        case "projects":
          newHistory.push({
            type: "output",
            text: [
              "PROD_01: SPLITFLOW      [O(V·2^V) Debt Settlement | < 14ms P99 | 2.4k rps]",
              "PROD_02: RAKSHAK AI     [Edge Network Anomaly Pipeline | 99.4% Acc | < 8ms]",
              "PROD_03: SKILLMESH      [WebRTC P2P DataChannel | CRDT Sync | < 38ms Latency]",
              "PROD_04: CHRONICLE      [Offline-First IndexedDB Engine | < 2ms Local Read]",
              "PROD_05: TASKFLOW       [DOM Windowing Engine | 60 FPS Sustained @ 50k Items]",
            ].join("\n"),
          });
          break;

        case "skills":
          newHistory.push({
            type: "output",
            text: [
              "Languages:      TypeScript, JavaScript (ESNext), Python, C/C++, SQL",
              "Frontend Arch:  React 19, DOM Virtualization, State Machines, Web Vitals",
              "Backend & Dist: Node.js, Express, Redis (Redlock), WebSockets, WebRTC",
              "Storage & Data: PostgreSQL (ACID, B-Tree Indexes), IndexedDB, MongoDB",
              "Algorithms:     Min-Cost Flow, Dynamic Programming, Graphs, Heaps",
              "Infrastructure: Docker, GitHub Actions CI/CD, Linux / POSIX, Vercel",
            ].join("\n"),
          });
          break;

        case "arch":
          newHistory.push({
            type: "output",
            text: [
              "SYSTEM ARCHITECTURE: SPLITFLOW SETTLEMENT ENGINE",
              "┌───────────────┐     HTTPS     ┌────────────────────────┐",
              "│  Client SPA   │ ────────────> │ API Gateway / Limiter  │",
              "└───────────────┘               └───────────┬────────────┘",
              "                                            │",
              "                     ┌──────────────────────┴──────────────────────┐",
              "                     ▼                                             ▼",
              "        ┌─────────────────────────┐                   ┌─────────────────────────┐",
              "        │  Settlement Optimizer   │                   │ Ledger Transaction Svc  │",
              "        │ (Bitmask DP Algorithm)  │                   │  (Double-Entry Ledger)  │",
              "        └────────────┬────────────┘                   └────────────┬────────────┘",
              "                     │                                             │",
              "                     ▼                                             ▼",
              "        ┌─────────────────────────┐                   ┌─────────────────────────┐",
              "        │ Redis (Redlock Mutex)   │                   │ PostgreSQL (ACID Store) │",
              "        └─────────────────────────┘                   └─────────────────────────┘",
            ].join("\n"),
          });
          break;

        case "metrics":
          newHistory.push({
            type: "output",
            text: [
              "BENCHMARK TELEMETRY:",
              "  • P99 Settlement Latency:  < 14ms (500 concurrent connections)",
              "  • Packet Anomaly Classify: < 8.2ms (8-bit quantized ONNX)",
              "  • P2P WebRTC Signaling:    < 38ms roundtrip",
              "  • Virtual Scroll Jitter:   0ms (Solid 60 FPS @ 50,000 nodes)",
              "  • Test Coverage:           Vitest automated regression suite",
            ].join("\n"),
          });
          break;

        case "whoami":
          newHistory.push({
            type: "output",
            text: "Aditi Jindal — Software Engineer specializing in scalable full-stack platforms, distributed systems, and real-time edge intelligence.",
          });
          break;

        case "status":
          newHistory.push({
            type: "output",
            text: "SYSTEM_STATUS: HEALTHY\nCI_PIPELINE: PASSING\nLOCATION: INDIA (28.6139° N, 77.2090° E)\nUPTIME: 99.98%\nFOCUS: DISTRIBUTED LEDGERS & SCALABLE WEB ARCHITECTURE",
          });
          break;

        case "contact":
          newHistory.push({
            type: "output",
            text: "Email:    aditijindal441@gmail.com\nLinkedIn: https://linkedin.com/in/aditijindal2506\nGitHub:   https://github.com/Aditijindal25",
          });
          break;

        case "clear":
          setHistory([]);
          setInputVal("");
          return;

        case "exit":
          setTerminalOpen(false);
          setInputVal("");
          return;

        case "":
          break;

        default:
          newHistory.push({
            type: "error",
            text: `command not found: '${rawCmd}'. Type 'help' for available commands.`,
          });
          break;
      }

      setHistory(newHistory);
      setInputVal("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = cmdIndex === -1 ? cmdHistory.length - 1 : Math.max(0, cmdIndex - 1);
        setCmdIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdIndex !== -1) {
        const nextIdx = cmdIndex + 1;
        if (nextIdx < cmdHistory.length) {
          setCmdIndex(nextIdx);
          setInputVal(cmdHistory[nextIdx]);
        } else {
          setCmdIndex(-1);
          setInputVal("");
        }
      }
    }
  };

  return (
    <main className="home">
      {/* Social Rail */}
      <aside className="social-rail" aria-label="Social links">
        <a href="https://github.com/Aditijindal25" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
        <a href="https://linkedin.com/in/aditijindal2506" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        <a href="mailto:aditijindal441@gmail.com" aria-label="Email">@</a>
        <span className="social-line"></span>
      </aside>

      {/* Main Home Content */}
      <div className="home-content">
        <p className="eyebrow intro-animate delay-1">SOFTWARE &amp; SYSTEMS ENGINEER</p>

        <h1 className="intro-animate delay-2">
          Aditi
          <span>Jindal.</span>
        </h1>

        <h2 className="intro-animate delay-3">
          ENGINEERING SCALABLE SYSTEMS. <span>ARCHITECTING PRODUCTION PERFORMANCE.</span>
        </h2>

        <p className="intro intro-animate delay-4">
          Computer Science undergraduate engineering distributed transaction pipelines, real-time edge telemetry,
          and high-performance web systems. Driven by algorithmic rigor, clean system design, and measured benchmarks.
        </p>

        <div className="home-buttons intro-animate delay-5">
          <Link to="/projects" className="primary-btn">INSPECT SYSTEMS &amp; ARCHITECTURE <span>&rarr;</span></Link>
          <Link to="/contact" className="outline-btn">CONNECT WITH ME <span>&#8599;</span></Link>
        </div>

        <div className="home-tags intro-animate delay-6">
          <span>DISTRIBUTED SYSTEMS</span>
          <span>REACT 19</span>
          <span>ALGORITHMIC DP</span>
          <span>EDGE AI</span>
          <span>CI/CD</span>
        </div>

        <div className="code-detail intro-animate delay-6">
          <span className="code-detail-mark">&gt;</span>
          <code>const system = <b>new ProductionArchitecture(&#123; latency: '&lt; 14ms', reliability: '99.99%' &#125;)</b>;</code>
        </div>

        <button className="terminal-trigger" onClick={() => setTerminalOpen(true)}>
          &gt; LAUNCH_INTERACTIVE_SHELL
        </button>
      </div>

      {/* Background Visual Art */}
      <div className="glass-sculpture" aria-hidden="true">
        <span className="glass-ribbon glass-ribbon-back"></span>
        <span className="glass-ribbon glass-ribbon-front"></span>
        <span className="glass-highlight"></span>
      </div>

      {/* Live System Telemetry Card */}
      <section className="system-card intro-animate delay-6" aria-label="System status">
        <div className="system-card-top">
          <div className="system-title">
            <span className="pulse-dot"></span>
            SYSTEM TELEMETRY <b>— OPERATIONAL</b>
          </div>
          <span className="system-index">PROD / 01</span>
        </div>

        <div className="system-row">
          <span>PIPELINE</span>
          <strong>GITHUB ACTIONS CI (PASSING)</strong>
        </div>
        <div className="system-row">
          <span>CORE STACK</span>
          <strong>TYPESCRIPT · REACT · NODE · REDIS</strong>
        </div>
        <div className="system-row">
          <span>ALGORITHMS</span>
          <strong>GRAPH FLOW &amp; BITMASK DP</strong>
        </div>
        <div className="system-row">
          <span>FLAGSHIP BUILD</span>
          <strong>SPLITFLOW &amp; RAKSHAK AI</strong>
        </div>

        <div className="system-card-footer">
          <span>LATENCY TARGET</span>
          <strong><i></i> P99 &lt; 15MS</strong>
        </div>
      </section>

      <span className="hero-coordinate coordinate-top">28.6139° N / 77.2090° E</span>
      <span className="hero-coordinate coordinate-bottom">CS &amp; IT / 2025—2029</span>

      {/* Interactive Terminal Modal */}
      {terminalOpen && (
        <div className="terminal-overlay" onClick={() => setTerminalOpen(false)}>
          <div className="terminal-window" onClick={(e) => e.stopPropagation()}>
            <div className="terminal-top">
              <span>aditi@portfolio-runtime:~ (zsh)</span>
              <button
                onClick={() => setTerminalOpen(false)}
                className="terminal-close"
                aria-label="Close terminal"
              >
                &times;
              </button>
            </div>

            <div className="terminal-body" onClick={() => terminalInputRef.current?.focus()}>
              {history.map((line, i) => (
                <div key={i} className={`terminal-line terminal-${line.type}`}>
                  {line.type === "system" && <span className="terminal-dim">[sys] </span>}
                  {line.type === "error" && <span className="terminal-err">[err] </span>}
                  <pre>{line.text}</pre>
                </div>
              ))}

              <div className="terminal-prompt-line">
                <span className="terminal-purple">aditi@dev:~$</span>
                <input
                  ref={terminalInputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleCommand}
                  className="terminal-real-input"
                  autoFocus
                  spellCheck={false}
                />
              </div>
              <div ref={terminalEndRef} />
            </div>
          </div>
        </div>
      )}

      <div className="home-meta intro-animate delay-6">
        <span>CS &amp; IT ENGINEERING</span>
        <span>ADITI JINDAL</span>
        <span>2025 — 2029</span>
      </div>
    </main>
  );
}

export default Home;