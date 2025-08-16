
import React, { useState } from 'react';
import './StyleComponents/StyleNavigationBar.css';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}

        <a href="/" className="logo-container">
          <div className="logo-rs">
            <span className="logo-r">R</span>
            <span className="logo-s">S</span>
          </div>
          <div className="logo-text">ROSIDI SULAM ALIS & ACADEMY</div>
        </a>



        {/* Hamburger Button */}
        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Menu */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className="nav-link">Home</a>
          <a href="/aboutme" className="nav-link">About</a>

          {/* Dropdown */}
          <div
            className={`dropdown ${isDropdownOpen ? 'open' : ''}`}
            onClick={toggleDropdown}
          >
            <span className="nav-link dropdown-toggle">
              Services
              <i className="fas fa-chevron-down dropdown-icon"></i>
            </span>
            <div className="dropdown-menu">
              <a href="/sulam-alis" className="dropdown-item">Sulam Alis</a>
              <a href="/remove-sulamalis" className="dropdown-item">Hapus Sulam Alis</a>
              <a href="/sulam-bibir" className="dropdown-item">Sulam Bibir</a>
              <a href="/sulam-eyeliner" className="dropdown-item">Sulam Eyeliner</a>
              <a href="/laser-removal" className="dropdown-item">Hapus Tato</a>
            </div>
          </div>

          <a href="/galery" className="nav-link">Gallery</a>
          <a href="/contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
