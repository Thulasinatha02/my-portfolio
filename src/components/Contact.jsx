import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-overlay">

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <h2>Contact Me</h2>

          <p>
            📞{" "}
            <a href="tel:6385511589" className="contact-link">
              63855 11589
            </a>
          </p>

          <p>
            📧{" "}
            <a href="mailto:thulasinathabca@gmail.com" className="contact-link">
              thulasinathabca@gmail.com
            </a>
          </p>

          <p>📍 India</p>

          {/* 🔗 Social Icons */}
          <div className="contact-socials">
            <motion.a
              href="https://www.linkedin.com/in/thulasinatha-m-4660a7257/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="social-icon linkedin"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://github.com/Thulasinatha02"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="social-icon github"
            >
              <FaGithub />
            </motion.a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
