import React from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="ZtoF Logo" className="navbar-logo" />
        <span className="navbar-title">ZtoF</span>
        <div className="navbar-divider" />
      </div>
      <ul className="navbar-menu">
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
