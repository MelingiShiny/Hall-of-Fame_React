import React from "react";
import "./workAnniversarySection.css"

const WorkAnniversarySection = ({ data, maxImagesToShow }) => {
  return (
    <div className="work-anniversaries-section">
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div className="avatars">
        {data.avatars.slice(0, maxImagesToShow).map((person, avatarIndex) => (
          <img key={avatarIndex} src={person.avatar} alt={person.name} />
        ))}
        {data.avatars.length > maxImagesToShow && (
          <span className="total-count">{data.avatars.length}</span>
        )}
      </div>
      <button className="view-wish-btn">View & Wish Them</button>
    </div>
  );
};

export default WorkAnniversarySection;
