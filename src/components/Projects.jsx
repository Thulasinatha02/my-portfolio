import { motion } from "framer-motion";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      {/* GRID CONTAINER */}
      <div className="projects-grid">

        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3>Full Finance ERP – Bellwin Enterprises</h3>
          <p>
            Contributed to a full finance ERP application, developing web-based functionality, user interfaces, data handling, API integration, debugging, and business workflow features.
          </p>
        </motion.div>

        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3>Lorry Connect – Transport Management Mobile Application</h3>
          <p>
            Developed mobile application functionality for transport operations using React Native, including application UI, workflow features, API integration, data handling, and transport-related management screens.
          </p>
        </motion.div>

        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3>Real-Time Class Management – Dance Academy</h3>
          <p>
            Developed application functionality for real-time dance academy class management, including interactive interfaces, class-related workflows, data handling, and user-focused application features.
          </p>
        </motion.div>

        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3>Solar Panel Sunlight Tracking Mechanism</h3>
          <p>
            Built an autonomous solar tracking system using Arduino Nano, LDR sensors, and servo motors.
            Programmed sensor-based feedback logic to detect sunlight intensity and dynamically orient panels.
            Improved solar energy efficiency by automating alignment.
          </p>
        </motion.div>
        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3>Personal Portfolio Website</h3>
          <p>
          A responsive and animated personal portfolio website built using React and Framer Motion to showcase my skills,
           projects, certificates, and resume. The website features smooth animations, a modern dark UI, and an interactive
            user experience designed to highlight my work effectively.
          </p>
        </motion.div>
        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3>SmartCart Navigator: Intelligent Indoor Navigation for Modern Supermarkets (ONGOING)</h3>
          <p>
          SmartCart Navigator is an intelligent indoor navigation system designed to help customers quickly locate products inside large supermarkets. 
          The application provides real-time directions using a digital store map and shortest-path algorithms.
           Users can search for individual items or follow an optimized route for their entire shopping list. 
          <p>The system eliminates confusion, reduces shopping time, and improves overall customer experience.
            This project demonstrates a scalable and cost-effective solution for smart retail environments.</p>
          </p>
        </motion.div>
       

      </div>
    </section>
  );
}
