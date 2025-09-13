import React from "react";
import Badges from "../badges/Badges";

const Card = ({ title, description, image, link, techBadges, cta = "Visit Website" }) => {
  return (
    <div className="project-card " data-aos="fade-up">
      <img src={image} alt={title} className="project-image" />
      <h4 className="project-card-title">{title}</h4>
      <p className="project-description">{description}</p>

      {techBadges && (
        <div className="project-badge">
          <Badges techBadges={techBadges} />
        </div>
      )}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        {cta}
      </a>
    </div>
  );
};

export default Card;
