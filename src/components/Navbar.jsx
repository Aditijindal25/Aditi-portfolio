import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        ADITI<span>.</span>
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/skills">SKILLS</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/journey">JOURNEY</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </nav>

      <div className="status">
        <span></span>
        AVAILABLE
      </div>
    </header>
  );
}

export default Navbar;