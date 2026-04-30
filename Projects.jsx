import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Crime Detection System",
      desc: "Detects suspicious activity using AI."
    },
    {
      title: "Portfolio Website",
      desc: "Modern interactive personal portfolio."
    },
    {
      title: "Dashboard App",
      desc: "Visual data monitoring dashboard."
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <button>GitHub</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;