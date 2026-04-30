import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-icons">
        <FaEnvelope />
        <FaGithub />
        <FaLinkedin />
      </div>

      <p>Email: pallavi.17767@sakec.ac.in</p>
    </section>
  );
}

export default Contact;