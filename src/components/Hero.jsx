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
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Hi, THULASINATHA I’m a Web Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I build modern React applications
        </motion.p>

        <motion.button
  className="hero-btn"
  whileHover={{
    scale: 1.1,
    boxShadow: "0px 0px 20px rgba(125, 211, 252, 0.8)"
  }}
  whileTap={{ scale: 0.95 }}
>
  <a href="#projects">View My Work</a>
</motion.button>
      </div>
    </motion.section>
  );
}
