import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../pages/Projects";

const terminalCommands = ["help", "about", "skills", "projects", "github", "linkedin", "contact", "clear"];

function Terminal() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const openerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.code === "Backquote") {
        event.preventDefault();
        openerRef.current = document.activeElement;
        setOpen(true);
      } else if (event.key === "Escape" && open) {
        setOpen(false);
      }
    };
    const handleOpen = () => {
      openerRef.current = document.activeElement;
      setOpen(true);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("portfolio:open-terminal", handleOpen);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("portfolio:open-terminal", handleOpen);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      openerRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    terminalRef.current?.scrollTo({ top: terminalRef.current.scrollHeight });
  }, [history]);

  const runCommand = (rawCommand) => {
    const normalized = rawCommand.trim().toLowerCase();
    if (!normalized) return;

    if (normalized === "clear") {
      setHistory([]);
      setCommand("");
      return;
    }

    const responses = {
      help: [`Available commands: ${terminalCommands.join(", ")}`],
      about: ["Aditi Jindal — B.Tech CS&IT student at KIET Ghaziabad, full-stack developer seeking a software engineering internship."],
      skills: ["React · JavaScript · HTML · CSS · Node.js · Express · PostgreSQL · Python · Vite · Git"],
      projects: [`${projects.length} projects found`, ...projects.map((project) => `${project.number}  ${project.title}`)],
      github: ["https://github.com/Aditijindal25"],
      linkedin: ["https://www.linkedin.com/in/aditijindal2506/"],
      contact: ["Opening contact page..."],
    };
    const output = responses[normalized] || [`Command not found: ${normalized}. Type help to see available commands.`];
    setHistory((entries) => [...entries, { command: rawCommand.trim(), output }]);
    setCommand("");

    if (normalized === "contact") {
      setOpen(false);
      navigate("/contact");
    }
  };

  const renderOutput = (text) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    return text.split(urlPattern).map((part, index) =>
      part.startsWith("https://") ? (
        <a key={`${part}-${index}`} href={part} target="_blank" rel="noopener noreferrer">{part}</a>
      ) : (
        <span key={`${part}-${index}`}>{part}</span>
      ),
    );
  };

  if (!open) return null;

  return (
    <div
      className="terminal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <section
        className="terminal-window terminal-interactive"
        role="dialog"
        aria-modal="true"
        aria-label="Portfolio terminal"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const focusable = [...event.currentTarget.querySelectorAll("button, input, a[href]")];
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
      >
        <div className="terminal-top">
          <span>aditi@portfolio ~</span>
          <button className="terminal-close" onClick={() => setOpen(false)} aria-label="Close terminal">×</button>
        </div>
        <div ref={terminalRef} className="terminal-body terminal-output" aria-live="polite">
          <p className="terminal-label">Type <span className="terminal-purple">help</span> to see available commands.</p>
          {history.map((entry, index) => (
            <div className="terminal-entry" key={`${entry.command}-${index}`}>
              <p><span className="terminal-success">$</span> {entry.command}</p>
              {entry.output.map((line, lineIndex) => (
                <p className="terminal-response" key={`${line}-${lineIndex}`}>{renderOutput(line)}</p>
              ))}
            </div>
          ))}
          <form
            className="terminal-input-line"
            onSubmit={(event) => {
              event.preventDefault();
              runCommand(command);
            }}
          >
            <label className="terminal-success" htmlFor="terminal-command">$</label>
            <input
              ref={inputRef}
              id="terminal-command"
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              autoComplete="off"
              autoCapitalize="none"
              spellCheck="false"
              aria-label="Terminal command"
            />
            <span className="terminal-cursor-line" aria-hidden="true">_</span>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Terminal;
