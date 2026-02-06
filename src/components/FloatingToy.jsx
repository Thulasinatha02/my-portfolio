import { motion } from "framer-motion";
import "./FloatingToy.css";
import toy from "../assets/computer-toy.png";

export default function FloatingToy() {
  return (
    <motion.div
      className="floating-toy"
      animate={{
        y: [0, -15, 0],   // up & down
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img src={toy} alt="Tech Mascot" />
    </motion.div>
  );
}
