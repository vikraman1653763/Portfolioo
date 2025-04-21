import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa';
import "../style/Projects.css";

function MiniProject() {
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view

  const miniProjects = [
    {title: "Weather Monitor", image: '/assets/weather.webp', git: 'https://github.com/vikraman1653763/Weather.git'},
    // {title: "Calculator", image: '/assets/calc.webp', git: 'https://github.com/vikraman1653763/calculator.git'},
    {title: "Amazon Clone", image: '/assets/amazon.webp', git: 'https://github.com/vikraman1653763/Amazon.git'},
    {title: "Login with Email Verification", image: '/assets/login.webp', git: 'https://github.com/vikraman1653763/intern2024_2.git'},
    {title: "WebGIS Project", image: '/assets/webgis.webp', git: 'https://github.com/vikraman1653763/intern2024_2.git'},
    {title: "Network Traffic Monitor", image: '/assets/net.webp', git: 'https://github.com/vikraman1653763/bandwidth-monitor.git'},
    {title: "PDF to Audio Converter", image: '/assets/pdfmp3.webp', git: 'https://github.com/vikraman1653763/pdf-to-Audio-Converter.git'},
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Direct horizontal scroll
  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-70%"]);

  // Handle screen resize event to check if it's mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='mini-project'>
      <div className='mini-project-container' ref={targetRef}>
        <div className='mini-project-container-sticky'>
          <h2 className="title">Mini Projects</h2>
          {isMobile ? (
            <div className="mini-project-mobile-container">
              {miniProjects.map((project, index) => (
                <div key={index} className="mini-project-card">
                  <img src={project.image} alt={project.title} className="mini-project-image" />
                  <div className="mini-project-detail">
                    <h4 className="mini-project-title">{project.title}</h4>
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mini-project-link-button"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div className="mini-project-scroll-content" style={{ x }}>
              {miniProjects.map((project, index) => (
                <div key={index} className="mini-project-card">
                  <img src={project.image} alt={project.title} className="mini-project-image" />
                  <div className="mini-project-detail">
                    <h4 className="mini-project-title">{project.title}</h4>
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mini-project-link-button"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default MiniProject;
