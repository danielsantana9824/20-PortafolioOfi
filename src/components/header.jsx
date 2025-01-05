import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-white" style={{ backgroundColor: '#0056b3' }}>
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center">
        {/* Título a la izquierda */}
        <h1 className="m-0">Daniel Ramirez</h1>
  
        {/* Barra de navegación a la derecha */}
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-white">
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" className="nav-link text-white">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link text-white">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resume" className="nav-link text-white">
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  
  );
};

export default Header;
