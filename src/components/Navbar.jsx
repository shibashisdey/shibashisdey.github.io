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
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
            <span className="visually-hidden">
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </span>
            <span className="theme-icon" aria-hidden="true">
              {theme === "dark" ? (
                <svg viewBox="0 0 24 24" role="presentation">
                  <path
                    d="M12 4.5 13.1 2 14.2 4.5 16.5 5.6 14.2 6.7 13.1 9 12 6.7 9.7 5.6 12 4.5Zm6 7.5 1.1-2.5 1.1 2.5 2.3 1.1-2.3 1.1-1.1 2.5-1.1-2.5-2.3-1.1L18 12Zm-6 1a5 5 0 1 1-5-5 5 5 0 0 1 5 5Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" role="presentation">
                  <path
                    d="M13.5 2.6a8.9 8.9 0 1 0 7.9 12.9 7.3 7.3 0 0 1-7.9-12.9Z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </span>
          </button>

          <button
            className={`nav-toggle ${isOpen ? "is-open" : ""}`}
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
