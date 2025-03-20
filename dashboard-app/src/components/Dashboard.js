import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Dashboard.css";
import BirthdaySection from "./birthdaySection";
import WorkAnniversarySection from "./workAnniversarySection";

const Dashboard = () => {
  const [birthdayData, setBirthdayData] = useState(null);
  const [workAnniversaryData, setWorkAnniversaryData] = useState(null);
  const [carouselItems, setCarouselItems] = useState(null);
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);

  const maxImagesToShow = 7;

  useEffect(() => {
    const fetchData = async (file) => {
      try {
        const response = await fetch(`/${file}.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(`Error fetching ${file}:`, error);
        return null;
      }
    };

    const loadData = async () => {
      const birthdays = await fetchData("birthdaysData");
      const workAnniversaries = await fetchData("workAnniversariesData");
      const carousel = await fetchData("carouselItems");
      const post = await fetchData("posts");
      const comment = await fetchData("comments");

      setBirthdayData(birthdays);
      setWorkAnniversaryData(workAnniversaries);
      setCarouselItems(carousel);
      setPosts(post);
      setComments(comment);
    };

    loadData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <button className="new-post-btn">+ New Post</button>
        <nav>
          <ul>
            <li>My Wall</li>
            <li>My Posts & Activity</li>
          </ul>
        </nav>

        {/* Render Birthday Section */}
        {birthdayData ? (
          <BirthdaySection data={birthdayData} maxImagesToShow={maxImagesToShow} />
        ) : (
          <p>Loading Birthday Data...</p>
        )}

        {/* Render Work Anniversary Section */}
        {workAnniversaryData ? (
          <WorkAnniversarySection
            data={workAnniversaryData}
            maxImagesToShow={maxImagesToShow}
          />
        ) : (
          <p>Loading Work Anniversary Data...</p>
        )}
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Carousel Section */}
        <div className="carousel-container">
          {carouselItems ? (
            <Slider {...settings}>
              {carouselItems.map((item, index) => (
                <div key={index} className="carousel-item">
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
                  <button>{item.actionText}</button>
                </div>
              ))}
            </Slider>
          ) : (
            <p>Loading Carousel Data...</p>
          )}
        </div>

        {/* Posts and Comments Section */}
        <div className="bottom-section">
          <div className="posts-section">
            {posts ? (
              posts.map((post, index) => (
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

          {/* Comments Section */}
          <aside className="comments-section">
            <h3>Innova Wall</h3>
            {comments ? (
              comments.map((comment, index) => (
                <div key={index} className="comment">
                  <p>{comment.text}</p>
                </div>
              ))
            ) : (
              <p>Loading Comments Data...</p>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
