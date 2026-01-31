import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [lightNav, setLightNav] = useState(false);

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
      <div>
        <a href="#Hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
        
      </div>
    </motion.nav>
  );
}
