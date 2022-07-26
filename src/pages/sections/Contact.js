import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>
        Do you want to create awesome products? Just send a mail to
        dev@crishood.com
      </p>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/crishood/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/crishood" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
