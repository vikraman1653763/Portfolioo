import React, { useState, useEffect } from "react";
import "../style/Navbar.css";
import { LiaVine } from "react-icons/lia";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [menuOpen]);


  const menuVariants = {
    hidden: { x: "100%" , y:"-100%"},
    visible: { x: 0 ,y:0},
    exit: { x: "100%" , y:"-100%"}
  };

  return (
    <nav className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <LiaVine />
        <span className="navbar-name">ikraman G</span>
      </div>

      {/* Mobile menu icon */}
      <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Desktop links */}
      <div className="navbar-right">
        <a href="#about" className="navbar-link">About</a>
        <a href="#work" className="navbar-link">Work</a>
        <a href="#contact" className="navbar-link">Contact</a>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
      {menuOpen && (
    <>
      <motion.div
        
      />

      <motion.div
        className="mobile-menu "
        variants={menuVariants}
       
        initial={{ clipPath: "circle(0% at 100% 0%)" }}
        animate={{ clipPath: "circle(150% at 50% 50%)" }}
        exit={{ clipPath: "circle(0% at 100% 0%)" }}
        transition={{ duration: .6, ease: "easeInOut" }}
      >
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </motion.div>
    </>
  )}
</AnimatePresence>

    </nav>
  );
};

export default Navbar;
