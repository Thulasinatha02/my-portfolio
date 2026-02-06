import { motion } from "framer-motion";
import "./about.css";
import aboutImg from "../assets/about-illustration.png";

const skills = [
  { name: "HTML5", level: 80 },
  { name: "CSS3", level: 75 },
  { name: "JavaScript", level: 50 },
  { name: "PHP", level: 70 },
  { name: "ReactJS", level: 80 },
  { name: "Python", level: 75 },
  { name: "Hardware and Configuration", level: 80 },
  { name: "WordPress", level: 80 },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* LEFT – SKILLS */}
        <div className="skills">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="progress-bar">
                <motion.div
                  className="progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  viewport={{ once: false }} // 🔥 replay on scroll
                />
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT – ABOUT CONTENT */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
           <h2>About Me</h2>

<motion.div
  className="underline"
  initial={{ width: 0 }}
  whileInView={{ width: 60 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false }}
/>

<p>
  Enthusiastic computer science graduate eager to apply programming
  knowledge and problem-solving skills in an entry-level IT role,
  contributing to team success and enhancing user experiences through
  technology.
</p>

<motion.img
  src={aboutImg}
  alt="Developer working on computer"
  className="about-img"
  animate={{
    rotate: [0, -3, 3, -3, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 1,
  }}
/>



        </motion.div>

      </div>
    </section>
  );
}
