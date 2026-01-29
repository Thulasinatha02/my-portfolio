import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-overlay">

        {/* RIGHT SIDE CARD */}
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
        </motion.div>

      </div>
    </section>
  );
}
