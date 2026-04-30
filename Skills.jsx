import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "Python", level: "90%" },
    { name: "Java", level: "80%" },
    { name: "React", level: "75%" },
    { name: "MongoDB", level: "70%" }
  ];

  return (
    <section id="skills" className="skills split-section">
      <div className="left">
        <h2>My Skills</h2>
        {skills.map((skill, index) => (
          <div key={index}>
            <p>{skill.name}</p>
            <div className="bar">
              <motion.div
                className="fill"
                initial={{ width: 0 }}
                animate={{ width: skill.level }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="right">
        <div className="skill-box">
          <h3>What I Focus On</h3>
          <p>AI Projects</p>
          <p>Web Development</p>
          <p>Machine Learning</p>
          <p>Creative UI Design</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;