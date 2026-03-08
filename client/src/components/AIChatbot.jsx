import React, { useState } from "react";

function AIChatbot() {

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {

    if (!message) return;

    const userMsg = message;

    setChat([...chat, { sender: "user", text: userMsg }]);

    setMessage("");

    const res = await fetch(
      "https://fitnesstrack-kkok.onrender.com/api/ai/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMsg }),
      }
    );

    const data = await res.json();

    setChat(prev => [...prev, { sender: "bot", text: data.reply }]);
  };

  return (
    <>
      {/* Floating Bubble */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#ff0000",
          color: "white",
          padding: "16px",
          borderRadius: "50%",
          fontSize: "22px",
          cursor: "pointer",
          zIndex: 1000,
        }}
        onClick={() => setOpen(!open)}
      >
        💬
      </div>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "350px",
            height: "450px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
          }}
        >

          <h3>AI Assistant</h3>

          <div style={{ flex: 1, overflowY: "auto" }}>
            {chat.map((c, i) => (
              <div key={i} style={{
                textAlign: c.sender === "user" ? "right" : "left"
              }}>
                <p>
                  <b>{c.sender === "user" ? "You" : "AI"}:</b> {c.text}
                </p>
              </div>
            ))}
          </div>

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask anything..."
          />

          <button onClick={sendMessage}>Send</button>

        </div>
      )}
    </>
  );
}

export default AIChatbot;