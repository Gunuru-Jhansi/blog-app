const ContactPage = () => {
    return (
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }} className='contact-div'>
        <div>
        <h1 style={{ textAlign: "center",color:"#4C50AA" }}>Contact</h1>
        <p style={{ textAlign: "center" }}>
          If you’d like to send us some feedback, feel free to share.
        </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
            color:"#4C50AA"
          }}
        >
          {/* Company Information Section */}
          <div style={{ width: "40%" }}>
            <h2>Pen & Pixels</h2>
            
            <p style={{ color:"black"  }} >Your voice matters! Share your stories, ideas, and expertise with the world</p>
          </div>
  
          {/* Message Us Section */}
          <div style={{ width: "50%" }}>
            <h2>Message us</h2>
            <form>
              <div style={{ display: "flex", gap: "10px", marginBottom: "10px" ,color:"#4C50AA"}}>
                <input
                  type="text"
                  placeholder="First Name"
                  style={{
                    width: "50%",
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  style={{
                    width: "50%",
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <input
                  type="email"
                  placeholder="Email Address"
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: "#4C50AA",
                  color: "#fff",
                  padding: "10px 20px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactPage;