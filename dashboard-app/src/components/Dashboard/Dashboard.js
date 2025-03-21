import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BirthdaySection from "../Birthdays/birthdaySection.js";
import CommentsSection from "../Comments/commentSection";
import PostsSection from "../Posts/postSection";
import WorkAnniversarySection from "../WorkAnniversaries/workAnniversarySection.js";
import "./Dashboard.css";

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
        console.log(file)
        const response = await fetch(`JSON/${file}.json`);
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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set autoplay speed to 3 seconds
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <button className="new-post-btn">+ New Post</button>
        <nav>
          <ul>
            <li class="my-wall d-flex justify-content-between"><span><strong><img src="../Images/mywall.png" alt="my wall"></img>My Wall</strong></span><img src="../Images/sync.png" alt="sync"></img></li>
            <li><img src="../Images/myposts.png" alt="my posts"></img>My Posts & Activity</li>
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
                  <hr className="w-100"></hr>
                  <div className="w-100 d-flex justify-content-between">
                  <h4 className="d-flex align-items-center">{item.title}</h4>
                  <button className="carousel_view_btn">{item.actionText}<img src="../Images/arrow_outward.png" alt="arrow outward"></img></button>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <p>Loading Carousel Data...</p>
          )}
        </div>

        {/* Posts and Comments Section */}
        <div className="bottom-section">
        
            {posts ? (
              <PostsSection postsData={posts} carouselData={carouselItems} />
            ) : (
              <p>Loading Posts Data...</p>
            )}

          {/* Comments Section */}
            {comments ? (
              <CommentsSection data={comments} />
            ) : (
              <p>Loading Comments Data...</p>
            )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
