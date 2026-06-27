import { useState } from "react";
import TechnicalQuiz from "./TechnicalQuiz";

function TechnicalRound() {
  const [startQuiz, setStartQuiz] = useState(false);

  if (startQuiz) {
    return <TechnicalQuiz />;
  }

  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        padding: "30px",
      }}
    >
      <h1
        style={{
          color: "#00d4ff",
          marginBottom: "20px",
        }}
      >
        🚀 ROUND 2 - TECHNICAL ASSESSMENT
      </h1>

      <div
        style={{
          background: "#1f2937",
          padding: "25px",
          borderRadius: "15px",
          maxWidth: "600px",
          margin: "0 auto",
          boxShadow: "0 0 20px rgba(0,212,255,0.4)",
        }}
      >
        <h2 style={{ color: "#00d4ff" }}>
          Technical Skills Evaluation
        </h2>

        <p style={{ marginBottom: "20px" }}>
          Select your technical assessment topics
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              background: "#374151",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            💻 JavaScript
          </div>

          <div
            style={{
              background: "#374151",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            ⚙️ C Programming
          </div>

          <div
            style={{
              background: "#374151",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            🚀 C++
          </div>

          <div
            style={{
              background: "#374151",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            ⚛️ React.js
          </div>

          <div
            style={{
              background: "#374151",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            🅰️ Angular
          </div>

          <div
            style={{
              background: "#374151",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            🎨 UI/UX Design
          </div>
        </div>

        <button
          style={{
            marginTop: "30px",
            padding: "12px 30px",
            border: "none",
            borderRadius: "10px",
            background: "#00d4ff",
            color: "black",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={() => setStartQuiz(true)}
        >
          Start Technical Round
        </button>
      </div>
    </div>
  );
}

export default TechnicalRound;