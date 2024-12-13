import React ,{useEffect} from "react";
import "../style/Contact.css";
import contact from '/assets/contact.webp';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
 
const Contact = () => {

  useEffect(()=>{
    AOS.init({
      duration:1000,
      easing:'ease'
    }
  );
},[])

  return (
    <section className="contact-container" >
      <div className="contact-image" data-aos='fade-up'>
        <img src={contact} alt="Contact" />
      </div>
      <div className="contact-details">
        <h2 className="contact-title">Find me on</h2>
        <p className="contact-description">
          Have a project idea, collaboration in mind, or just want to say hi? Reach out to me anytime—I'm always excited to connect with like-minded individuals and teams!
        </p>
        <ul className="contact-info" >
          <li>Email: <a href="mailto:vikraman1653763@gmail.com">vikraman1653763@gmail.com</a></li>
          <li>Phone: <a href="tel:+916383606300">6383606300</a></li>
          <li id="contact">LinkedIn: <a href="https://www.linkedin.com/in/vikraman-g/" target="_blank" rel="noopener noreferrer">linkedin.com/in/vikraman-g</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;