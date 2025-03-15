import React from "react";
import "./Post.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
const Post = ({ username, badge, category, image, text }) => {
  return (
    <div className="post-container">
      {/* Header Section */}
      <div className="post-header">
        <div className="user-info">
          <h3>{username}</h3>
          <span className="badge">{badge}</span>
        </div>
        <span className="category">{category}</span>
      </div>

      {/* Image Section */}
      {image && (
        <div className="post-image">
          <img src={image} alt="Post Content" />
        </div>
      )}

      {/* Text Content */}
      <div className="post-text">
        <p>{text}</p>
      </div>

      {/* Action Buttons */}
      <div className="post-actions">
        <button> <i className="fas fa-thumbs-up" style={{ color: '#4c50aa' }}></i></button>
        <button ><i className="fas fa-share-alt" style={{ color: '#4c50aa' }}></i></button>
        <button > <i className="fas fa-comment" style={{ color: '#4c50aa' }}></i> </button>
      </div>
    </div>
  );
};

export default Post;
