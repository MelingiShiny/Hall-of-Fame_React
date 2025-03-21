import React from "react";
import "./birthdaySection.css";

const BirthdaySection = ({ data, maxImagesToShow }) => {
  return (
    <div className="birthdays-section">
      <h4>{data.title}</h4>
      <p>{data.description}</p>
      <div className="avatars">
        {data.avatars.slice(0, maxImagesToShow).map((person, avatarIndex) => (
          <img key={avatarIndex} src={person.avatar} alt={person.name} />
        ))}
        {data.avatars.length > maxImagesToShow && (
          <span className="total-count">{data.avatars.length}</span>
        )}
      </div>
      <button className="view-wish-btn d-flex justify-content-end">View & Wish Them<img src="../Images/arrow_outward.png" alt="arrow outward"></img></button>
    </div>
  );
};

export default BirthdaySection;
