import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const commands = [
  { label: "View Projects", hint: "Selected work", path: "/projects" },
  { label: "About Aditi", hint: "Profile and focus", path: "/about" },
  { label: "Technical Skills", hint: "Toolkit and fundamentals", path: "/skills" },
  { label: "Journey", hint: "Experience and education", path: "/journey" },
  { label: "How I Build", hint: "Process and approach", path: "/build" },
  { label: "Achievements", hint: "Progress and proof", path: "/achievements" },
  { label: "GitHub", hint: "Code and repositories", path: "https://github.com/Aditijindal25", external: true },
  { label: "LinkedIn", hint: "Professional profile", path: "https://www.linkedin.com/in/aditijindal2506/", external: true },
  { label: "Contact", hint: "Start a conversation", path: "/contact" },
];

function Navbar() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredCommands = commands.filter((command) =>
    `${command.label} ${command.hint}`.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen(true);
        setQuery("");
        setActiveIndex(0);
      }

      if (event.key === "Escape") {
        setPaletteOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (paletteOpen) {
      inputRef.current?.focus();
    }
  }, [paletteOpen]);

  useEffect(() => {
    setActiveIndex((index) => Math.min(index, Math.max(filteredCommands.length - 1, 0)));
  }, [filteredCommands.length]);

  const closePalette = () => {
    setPaletteOpen(false);
    setQuery("");
  };

  const executeCommand = (command) => {
    if (command.external) {
      window.open(command.path, "_blank", "noopener,noreferrer");
    } else {
      navigate(command.path);
    }
    closePalette();
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % Math.max(filteredCommands.length, 1));
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + filteredCommands.length) % Math.max(filteredCommands.length, 1));
    }

    if (event.key === "Enter" && filteredCommands[activeIndex]) {
      executeCommand(filteredCommands[activeIndex]);
    }
  };

  return (
    <>
      <header className="navbar">
        <NavLink to="/" className="logo">
          ADITI
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/skills">SKILLS</NavLink>
          <NavLink to="/projects">PROJECTS</NavLink>
          <NavLink to="/journey">JOURNEY</NavLink>
          <NavLink to="/build">BUILD</NavLink>
          <NavLink to="/achievements">PROOF</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </nav>

        <div className="navbar-actions">
          <button className="command-trigger" onClick={() => setPaletteOpen(true)} aria-label="Open command palette">
            <span>⌘</span>K
          </button>
          <div className="status">
            <span></span>
            AVAILABLE
          </div>
        </div>
      </header>

      {paletteOpen && (
        <div className="command-overlay" onMouseDown={closePalette}>
          <section className="command-palette" role="dialog" aria-modal="true" aria-label="Command palette" onMouseDown={(event) => event.stopPropagation()}>
            <div className="command-search-row">
              <span className="command-search-icon">⌕</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder="Search Aditi's workspace..."
                aria-label="Search workspace commands"
              />
              <kbd>ESC</kbd>
            </div>

            <div className="command-list" role="listbox" aria-label="Workspace commands">
              {filteredCommands.length > 0 ? filteredCommands.map((command, index) => (
                <button
                  className={`command-item ${index === activeIndex ? "command-item-active" : ""}`}
                  key={command.label}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => executeCommand(command)}
                  role="option"
                  aria-selected={index === activeIndex}
                >
                  <span className="command-item-arrow">→</span>
                  <span className="command-item-copy">
                    <strong>{command.label}</strong>
                    <small>{command.hint}</small>
                  </span>
                  {command.external && <span className="command-external">↗</span>}
                </button>
              )) : (
                <p className="command-empty">No matching commands.</p>
              )}
            </div>

            <footer className="command-footer">
              <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
              <span><kbd>↵</kbd> Open</span>
              <span><kbd>ESC</kbd> Close</span>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}

export default Navbar;