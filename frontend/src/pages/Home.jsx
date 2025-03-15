import React from "react";
import Post from "../Post";
import "./Home.css";
import assets from '../assets/assets'
import { Link } from "react-router-dom";

const Home = () => {
  const popularBlogs = [
    {
      id: 1,
      username: "AliceW",
      badge: "Top Blogger",
      category: "Lifestyle",
      image: "https://via.placeholder.com/600x300",
      text: "Discover how to bring mindfulness into your everyday life.",
    },
    {
      id: 2,
      username: "TechGuy",
      badge: "Pro User",
      category: "Technology",
      image: "https://via.placeholder.com/600x300",
      text: "5 Emerging Technologies that will shape the future of AI.",
    },
    {
      id: 3,
      username: "Foodie101",
      badge: "Chef Extraordinaire",
      category: "Food",
      image: "https://via.placeholder.com/600x300",
      text: "10 Recipes to spice up your holiday meals this season.",
    },
    
  ];

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="home-header">
        <div>
        <h1>Pen and Pixels</h1>
        <p>Explore insightful articles, tutorials, and inspiring stories.</p>
        <h2>Wanna share something??</h2><br />
        <div><Link to='/create' className="create-post">Create post  </Link></div>
        </div>
        <div>
        <img className="gif" src={assets.girlGif} alt="GIF" style={{ width: '400px', height: '400px' }}/>
        </div>
      </header>

      

      {/* Popular Blogs Section */}
      <div className="popular-blogs">
        <h2>Popular Blogs</h2>
        <div className="blog-list">
          {popularBlogs.map((blog) => (
            <Post
              key={blog.id}
              username={blog.username}
              badge={blog.badge}
              category={blog.category}
              image={blog.image}
              text={blog.text}
            />
          ))}
        </div>
      </div>
{/* Hero Section */}
<section className="hero-section">
        <div className="hero-text">
          <h2>Your Daily Dose of Knowledge</h2>
          <p>
            From technology trends to lifestyle tips, we’ve got you covered.
            Dive into our curated blogs and stay updated.
          </p>
          <button className="explore-button">Explore Blogs</button>
        </div>
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Hero Section"
          />
        </div>
      </section>
      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to our blog portal! We aim to bring you insightful content
          from various domains such as technology, lifestyle, food, and more.
          Our mission is to inspire, educate, and entertain readers with
          high-quality, well-researched articles. Whether you're looking for
          personal growth tips or tech tutorials, we've got you covered.
        </p>
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="profile.jpeg" alt="Team Member 1" />
            <h3>Nithya</h3>
            <p>Team-Leader</p>
          </div>
          <div className="team-member">
            <img src="profile.jpeg" alt="Team Member 2" />
            <h3>Srivalli</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src="profile.jpeg" alt="Team Member 3" />
            <h3>Jhansi</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="team-member">
            <img src="profile.jpeg" alt="Team Member 4" />
            <h3>Poojitha</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="team-member">
            <img src="profile.jpeg" alt="Team Member 5" />
            <h3>Karthik</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <h3>Contact Information</h3>
          <p>Email: contact@blogportal.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Blog Lane, Knowledge City, 45678</p>
          <p>&copy; 2024 Blog Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
