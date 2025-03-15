import React from "react";

const Streak = () => {
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
      textAlign: "center",
      marginBottom: "20px",
    },
    title: {
      fontSize: "28px",
      color: "#4C50AA",
    },
    streakSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "30px",
      padding: "20px",
      background: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    },
    streakInfo: {
      textAlign: "center",
    },
    streakCount: {
      fontSize: "48px",
      color: "#4C50AA",
      margin: "0",
    },
    streakLabel: {
      fontSize: "18px",
      color: "#666",
    },
    progressBarContainer: {
      width: "100%",
      backgroundColor: "#ddd",
      borderRadius: "10px",
      overflow: "hidden",
    },
    progressBar: {
      height: "20px",
      width: "70%", // Adjust dynamically
      backgroundColor: "#4C50AA",
    },
    achievementSection: {
      marginTop: "30px",
    },
    achievementCard: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      padding: "15px",
      background: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
      marginBottom: "15px",
    },
    achievementIcon: {
      fontSize: "32px",
      color: "#4C50AA",
    },
    achievementText: {
      fontSize: "18px",
      color: "#333",
    },
  };

  const achievements = [
    { id: 1, icon: "🔥", text: "Completed 7-day streak" },
    { id: 2, icon: "🏆", text: "Reached 30 blogs milestone" },
    { id: 3, icon: "🌟", text: "Achieved top contributor rank" },
  ];

  return (
    <div style={styles.container}>
      {/* Dashboard Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Streak Dashboard</h1>
        <p>Track your progress and milestones</p>
      </div>

      {/* Streak Info Section */}
      <div style={styles.streakSection}>
        <div style={styles.streakInfo}>
          <h1 style={styles.streakCount}>7</h1>
          <p style={styles.streakLabel}>Day Streak</p>
        </div>
        <div style={{ flex: 1 }}>
          <div style={styles.progressBarContainer}>
            <div style={styles.progressBar}></div>
          </div>
          <p style={styles.streakLabel}>
            70% to next milestone
          </p>
        </div>
      </div>

      {/* Achievements Section */}
      <div style={styles.achievementSection}>
        <h2 style={{ color: "#4C50AA" }}>Achievements</h2>
        {achievements.map((achievement) => (
          <div key={achievement.id} style={styles.achievementCard}>
            <div style={styles.achievementIcon}>{achievement.icon}</div>
            <p style={styles.achievementText}>{achievement.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Streak;