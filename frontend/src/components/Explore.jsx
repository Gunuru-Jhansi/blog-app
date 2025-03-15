import React, { useState } from "react";
import "./Explore.css";

const Explore = () => {
    const posts = [
        {
          id: 1,
          username: "JohnDoe",
          badge: "Pro User",
          category: "Technology",
          image: "https://via.placeholder.com/600x300",
          text: "Exploring the latest tech trends.",
        },
        {
          id: 2,
          username: "JaneSmith",
          badge: "Newbie",
          category: "Travel",
          image: "https://via.placeholder.com/600x300",
          text: "Wanderlust diaries from around the world.",
        },
        {
          id: 3,
          username: "TechGuru",
          badge: "Expert",
          category: "AI",
          image: "https://via.placeholder.com/600x300",
          text: "AI advancements for a smarter future.",
        },
        {
            id:4,
            username:"srivalli",
            badge:"expert",
            category: "AI",
          image: "https://via.placeholder.com/600x300",
          text: "qwertyu",

        }
      ];
    
      const categories = ["Technology","Travel","AI","Food","Fashion","Health","Lifestyle","Crafts"];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter posts based on the search term and selected category
  const filteredPosts = posts.filter((post) => {
    const matchesSearchTerm =
      post.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? post.category === selectedCategory
      : true;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="explore-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Categories</h3>
        <ul>
          <li
            className={!selectedCategory ? "active" : ""}
            onClick={() => setSelectedCategory("")}
          >
            All
          </li>
          {categories.map((category) => (
            <li
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search posts, users, or text..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Post Row */}
        <div className="post-row">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-header">
                  <h3>{post.username}</h3>
                  <span className="badge">{post.badge}</span>
                </div>
                <span className="category">{post.category}</span>
                {post.image && (
                  <div className="post-image">
                    <img src={post.image} alt={post.category} />
                  </div>
                )}
                <p className="post-text">{post.text}</p>
              </div>
            ))
          ) : (
            <p>No posts found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;