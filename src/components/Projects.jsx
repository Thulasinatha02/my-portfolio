import { motion } from "framer-motion";
import "./Projects.css";


export default function Projects() {
  return (
    <section id="projects" className="projects">
      
      

      <h2>Projects</h2>

      <motion.div
        className="card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <h3>Portfolio Website</h3>
        <p>Built with React, CSS & Framer Motion</p>
      </motion.div>

    </section>
  );
}
