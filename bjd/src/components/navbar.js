import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from "gatsby"
import logo from "../images/bjd-favicon.png"

const Navbar = ({siteTitle, navLinks}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Change this value to adjust when the transition happens
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="logo-container">
          <img
            src={logo}
            alt="Logo"
            className={`logo ${scrolled ? 'scrolled' : ''}`}
          />
          <ul className="nav-links">
          <Link
            to="/"
            style={{
                fontSize: `var(--font-lg)`,
                textDecoration: `none`,
                paddingLeft: `2rem`
              }}>
            {siteTitle}
          </Link>
          </ul>
        </div>
        
        <ul className="nav-links">
            {navLinks.map(link => (
                <Link
                    to={link.url}
                >
                    <li>{link.text}</li>
                </Link>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;