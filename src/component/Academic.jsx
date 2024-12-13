import React,{useEffect} from 'react';
import "../style/Academic.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Academic = () => {
    useEffect(()=>{
        AOS.init({
          duration:1000,
          easing:'ease'
        }
        );
    
      },[])

  const academicDetails = [
    {
      degree: "M.Sc. in Computer Science",
      institution: "University of Madras",
      image: "/assets/UNOM.webp",
    },
    {
        degree: "B.Sc. in Computer Science",
        institution: "E.G.S. Pillay Arts and Science College",
        image: "/assets/EGS.webp",
    },
  ];

  return (
    <section className="academic-container">
      <h2 className="academic-title">My Academic Journey</h2>
      <div className="academic-cards">
        {academicDetails.map((academic, index) => (
          <div key={index} className="academic-card" data-aos="fade-up">
            <div className='academic-image-container'>
            <img
              src={academic.image}
              alt={academic.degree}
              className="academic-card-image"
            />
            </div>
            <div className="academic-card-detail">
              <h3 className="academic-card-degree">{academic.degree}</h3>
              <p className="academic-card-institution">{academic.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Academic;
