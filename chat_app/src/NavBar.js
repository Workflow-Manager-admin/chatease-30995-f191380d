import React, { useState, useEffect } from "react";
import "./NavBar.css";

// PUBLIC_INTERFACE
function NavBar() {
  // Theme state: 'light' or 'dark'
  const [theme, setTheme] = useState(() => {
    // Use saved theme if present, else match system preference, else default light
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem('talkbuddy-theme');
      if (saved) return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
        return 'dark';
    }
    return 'light';
  });

  // Update root and persist theme
  useEffect(() => {
    document.documentElement.setAttribute('data-talkbuddy-theme', theme);
    if (window && window.localStorage)
      window.localStorage.setItem('talkbuddy-theme', theme);
  }, [theme]);

  // Smooth scroll on nav click (if section exists)
  const handleNav = (id) => (e) => {
    e.preventDefault();
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toggle between 'light' and 'dark'
  const toggleTheme = () =>
    setTheme((curr) => (curr === "light" ? "dark" : "light"));

  return (
    <nav className={`tb-navbar${theme === 'dark' ? ' dark' : ' light'}`}>
      <div className="tb-navbar-container">
        <div className="tb-navbar-left">
          <span className="tb-logo" style={{fontFamily: "'Poppins', 'Raleway', sans-serif"}}>
            <span role="img" aria-label="logo" className="tb-logo-emoji">
              💬
            </span>{" "}
            <span className="tb-logo-text">TalkBuddy</span>
          </span>
        </div>
        <ul className="tb-navbar-links">
          <li><a href="#home" className="tb-navbar-link" onClick={handleNav('home')}>Home</a></li>
          <li><a href="#chat" className="tb-navbar-link" onClick={handleNav('chat')}>Chat</a></li>
          <li><a href="#about" className="tb-navbar-link" onClick={handleNav('about')}>About</a></li>
        </ul>
        <button
          aria-label="Toggle dark/light mode"
          className="tb-theme-toggle"
          onClick={toggleTheme}
          title="Toggle dark/light mode"
        >
          {/* Simple icons. Add SVG for better effect */}
          {theme === "dark" ? (
            // Sun icon for light mode
            <svg width="24" height="24" fill="none" stroke="#FFD166" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" fill="none"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.41 1.41M17.36 17.36l1.41 1.41M1 12h2M21 12h2M4.22 19.78l1.41-1.41M17.36 6.64l1.41-1.41"/>
            </svg>
          ) : (
            // Moon icon for dark mode
            <svg width="24" height="24" fill="none" stroke="#23272F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
