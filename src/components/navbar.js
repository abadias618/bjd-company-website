import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from "gatsby"
import logo from "../images/bjd-favicon.png"

const Navbar = ({siteTitle, navLinks}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Close menu when scrolling
    window.addEventListener('scroll', () => setIsMenuOpen(false));

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', () => setIsMenuOpen(false));
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="logo-container">
          <img
            src={logo}
            alt="Logo"
            className={`logo ${scrolled ? 'scrolled' : ''}`}
          />
          <Link to="/" className='site-title'>
            {siteTitle}
          </Link>
        </div>
        
        {/* Burger Menu Button */}
        <div 
          className={`burger-menu ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
        
        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              onClick={closeMenu}
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