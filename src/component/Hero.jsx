import React from 'react';
import '../style/Hero.css';
import { ImStackoverflow } from "react-icons/im";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import TypingEffect from "./TypingEffect.jsx";
import { motion} from 'framer-motion';
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

  const name = "H.i, I.'.m V.i.k.r.a.m.a.n G";
  const letters = name.split("."); // Split name into individual characters

  const animations = letters.map((_, index) => ({
    initial: {
      opacity: 0,
      x: index % 2 === 0 ? -8 : 10, // Alternate direction for each letter
      y: index % 3 === 0 ? -7 : 15, // Add variation in vertical movement
    },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.5, delay: index * 0.1 }, // Stagger letters
  }));
  return (
    <section className="hero-section" id='about'>
        <div className='hero-container'>

      <div className="hero-left">
      <div className='hero-letter'>

      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={animations[index].initial}
          animate={animations[index].animate}
          transition={animations[index].transition}
          style={{ display: "inline-block" }}
          className='hero-title'
        >
          {letter}
        </motion.span>
      ))}
      </div>

        <h4 className='hero-job'><strong><TypingEffect
              strings={[ "Fullstack Developer","Software Developer", "Frontend Developer", "Backend Developer","WebGIS Developer", "MERN  Stack Developer","Freelancer" ]}
              speed={200} 
              delay={100} 
              /></strong></h4>
        <motion.p 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1,ease:'easeInOut',delay: .5}}

        className="hero-description">
          Crafting dynamic websites, from UI design to deployment, with a knack for seamless user experiences.
        </motion.p>
        <div className="hero-links">
          <motion.a 
             initial={{scale:0}}
             animate={{scale:1}}
             transition={{duration:1,ease:'easeInOut',delay: .5}}
          href="https://www.linkedin.com/in/vikraman-g/" target="_blank" rel="noopener noreferrer" className="hero-link"><FaLinkedin/></motion.a>
          <motion.a
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{duration:1,ease:'easeInOut',delay: .7}}
            href="https://github.com/vikraman1653763" target="_blank" rel="noopener noreferrer" className="hero-link"><GrGithub/></motion.a>
          <motion.a   
            initial={{scale:0}}
             animate={{scale:1}}
             transition={{duration:1,ease:'easeInOut',delay: .9}}
             href="https://stackoverflow.com/users/23576407/vikraman-g" target="_blank" rel="noopener noreferrer" className="hero-link"><ImStackoverflow/></motion.a>
        </div>
        <motion.button 
           initial={{scale:0,filter: "blur(5px)",duration:.1}}
           animate={{scale:1,filter: "blur(0px)" }}
           transition={{duration:1.2,ease:'easeInOut',delay: 1 }}
        
           onClick={downloadPDF} className="hero-resume">View My Resume
           </ motion.button>
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
