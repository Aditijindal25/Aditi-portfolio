import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import InteractionLayer from "./components/InteractionLayer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Journey from "./pages/Journey";
import Build from "./pages/Build";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/build" element={<Build />} />
        <Route path="/achievements" element={<Achievements />} />
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

      <AnimatedRoutes />

    </BrowserRouter>
  );
}

export default App;