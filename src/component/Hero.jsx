import React from 'react';
import '../style/Hero.css';
import { ImStackoverflow } from "react-icons/im";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import TypingEffect from "./TypingEffect.jsx";

const Hero = () => {
  const downloadPDF= ()=>{
    const pdf = '/assets/Resume.pdf'
    const link = document.createElement("a");
    link.href=pdf;
    link.target='_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <section className="hero-section" id='about'>
        <div className='hero-container'>

      <div className="hero-left">
        <h1 className="hero-title">Hi, I'm Vikraman G</h1>
        <h4 className='hero-job'><strong><TypingEffect
              strings={[ "Fullstack Developer","Software Developer", "Frontend Developer", "Backend Developer","WebGIS Developer", "MERN  Stack Developer","Freelancer" ]}
              speed={200} 
              delay={100} 
              /></strong></h4>
        <p className="hero-description">
          Crafting dynamic websites, from UI design to deployment, with a knack for seamless user experiences.
        </p>
        <div className="hero-links">
          <a href="https://www.linkedin.com/in/vikraman-g/" target="_blank" rel="noopener noreferrer" className="hero-link"><FaLinkedin/></a>
          <a href="https://github.com/vikraman1653763" target="_blank" rel="noopener noreferrer" className="hero-link"><GrGithub/></a>
          <a href="https://stackoverflow.com/users/23576407/vikraman-g" target="_blank" rel="noopener noreferrer" className="hero-link"><ImStackoverflow/></a>
        </div>
        <button onClick={downloadPDF} className="hero-resume">View My Resume</button>
      </div>
      <div className="hero-right">
        <img 
          src="/assets/webby.webp" 
          alt="Vikraman" 
          className="hero-image"
          />
      </div>
    </div>
    </section>
  );
};

export default Hero;
