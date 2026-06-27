import { useState } from "react";
import FinalResult from "./FinalResult";

function Round3Resume() {
  const [fileName, setFileName] = useState("");
  const [resumeScore, setResumeScore] = useState(null);
  const [showFinalResult, setShowFinalResult] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);

      // Temporary Resume Score
      const score = Math.floor(Math.random() * 41) + 60;

      setResumeScore(score);
    }
  };

  if (showFinalResult) {
    return <FinalResult />;
  }

  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        padding: "30px",
      }}
    >
      <h1 style={{ color: "#00d4ff" }}>
        📄 ROUND 3 - RESUME SCREENING
      </h1>

      <p>Upload your resume to continue</p>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileUpload}
        style={{
          marginTop: "20px",
          padding: "10px",
        }}
      />

      {fileName && (
        <>
          <h3 style={{ marginTop: "20px" }}>
            Uploaded Resume:
          </h3>

          <p style={{ color: "#00d4ff" }}>
            {fileName}
          </p>

          <h2 style={{ color: "#00d4ff" }}>
            Resume Score: {resumeScore}/100
          </h2>

          <h2
            style={{
              color:
                resumeScore >= 60
                  ? "lightgreen"
                  : "red",
            }}
          >
            {resumeScore >= 60
              ? "✅ Resume Selected"
              : "❌ Resume Rejected"}
          </h2>

          {resumeScore >= 60 && (
            <button
              onClick={() => setShowFinalResult(true)}
              style={{
                marginTop: "20px",
                padding: "12px 30px",
                border: "none",
                borderRadius: "10px",
                background: "#00d4ff",
                color: "black",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              View Final Result
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Round3Resume;