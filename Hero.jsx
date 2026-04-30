import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Hi, I'm Pallavi Batavia</h1>

      <h3>
        <Typewriter
          words={[
            "AI Student",
            "Web Developer",
            "Data Science Enthusiast",
            "Problem Solver"
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
        />
      </h3>

      <p>Building smart and innovative solutions with code.</p>

      <a href="/RESUME_PB.pdf" download>
        <button>Download Resume</button>
      </a>
    </motion.section>
  );
}

export default Hero;