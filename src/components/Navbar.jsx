import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const navRef = useRef(null);

  const handleToggle = () => setIsOpen((open) => !open);
  const handleClose = () => setIsOpen(false);

  const applyTheme = (nextTheme) => {
    document.documentElement.setAttribute("data-theme", nextTheme);
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const handleThemeToggle = () => {
    applyTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    applyTheme(initialTheme);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-container">
        <div className="logo">Shibashis Dey</div>

        <ul
          id="primary-navigation"
          className={`nav-links ${isOpen ? "is-open" : ""}`}
        >
          <li>
            <a href="#about" onClick={handleClose}>About</a>
          </li>
          <li>
            <a href="#services" onClick={handleClose}>Services</a>
          </li>
          <li>
            <a href="#skills" onClick={handleClose}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={handleClose}>Projects</a>
          </li>
          <li>
            <a href="#experience" onClick={handleClose}>Experience</a>
          </li>
          <li>
            <a href="#contact" onClick={handleClose}>Contact</a>
          </li>
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={handleThemeToggle}
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>

          <button
            className="nav-toggle"
            type="button"
            onClick={handleToggle}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
