import React, { useEffect } from "react";
import "../style/Contact.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { FaSquareFacebook, FaSquareInstagram, FaSquareThreads } from "react-icons/fa6";
import Tom from "./Tom.jsx";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
    });
  }, []);


  return (
    <div className="footer-container">
      <img src="/assets/wave.png" className="footer-wave" alt="Wave" />
      <section className="contact-container">
        <div className="contact-image" data-aos="fade-up">
          <Tom />
        </div>

        <div className="contact-details">
          {/* Staggered Title Animation */}
          <h2 className="contact-title">Find me on</h2>

          <p className="contact-description">
            Have a project idea, collaboration in mind, or just want to say hi? Reach out to me anytime—I'm always
            excited to connect with like-minded individuals and teams!
          </p>

          <ul className="contact-info">
            <li>
              Email: <a href="mailto:vikraman1653763@gmail.com">vikraman1653763@gmail.com</a>
            </li>
            <li>
              Phone: <a href="tel:+916383606300">6383606300</a>
            </li>
            <li id="contact">
              LinkedIn: {" "}
              <a href="https://www.linkedin.com/in/vikraman-g/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/vikraman-g
              </a>
            </li>
          </ul>
        </div>
      </section>

      <hr className="hero-line" />

      <footer>
        <div className="footer-dev">
          Designed and developed by <span>me</span>
        </div>
        <div className="footer-copy">Copyright © 2024</div>

        <div className="footer-social">
          <a
            href="https://www.facebook.com/share/1GDqYu47ax/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Facebook"
          >
            <FaSquareFacebook />
          </a>
          <a
            href="https://www.instagram.com/sanji_0.3/profilecard/?igsh=MXJjbmc1MXB0bTBudw== "
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <FaSquareInstagram />
          </a>
          <a
            href="https://www.threads.net/@sanji_0.3"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Threads"
          >
            <FaSquareThreads />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;