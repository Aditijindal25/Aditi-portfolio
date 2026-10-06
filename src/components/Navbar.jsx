import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { projects } from "../pages/Projects";

const pageCommands = [
  { label: "Go to Home", hint: "Home page", path: "/" },
  { label: "Go to Projects", hint: "Selected work", path: "/projects" },
  { label: "Go to About", hint: "Profile and focus", path: "/about" },
  { label: "Go to Contact", hint: "Get in touch", path: "/contact" },
  { label: "Go to Skills", hint: "Technical skills", path: "/skills" },
  { label: "Go to Journey", hint: "Experience and education", path: "/journey" },
  { label: "Go to Build", hint: "How I build", path: "/build" },
];

const commands = [
  ...pageCommands,
  ...projects.map((project) => ({
    label: `Go to ${project.title}`,
    hint: `Project ${project.number}`,
    path: "/projects",
    projectNumber: project.number,
  })),
  { label: "Open Resume", hint: "View resume PDF", action: "resume" },
  { label: "Copy email address", hint: "aditijindal441@gmail.com", action: "copy-email" },
  { label: "Open GitHub profile", hint: "github.com/Aditijindal25", url: "https://github.com/Aditijindal25", external: true },
  { label: "Open LinkedIn", hint: "linkedin.com/in/aditijindal2506", url: "https://www.linkedin.com/in/aditijindal2506", external: true },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);
  const inputRef = useRef(null);
  const paletteRef = useRef(null);
  const resultsRef = useRef(null);
  const triggerRef = useRef(null);
  const feedbackTimerRef = useRef(null);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [activeIndicator, setActiveIndicator] = useState({ left: 0, width: 0 });

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
        setMobileMenuOpen(false);
      }

      if (event.key === "Escape") {
        setPaletteOpen(false);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (paletteOpen) {
      const trigger = triggerRef.current;
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      inputRef.current?.focus();

      return () => {
        document.body.style.overflow = previousOverflow;
        trigger?.focus();
      };
    }
  }, [paletteOpen]);

  useEffect(() => {
    return () => window.clearTimeout(feedbackTimerRef.current);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    const activeLink = nav?.querySelector("a.active");

    if (!nav || !activeLink) {
      return;
    }

    const navBounds = nav.getBoundingClientRect();
    const activeBounds = activeLink.getBoundingClientRect();
    setActiveIndicator({
      left: activeBounds.left - navBounds.left,
      width: activeBounds.width,
    });
  }, [location.pathname, mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      const nav = navRef.current;
      const activeLink = nav?.querySelector("a.active");

      if (!nav || !activeLink) {
        return;
      }

      const navBounds = nav.getBoundingClientRect();
      const activeBounds = activeLink.getBoundingClientRect();
      setActiveIndicator({
        left: activeBounds.left - navBounds.left,
        width: activeBounds.width,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closePalette = () => {
    setPaletteOpen(false);
    setQuery("");
  };

  const executeCommand = (command) => {
    if (command.action === "copy-email") {
      copyEmailAddress();
      return;
    }

    closePalette();

    if (command.action === "resume") {
      window.open("/ADITI-JINDAL.pdf", "_blank", "noopener,noreferrer");
      return;
    }

    if (command.external) {
      window.open(command.url, "_blank", "noopener,noreferrer");
      return;
    }

    navigate(command.path);

    if (command.projectNumber) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          const projectRow = document.getElementById(`project-${command.projectNumber}`);
          projectRow?.scrollIntoView({ behavior: "smooth", block: "center" });
          projectRow?.focus({ preventScroll: true });
        });
      });
    }
  };

  const copyEmailAddress = async () => {
    const email = "aditijindal441@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const emailField = document.createElement("textarea");
      emailField.value = email;
      emailField.style.position = "fixed";
      emailField.style.opacity = "0";
      document.body.appendChild(emailField);
      emailField.select();
      const copied = document.execCommand("copy");
      emailField.remove();

      if (!copied) {
        setFeedback("Copy failed");
        return;
      }
    }

    setFeedback("Email copied");
    window.clearTimeout(feedbackTimerRef.current);
    feedbackTimerRef.current = window.setTimeout(() => setFeedback(""), 1800);
  };

  const handlePaletteKeyDown = (event) => {
    if (event.key === "Tab") {
      const focusableElements = paletteRef.current?.querySelectorAll("input, button:not([disabled])");
      const firstElement = focusableElements?.[0];
      const lastElement = focusableElements?.[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % Math.max(filteredCommands.length, 1));
      inputRef.current?.focus();
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + filteredCommands.length) % Math.max(filteredCommands.length, 1));
      inputRef.current?.focus();
    }

    if (event.key === "Enter" && document.activeElement === inputRef.current && filteredCommands[activeIndex]) {
      event.preventDefault();
      executeCommand(filteredCommands[activeIndex]);
    }
  };

  const currentActiveIndex = Math.min(activeIndex, Math.max(filteredCommands.length - 1, 0));

  useEffect(() => {
    if (paletteOpen) {
      resultsRef.current
        ?.querySelector(`#command-${currentActiveIndex}`)
        ?.scrollIntoView({ block: "nearest" });
    }
  }, [currentActiveIndex, paletteOpen, query]);

  return (
    <>
      <header className="navbar">
        <NavLink to="/" className="logo">
          ADITI
        </NavLink>

        <nav ref={navRef} id="primary-navigation" className={`nav-links ${mobileMenuOpen ? "nav-links-open" : ""}`}>
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>HOME</NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>ABOUT</NavLink>
          <NavLink to="/skills" onClick={() => setMobileMenuOpen(false)}>SKILLS</NavLink>
          <NavLink to="/projects" onClick={() => setMobileMenuOpen(false)}>PROJECTS</NavLink>
          <NavLink to="/journey" onClick={() => setMobileMenuOpen(false)}>JOURNEY</NavLink>
          <NavLink to="/build" onClick={() => setMobileMenuOpen(false)}>BUILD</NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</NavLink>
          <a href="/ADITI-JINDAL.pdf" target="_blank" rel="noopener noreferrer" download onClick={() => setMobileMenuOpen(false)}>RESUME</a>
          <span
            className="nav-active-indicator"
            aria-hidden="true"
            style={{ left: activeIndicator.left, width: activeIndicator.width }}
          />
        </nav>

        <button
          className="nav-toggle"
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="navbar-actions">
          <button
            ref={triggerRef}
            className="command-trigger"
            onClick={() => {
              setQuery("");
              setActiveIndex(0);
              setPaletteOpen(true);
            }}
            aria-label="Open site search"
            title="Search pages and projects"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="10.8" cy="10.8" r="6.3" />
              <path d="m15.5 15.5 4.2 4.2" />
            </svg>
          </button>
          <div className="status">
            <span></span>
            SEEKING INTERN
          </div>
        </div>
      </header>

      {paletteOpen && createPortal(
        <div className="command-overlay" onMouseDown={closePalette}>
          <section
            ref={paletteRef}
            className="command-palette"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            onKeyDown={handlePaletteKeyDown}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="command-search-row">
              <svg className="command-search-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <circle cx="10.8" cy="10.8" r="6.3" />
                <path d="m15.5 15.5 4.2 4.2" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActiveIndex(0);
                }}
                placeholder="Search pages, projects, and actions..."
                aria-label="Search commands"
                aria-autocomplete="list"
                aria-controls="command-results"
                aria-activedescendant={filteredCommands[currentActiveIndex] ? `command-${currentActiveIndex}` : undefined}
              />
              <kbd>ESC</kbd>
            </div>

            <div ref={resultsRef} id="command-results" className="command-list" role="listbox" aria-label="Commands">
              {filteredCommands.length > 0 ? filteredCommands.map((command, index) => (
                <button
                  id={`command-${index}`}
                  className={`command-item ${index === currentActiveIndex ? "command-item-active" : ""}`}
                  key={command.label}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => executeCommand(command)}
                  role="option"
                  aria-selected={index === currentActiveIndex}
                >
                  <span className="command-item-arrow" aria-hidden="true">→</span>
                  <span className="command-item-copy">
                    <strong>{command.label}</strong>
                    <small>{command.hint}</small>
                  </span>
                  {(command.external || command.action === "resume") && <span className="command-external" aria-hidden="true">↗</span>}
                </button>
              )) : (
                <p className="command-empty">No matching commands.</p>
              )}
            </div>

            <footer className="command-footer" aria-live="polite">
              {feedback && <span className="command-feedback">{feedback}</span>}
              <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
              <span><kbd>↵</kbd> Open</span>
              <span><kbd>ESC</kbd> Close</span>
            </footer>
          </section>
        </div>,
        document.body,
      )}
    </>
  );
}

export default Navbar;