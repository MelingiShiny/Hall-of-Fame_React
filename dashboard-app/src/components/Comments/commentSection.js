import React from 'react';
import "./commentSection.js";

const CommentsSection = ({ data }) => {
  return (
    <aside className="comments-section">
      <h3>Innova Wall</h3>
      {data ? (
        data.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment.text}</p>
          </div>
        ))
      ) : (
        <p>Loading Comments Data...</p>
      )}
    </aside>
  );
};

export default CommentsSection;
