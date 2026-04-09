import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [lightNav, setLightNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // change navbar when leaving hero section
      setLightNav(window.scrollY > window.innerHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${lightNav ? "light" : "dark"}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <h1>MyPortfolio</h1>
      
      <button 
        className="menu-btn" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <a href="#Hero" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </motion.nav>
  );
}
