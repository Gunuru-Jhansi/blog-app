


import React, { useState } from "react";
import { FaFileAlt, FaAlignLeft, FaList, FaUpload, FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const CreatePost = () => {
    const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [media, setMedia] = useState(null);

  const categories = ["Technology","Lifestyle","Education","Entertainment","Health","Travel","Food","Crafts","Books"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    if (media) {
      formData.append("media", media);
    }

    try {
      const response =  axios.post("http://localhost:3001/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Submitted Data:", response.data);
      alert("Post submitted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error submitting post:", error);
      //alert("Error submitting post.");
    }
  };


  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Create a New Post</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Title Input */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <FaFileAlt style={styles.icon} /> Title <span style={styles.required}>*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your title"
              style={styles.input}
              required
            />
          </div>

          {/* Content Textarea */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <FaAlignLeft style={styles.icon} /> Content <span style={styles.required}>*</span>
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your content here"
              style={styles.textarea}
              required
            />
          </div>

          {/* Categories Dropdown */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <FaList style={styles.icon} /> Category <span style={styles.required}>*</span>
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={styles.select}
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Multimedia Insertion */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <FaUpload style={styles.icon} /> Multimedia (Optional)
            </label>
            <input
              type="file"
              accept="image/,video/"
              onChange={(e) => setMedia(e.target.files[0])}
              style={styles.fileInput}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" style={styles.submitButton}>
            <FaPaperPlane style={styles.buttonIcon} /> Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft:"auto",
    marginRight:"auto",
    width: "80vh", // Full width
    minHeight: "100vh",
    background: "linear-gradient(#4c50aa,white,#4c50aa)", // Background gradient
    padding: "20px", // Adding some padding around the page for smaller screens
    boxSizing: "border-box",
  },
  container: {
    width: "100%",
    maxWidth: "800px", // Set a max width for the container
    margin: "0 auto",
    padding: "20px",
    background: "#ffffffcc", // White background with slight transparency
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Roboto', sans-serif",
    transition: "max-width 0.3s ease-in-out",
  },
  heading: {
    textAlign: "center",
    color: "#4C50AA",
    marginBottom: "20px",
    fontSize: "28px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "16px",
    marginBottom: "8px",
    color: "#333",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  required: {
    color: "red",
    marginLeft: "4px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    height: "150px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    resize: "vertical",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  fileInput: {
    padding: "5px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  submitButton: {
    padding: "12px",
    fontSize: "18px",
    color: "#fff",
    background: "#4C50AA",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: "background 0.3s",
  },
  submitButtonHover: {
    background: "#0056b3",
  },
  buttonIcon: {
    fontSize: "20px",
  },
  icon: {
    fontSize: "18px",
    color: "#4C50AA",
  },

  // Responsive Styles
  "@media (max-width: 768px)": {
    container: {
      width: "90%", // Increase the container width on smaller screens
      maxWidth: "90%",
    },
    heading: {
      fontSize: "24px",
    },
    input: {
      fontSize: "14px",
    },
    textarea: {
      fontSize: "14px",
    },
    select: {
      fontSize: "14px",
    },
    submitButton: {
      fontSize: "16px",
      padding: "10px",
    },
    formGroup: {
      gap: "15px", // Adjust spacing between inputs for smaller screens
    },
  },
  "@media (max-width: 480px)": {
    heading: {
      fontSize: "20px", // Make the heading smaller on very small screens
    },
    input: {
      fontSize: "12px",
    },
    textarea: {
      fontSize: "12px",
    },
    select: {
      fontSize: "12px",
    },
    submitButton: {
      fontSize: "14px",
      padding: "8px",
    },
  },
};

export default CreatePost;