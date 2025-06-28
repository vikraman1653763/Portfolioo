import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../style/Hero.css';
import { ImStackoverflow } from "react-icons/im";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import TypingEffect from './animations/TypingEffect.jsx';
import SlotNameReel from './animations/SlotNameReel.jsx';


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

  const word = 'Vikraman G';

 
  return (
    <section className="hero-section" id='about'>
        <div className='hero-container'>

      <div className="hero-left">
      <div className='hero-letter'>
        <div className='hero-im'><Hi/> I'm</div>
      <div className="slot-name-wrapper flex gap-1 p-4 bg-gray-100">
            {word.split('').map((char, index) => (
              <SlotNameReel key={index} target={char} />
            ))}
      </div>
     
      </div>

        <h4 className='hero-job'><strong><TypingEffect
              strings={[ "Fullstack Developer","Software Developer", "Frontend Developer", "Backend Developer","WebGIS Developer", "MERN  Stack Developer","Freelancer" ]}
              speed={200} 
              delay={100} 
              /></strong></h4>

              <div className='para-container'>

                <motion.p 
                    initial={{ y: "120%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: .7, ease: "easeInOut" }}
                    className="hero-description">
                            Crafting dynamic websites, from UI design to deployment, with a knack for seamless user experiences.
                </motion.p>
          </div>
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
        <div className="resume-container">

        <motion.button 
            initial={{ y: "120%" }}
            animate={{ y: "0%" }}
            transition={{ duration: .7, delay:.5, ease: "easeInOut" }}
        
           onClick={downloadPDF} className="hero-resume">View My Resume
           </ motion.button>
      </div>
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

const Hi = () => {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-hi-container">
      <AnimatePresence mode="wait">
        {showVideo ? (
          <motion.video
            key="hi-video"
            src="/assets/hi.webm"
            className="hero-hi-video"
            autoPlay
            muted
            loop
            playsInline
            width={40}
            height={40}
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 2 }}
          />
        ) : (
          <motion.span
          
            key="hi-text"
            className="hero-hi-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
          >
            Hi
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};