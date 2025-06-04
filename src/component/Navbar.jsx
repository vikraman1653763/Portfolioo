import React, { useState, useEffect } from "react";
import "../style/Navbar.css"; // Import styles
import { LiaVine } from "react-icons/lia";
import { fallDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <LiaVine />
        <span className="navbar-name">ikraman G</span>
      </div>

      {/* Burger menu for mobile view */}
      <div className="burger-menu">
      <Menu right outerContainerId="outer-container" >
      <a href="#about" className="menu-item">About</a>
          <a href="#work" className="menu-item">Work</a>
          <a href="#contact" className="menu-item">Contact</a>
        </Menu>
      </div>

      {/* Links for desktop view */}
      <div className="navbar-right">
      <a href="#about" className="navbar-link">About</a>
<a href="#work" className="navbar-link">Work</a>
<a href="#contact" className="navbar-link">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
