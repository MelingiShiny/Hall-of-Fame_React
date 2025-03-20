import React from "react";

const SidebarSection = ({ section, maxImagesToShow }) => {
  return (
    <div className={`${section.type}-section`}>
      <h3>{section.title}</h3>
      <p>{section.description}</p>
      <div className="avatars">
        {section.avatars.slice(0, maxImagesToShow).map((person, avatarIndex) => (
          <img key={avatarIndex} src={person.avatar} alt={person.name} />
        ))}
        {section.avatars.length > maxImagesToShow && (
          <span className="total-count">{section.avatars.length}</span>
        )}
      </div>
      <button className="view-wish-btn">View & Wish Them</button>
    </div>
  );
};

export default SidebarSection;
