import React, { useEffect } from 'react';
import '../style/Skill.css';
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaCpanel } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Skill = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      easing:'ease'
    }
    );

  },[])

  const skills = [
    {
      title: 'Frontend',
      description: 'HTML, React, CSS, Bootstrap',
      icons: [<FaHtml5 />, <FaReact />, <SiCss3 />, <FaBootstrap />],
    },
    {
      title: 'Backend',
      description: 'Node.js, Python',
      icons: [<IoLogoNodejs />, <FaPython />],
    },
    {
      title: 'Database',
      description: 'MongoDB, MySQL, PostgreSQL',
      icons: [<SiMongodb />, <GrMysql />, <BiLogoPostgresql />],
    },
    {
      title: 'Hosting',
      description: 'cPanel, Netlify, GitHub Pages',
      icons: [<FaCpanel />, <SiNetlify />, <FaGithub />],
    },
  ];
  return (
    <section className="skill-container">
      <h2 className="skill-title">Tech Arsenal</h2>
      <p className="skill-description">The tools I use to bring ideas to life</p>
      <div className="skill-cards">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card" data-aos-delay={`${100*(skills.length-index)}`} data-aos="fade-up">
            <h3 className="skill-card-title">{skill.title}</h3>
            <p className="skill-card-description">{skill.description}</p>
            <div className="skill-card-icons">
              {skill.icons.map((icon, i) => (
                <i key={i} className={`${icon} skill-icon`}>{icon}</i>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skill;
