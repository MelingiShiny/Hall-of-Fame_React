import React from "react";
import "./postSection.css";

const PostsSection = ({ postsData, carouselData }) => {

    return (
        <div className="posts-section">

            {/* Posts Section */}
            {postsData ? (
                postsData.map((post, index) => (
                    <div key={index} className="post">
                        <div className="post-header w-100 d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={post.authorAvatar} alt={post.author} />
                                <div className="post-info">
                                    <h4>{post.author}</h4>
                                    <p><img src="../Images/location_on.png" alt="location"></img>{post.location}</p>
                                </div>
                            </div>
                            <img className="expand" src="../Images/expand_content.png" alt="expand_content" width="5px" height="5px"></img>

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
