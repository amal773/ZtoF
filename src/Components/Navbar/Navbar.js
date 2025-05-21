import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Director", href: "#director" },
  { label: "Faculty", href: "#faculty" },
  { label: "Highlights", href: "#highlights" },
  { label: "Tutorials", href: "#tutorials" },
  { label: "Contact", href: "#contact" }
]

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
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label} <span className="nav-icon">+</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
