import { motion } from "framer-motion";
import "./Hero.css";
import StarsBackground from "./StarsBackground";

export default function Hero() {
  return (
    <motion.section
      id="Hero" className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* ⭐ Stars Background (INSIDE hero) */}
      <StarsBackground />

      {/* 🔤 Hero Content */}
      <div className="hero-content">

  

  <motion.h1
    className="hero-name"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    Hi, I'm Thulasinatha
  </motion.h1>

 

  <motion.div
    className="hero-vision-card"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.1 }}
  >
    I specialize in React-based applications with clean UI, optimized performance,
    and real-world problem solving.
  </motion.div>

  <motion.div className="hero-buttons">
    <motion.button className="hero-btn">
      <a href="#projects">View My Work</a>
    </motion.button>

    
  </motion.div>

  <motion.div
    className="hero-tech"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.4 }}
  >

  </motion.div>

</div>

    </motion.section>
  );
}
