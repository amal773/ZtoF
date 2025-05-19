import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="ZtoF Logo" className="navbar-logo" />
        <span className="navbar-title">ZtoF</span>
        <div className="navbar-divider" />
      </div>

      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
      </div>

      <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <li><a href="#home">Home <span className="nav-icon">+</span></a></li>
        <li><a href="#director">Director <span className="nav-icon">+</span></a></li>
        <li><a href="#faculty">Faculty <span className="nav-icon">+</span></a></li>
        <li><a href="#highlights">Highlights <span className="nav-icon">+</span></a></li>
        <li><a href="#tutorials">Tutorials <span className="nav-icon">+</span></a></li>
        <li><a href="#contact">Contact <span className="nav-icon">+</span></a></li>
      </ul>
    </nav>
  );
}
