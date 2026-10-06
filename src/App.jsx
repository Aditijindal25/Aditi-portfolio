import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import InteractionLayer from "./components/InteractionLayer";
import Terminal from "./components/Terminal";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Journey from "./pages/Journey";
import Build from "./pages/Build";
import Contact from "./pages/Contact";

import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    const revealItems = document.querySelectorAll(
      ".page-transition .home-content, .page-transition .system-card, .page-transition .projects-header, " +
      ".page-transition .project-filters, .page-transition .project-item, .page-transition .about-intro, " +
      ".page-transition .about-lede, .page-transition .about-section-heading, .page-transition .about-principle, " +
      ".page-transition .about-detail-block, .page-transition .about-build-list li, .page-transition .skills-header, " +
      ".page-transition .skill-group, .page-transition .journey-header, .page-transition .journey-item, " +
      ".page-transition .build-page-header, .page-transition .build-process, .page-transition .contact-content",
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.setAttribute("data-reveal-state", "visible"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-reveal-state", "visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index % 5 * 55, 220)}ms`);
      item.setAttribute("data-reveal-state", "waiting");
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/build" element={<Build />} />
        <Route path="/achievements" element={<Navigate to="/" replace />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <InteractionLayer />
      <Terminal />

      <AnimatedRoutes />

    </BrowserRouter>
  );
}

export default App;