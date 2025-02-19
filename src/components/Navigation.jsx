import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="nav-link">About Me</Link>
      <Link to="/portfolio" className="nav-link">Portfolio</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/resume" className="nav-link">Resume</Link>
    </nav>
  );
};

export default Navigation;
