import "./about.css";

const skills = [
  { name: "HTML5", level: 80 },
  { name: "CSS3", level: 75 },
  { name: "JavaScript", level: 90 },
  { name: "PHP", level: 70 },
  { name: "ReactJS", level: 80 },
  { name: "Python", level: 75 },
  { name: "VanillaJS", level: 85 },
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
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT – ABOUT TEXT */}
        <div className="about-text">
          <h2>About Me</h2>
          <div className="underline"></div>

          <p>
            Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua
            irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit
            aute dolore irure nostrud ut incididunt.
          </p>

          <p>
            Anim laborum reprehenderit labore magna ut dolore quis irure.
            Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi
            ea minim proident.
          </p>
        </div>

      </div>
    </section>
  );
}
