import React, { useState, useEffect } from "react";

const TelegramModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem("lastVisit");
    const currentTime = Date.now();

    // Check if the user has visited in the last 24 hours (86400000 milliseconds, || 4 hours logic)
    if (!lastVisit || currentTime - lastVisit > 14400000) {
      setShowModal(true); // Show modal on first visit or after 24 hours
      localStorage.setItem("lastVisit", currentTime); // Update last visit time
    }
  }, []);

  const closeModal = () => {
    setShowModal(false); // Close modal when the close button is clicked
  };

  return (
    <>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              maxWidth: "350px",
              width: "80%",
            }}
          >
            <h3
              style={{
                marginBottom: "15px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              Join Our Telegram Group!
            </h3>
            <p style={{ marginBottom: "25px", fontSize: "16px", color: "#555" }}>
              Join our Telegram Channel for free movies and updates delivered instantly!
            </p>
            <a
              href="https://t.me/moviexyz_com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                backgroundColor: "#0088cc",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "14px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#006699")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#0088cc")
              }
            >
              Join Telegram
            </a>
            <br />
            <button
              onClick={closeModal}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#f5f5f5",
                color: "#555",
                border: "1px solid #ddd",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "bold",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#eaeaea";
                e.target.style.color = "#333";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#f5f5f5";
                e.target.style.color = "#555";
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TelegramModal;