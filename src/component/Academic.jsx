import React, { useEffect, useState } from "react";
import "../style/Academic.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { useRive, useStateMachineInput } from "rive-react";

const Academic = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollMultiplier, setScrollMultiplier] = useState(0.2);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
    });

    // Set multiplier based on initial window size
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScrollMultiplier(0.1);
      } else {
        setScrollMultiplier(0.2);
      }
    };

    handleResize(); // Set on mount

    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const SMname = "Main Animation State Machine";
  const INname = "Send Heart";
  const { rive, RiveComponent } = useRive({
    src: "/assets/react.riv",
    stateMachines: SMname,
    autoplay: true,
  });
  const onclickInput = useStateMachineInput(rive, SMname, INname);

  return (
    <section className="academic-container">
      <h2 className="academic-title">My Academic Journey</h2>
      <div className="academic-cards">
        {academicDetails.map((academic, index) => (
          <div key={index} className="academic-card" data-aos="fade-up">
            <div className="academic-image-container">
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

      <div
        style={{
          position: "absolute",
          transform: `translateY(${scrollY * scrollMultiplier}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <RiveComponent className="react-icoo" onClick={() => onclickInput.fire()} />
      </div>
    </section>
  );
};

export default Academic;
