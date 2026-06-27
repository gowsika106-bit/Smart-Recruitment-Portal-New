function FinalResult() {
  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        padding: "30px",
      }}
    >
      <h1 style={{ color: "#00d4ff" }}>
        🎉 FINAL RESULT
      </h1>

      <div
        style={{
          background: "#1f2937",
          maxWidth: "700px",
          margin: "30px auto",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 0 20px rgba(0,212,255,0.4)",
        }}
      >
        <h2>Round Status</h2>

        <h3 style={{ color: "lightgreen" }}>
          ✅ Aptitude Round : PASSED
        </h3>

        <h3 style={{ color: "lightgreen" }}>
          ✅ Technical Round : PASSED
        </h3>

        <h3 style={{ color: "lightgreen" }}>
          ✅ Resume Screening : PASSED
        </h3>

        <br />

        <h2 style={{ color: "#00d4ff" }}>
          🎉 Congratulations!
        </h2>

        <p>
          You have successfully cleared all online rounds.
        </p>

        <p>
          You are shortlisted for the HR Interview Round.
        </p>

        <p>
          Our HR team will contact you shortly.
        </p>

        <h2
          style={{
            color: "lightgreen",
            marginTop: "20px",
          }}
        >
          STATUS : SELECTED FOR HR INTERVIEW
        </h2>
      </div>
    </div>
  );
}

export default FinalResult;