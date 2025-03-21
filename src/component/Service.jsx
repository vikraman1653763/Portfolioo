import React, { useEffect } from 'react';
import "../style/Service.css";
import { FaCloudArrowDown } from "react-icons/fa6";
import { GiServerRack } from "react-icons/gi";
import { LuCodeXml } from "react-icons/lu";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Service = () => {
  
  useEffect(()=>{
    AOS.init({
      duration:1000,
      easing:'ease'
    }
    );
    

  },[])

  const services = [
    {
      title: "Frontend Development",
      description:
        "Creating stunning UI designs and seamless user experiences with clean, efficient, and responsive front-end code.",
      icon: <LuCodeXml/>,
    },
    {
      title: "Backend Development",
      description:
        "Building scalable server-side logic, APIs, and database integrations to ensure your application runs smoothly.",
      icon: <GiServerRack/>,
    },
    {
      title: "Hosting Services",
      description:
        "Reliable hosting solutions on platforms like GoDaddy, CPanel, Netlify, and GitHub Pages to bring your projects online.",
      icon: <FaCloudArrowDown/>,
    },
  ];

  return (
    <section className="service-container">
      <h2 className="service-title">Your <span>Vision</span>, My <span>Expertise</span></h2>
      <p className="service-description">
        I provide comprehensive web development services, from crafting intuitive front-end designs to building robust back-end solutions, creating seamless APIs, and ensuring reliable hosting for your projects.
      </p>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card" data-aos='slide-up'>
            <div  >{service.icon}</div>
            <h3 className="service-card-title">{service.title}</h3>

            <p className="service-card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
