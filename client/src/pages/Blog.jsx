import React, { useState } from "react";

function Blog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const saveBlog = async () => {
    if (!title || !content) {
      setMessage("Please fill in all fields!");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/blog/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setMessage("🔥 Blog saved successfully!");
        setTitle("");
        setContent("");
      } else {
        setMessage(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error saving blog!");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ff0000, #1c1c1c)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "15px",
          maxWidth: "700px",
          width: "100%",
          boxShadow: "0 0 30px rgba(255, 0, 0, 0.7)",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            textAlign: "center",
            marginBottom: "30px",
            color: "#ff0000",
            letterSpacing: "2px",
          }}
        >
          🚀 Write About Your Beast Mode 🏋️
        </h1>

        <input
          type="text"
          placeholder="🔥 Killer Chest Day, Epic Leg Pump..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "18px",
            borderRadius: "8px",
            border: "2px solid #ff0000",
            marginBottom: "20px",
          }}
        />

        <textarea
          placeholder="How was today's grind? Write every rep, every feeling 💥"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={8}
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "18px",
            borderRadius: "8px",
            border: "2px solid #ff0000",
            marginBottom: "20px",
          }}
        />

        <button
          onClick={saveBlog}
          style={{
            width: "100%",
            padding: "16px",
            backgroundColor: "#ff0000",
            color: "white",
            fontWeight: "bold",
            fontSize: "20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          💥 Save My Power Blog
        </button>

        {message && (
          <p
            style={{
              marginTop: "20px",
              textAlign: "center",
              color: "green",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Blog;
