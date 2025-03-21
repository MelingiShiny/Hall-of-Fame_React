import React from "react";
import "./postSection.css";

const PostsSection = ({ postsData, carouselData }) => {
  
  return (
    <div className="posts-section">
      
      {/* Posts Section */}
      {postsData ? (
        postsData.map((post, index) => (
          <div key={index} className="post">
            <div className="post-header">
              <img src={post.authorAvatar} alt={post.author} />
              <div className="post-info">
                <h4>{post.author}</h4>
                <p>{post.location}</p>
              </div>
            </div>
            <img src={post.image} alt={post.content} className="post-image" />
          </div>
        ))
      ) : (
        <p>Loading Posts Data...</p>
      )}
    </div>
  );
};

export default PostsSection;
