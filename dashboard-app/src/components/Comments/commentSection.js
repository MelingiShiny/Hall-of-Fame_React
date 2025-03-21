import React from 'react';
import "./commentSection.js";

const CommentsSection = ({ data }) => {
    return (
        <aside className="comments-section">
            <div className="d-flex justify-content-between">
                <h5 className="d-flex align-items-center">Innova Wall</h5>
                <img src="../Images/logo.png" alt="logo" width="50px" height="50px"></img>
            </div>


            <hr></hr>
            {data ? (
                data.map((comment, index) => (
                    <div key={index} className="comment">
                        <p>{comment.text}</p>
                        <hr></hr>
                    </div>
                ))
            ) : (
                <p>Loading Comments Data...</p>
            )}
        </aside>
    );
};

export default CommentsSection;
