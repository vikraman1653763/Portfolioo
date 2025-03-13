import React,{useEffect} from 'react';
import "../style/Projects.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Projects = () => {
  
  useEffect(()=>{
    AOS.init({
      duration:1000,
      easing:'ease'
    }
    );
  },[])
  const projects = {
    work: [
      {
        title: "Xagrotor Tek",
        description:
          "Fully built a website from UI design to hosting and SEO optimization for a drone manufacturing company.",
        link: "https://xagrotortek.in",
        image: "/assets/xag.webp",
      },
    ],
    freelance: [
      {
        title: "DragonTech Solutions",
        description:
          "Designed and developed a robust IT solutions platform, handling both frontend and backend as part of a 2-member team",
        link: "https://dragontechsolutions.com",
        image: "/assets/dts.webp",
      },
      {
        title: "Venkataeswara Hospitals",
        description: "Developed a modern and responsive website to enhance patient engagement and streamline hospital services",

        link: "https://www.vhospitals.com",
        image: "/assets/vhosp.webp",
      },
    ],
    internship: [
      {
        title: "WebGIS Developer Intern",
        description:
          "Developed a dashboard for users with dynamic mapping, workflow management, and secure login using OTP verification. Integrated geospatial data via GeoServer and PostgreSQL.",
        link: "https://www.linkedin.com/in/vikraman-g/overlay/1714546205584/single-media-viewer/?profileId=ACoAAEAwQyMBGlmKid_VvSAIQYSCrS6eBSdYaXY",
        image: "/assets/mapbox.webp",
      },
      {
        title: "Full Stack Developer Intern",
        description:
        "Created a fault detection website using YOLOv8 for defect detection, a user-friendly UI for image editing, and MySQL for data storage.",
        link: "https://www.linkedin.com/in/vikraman-g/overlay/1708329257687/single-media-viewer/?profileId=ACoAAEAwQyMBGlmKid_VvSAIQYSCrS6eBSdYaXY",
        image: "/assets/detect.webp",
      },
      {
        title: "Web Developer Intern",
        description:
          "Built an Ecommerce website focusing on user experience and feature-rich functionalities, showcasing my full-stack skills.",
        link: "https://www.linkedin.com/in/vikraman-g/overlay/1708328853862/single-media-viewer/?profileId=ACoAAEAwQyMBGlmKid_VvSAIQYSCrS6eBSdYaXY",
        image: "/assets/watch.webp",
      },
    ],
  };

  return (
    <section className="projects-container" id='work'>
      <h2 className="projects-title">Projects</h2>
      <section className='projects-work-free'>

        {/* Work Section */}
        <div className="projects-section">
          <h3 className="projects-subtitle">Work</h3>
          <div className="projects-cards work" data-aos="fade-up">
            {projects.work.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <h4 className="project-card-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Freelance Section */}
        <div className="projects-section">
          <h3 className="projects-subtitle">Freelance</h3>
          <div className="projects-cards freelance" data-aos="fade-up">
            {projects.freelance.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <h4 className="project-card-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <div className="projects-section">
        <h3 className="projects-subtitle">Internships</h3>
        <div className="projects-cards internship">
          {projects.internship.map((project, index) => (
            <div key={index} className="project-card" data-aos="fade-up" >
              <img src={project.image} alt={project.title} className="project-image" />
              <h4 className="project-card-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Projects;
