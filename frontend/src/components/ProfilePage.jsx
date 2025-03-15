import React from "react";
import {Link} from 'react-router-dom'

const ProfilePage = () => {
  const styles = {
    container: {
      fontFamily: "'Roboto', sans-serif",
      maxWidth: "900px",
      margin: "0 auto",
      padding: "20px",
      background: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      marginBottom: "30px",
      flexDirection: "row", // default to row layout for large screens
    },
    img: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      border: "4px solid #4C50AA",
    },
    details: {
      flex: 1,
    },
    username: {
      fontSize: "24px",
      margin: "0",
      color: "#4C50AA",
    },
    stats: {
      display: "flex",
      gap: "15px",
      color: "#666",
      flexDirection: "row", // default to row layout for large screens
    },
    section: {
      marginTop: "30px",
      padding: "20px",
      background: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(20,40,10,55) "
    },
    sectionTitle: {
      fontSize: "20px",
      color: "#4C50AA",
      marginBottom: "15px",
    },
    blogCard: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      padding: "15px",
      background: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(20,40,10,55) ",
      marginBottom: "15px",
    },
    blogTitle: {
      margin: "0",
      fontSize: "18px",
      color: "#333",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    button: {
      padding: "10px 15px",
      fontSize: "14px",
      color: "#fff",
      background: "#4C50AA",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      textAlign: "center",
      transition: "background 0.3s",
    },
    buttonSecondary: {
      padding: "10px 15px",
      fontSize: "14px",
      color: "#fff",
      background: "#E74C3C",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      textAlign: "center",
      transition: "background 0.3s",
    },
    contactInfo: {
      marginTop: "20px",
    },
    contactHeading: {
      fontSize: "20px",
      color: "#4C50AA",
      marginBottom: "10px",
    },
    contactItem: {
      color: "#666",
      fontSize: "16px",
      margin: "5px 0",
    },
    "@media (max-width: 768px)": {
      container: {
        padding: "15px",
      },
      header: {
        flexDirection: "column", // Stack profile picture and details vertically
        textAlign: "center",
      },
      stats: {
        flexDirection: "column", // Stack stats vertically
        textAlign: "center",
      },
      blogCard: {
        padding: "12px",
      },
      section: {
        padding: "15px",
      },
      button: {
        fontSize: "12px",
      },
      buttonContainer: {
        flexDirection: "column", // Stack buttons vertically
      },
    },

    "@media (max-width: 480px)": {
      username: {
        fontSize: "20px", // Make the username smaller on very small screens
      },
      sectionTitle: {
        fontSize: "18px", // Make section title smaller on mobile
      },
      blogTitle: {
        fontSize: "16px", // Smaller font for blog titles on mobile
      },
      contactItem: {
        fontSize: "14px", // Smaller contact info text on mobile
      },
    },
  };

  const handleEditProfile = () => {
    alert("Edit Profile functionality here");
    // Add logic to open edit profile form or redirect to edit profile page
  };

  const handleLogout = () => {
   
    
      try {
         axios.post('http://localhost:3001/logout');
         // Remove the token from localStorage
  localStorage.removeItem("authToken");

  alert("Logged out successfully!");
  // Redirect to login or home page
     //   alert('You have been logged out successfully.');
        navigate('/login'); // Redirect to the login page
      } catch (error) {
        console.error('Error during logout:', error);
        alert('An error occurred while logging out.');
      }
    
    // Add logout logic here (e.g., clearing user session, redirecting to login page)
  };

  return (
    <div style={styles.container}>
      {/* Profile Header */}
      <div style={styles.header}>
        <img
          src="https://via.placeholder.com/120"
          alt="Profile"
          style={styles.img}
        />
        <div style={styles.details}>
          <h1 style={styles.username}>Username</h1>
          <div style={styles.stats}>
            <Link to ='/profile/streak' style={{textDecoration:'none',color:'#4c50aa' }}>🔥 Streak: 7 days</Link>
          
            <p>📝 Blogs: 15</p>
          </div>
        </div>
      </div>

      {/* My Blogs Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>My Blogs</h2>
        <div style={styles.blogCard}>
          <h3 style={styles.blogTitle}>Blog Title 1</h3>
          <p>Short description of the blog content...</p>
        </div>
        <div style={styles.blogCard}>
          <h3 style={styles.blogTitle}>Blog Title 2</h3>
          <p>Short description of the blog content...</p>
        </div>
      </div>

      {/* Contact Information */}
      <div style={styles.contactInfo}>
        <h3 style={styles.contactHeading}>About</h3>
        <p style={styles.contactItem}>📧 Email: johndoe@gmail.com</p>
        <p style={styles.contactItem}>📞 Phone: +91 9876543210</p>
        <p style={styles.contactItem}>📍 Location: New York, USA</p>
      </div>

      {/* Edit Profile & Logout Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Manage Account</h2>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={handleEditProfile}>
            Edit Profile
          </button>
          <button style={styles.buttonSecondary} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;