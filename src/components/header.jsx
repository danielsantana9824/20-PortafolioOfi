import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Título del encabezado */}
        <h1 className="m-0">Daniel Ramirez</h1>

        {/* Barra de navegación */}
        <nav>
          <ul className="nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link text-white"
                activeClassName="active text-warning"
              >
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className="nav-link text-white"
                activeClassName="active text-warning"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link text-white"
                activeClassName="active text-warning"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/resume"
                className="nav-link text-white"
                activeClassName="active text-warning"
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
