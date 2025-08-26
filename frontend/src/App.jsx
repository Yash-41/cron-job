import { useState } from "react";

function App() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async () => {
    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, message }),
      });

      const data = await res.json();
      alert(data.msg);
    } catch (err) {
      console.error("❌ Error sending email:", err);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // dark gradient
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(30, 30, 30, 0.9)",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 0 25px rgba(0, 200, 255, 0.6)", // glowing cyan shadow
          width: "350px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#00eaff" }}>📧 Send Email</h2>

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            margin: "10px 0",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            background: "#1f1f1f",
            color: "#fff",
            boxShadow: "inset 0 0 5px rgba(0, 200, 255, 0.6)",
          }}
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            margin: "10px 0",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            minHeight: "100px",
            resize: "none",
            background: "#1f1f1f",
            color: "#fff",
            boxShadow: "inset 0 0 5px rgba(0, 200, 255, 0.6)",
          }}
        />

        <button
          onClick={sendEmail}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(90deg, #00c6ff, #0072ff)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 0 15px rgba(0, 200, 255, 0.9)",
            transition: "0.3s",
          }}
          onMouseOver={(e) =>
            (e.target.style.boxShadow = "0 0 25px rgba(0, 200, 255, 1.2)")
          }
          onMouseOut={(e) =>
            (e.target.style.boxShadow = "0 0 15px rgba(0, 200, 255, 0.9)")
          }
        >
          🚀 Send Now
        </button>
      </div>
    </div>
  );
}

export default App;
