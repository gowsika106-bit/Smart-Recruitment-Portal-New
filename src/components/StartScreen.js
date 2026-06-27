function StartScreen({ dispatch }) {
  return (
    <div className="start">
      <h2>Candidate Registration</h2>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter Full Name"
          style={{
            padding: "12px",
            width: "300px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        />

        <br />

        <input
          type="email"
          placeholder="Enter Email"
          style={{
            padding: "12px",
            width: "300px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        />

        <br />

        <input
          type="text"
          placeholder="College Name"
          style={{
            padding: "12px",
            width: "300px",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        />
      </div>

      <h3>Round 1 - Aptitude Assessment</h3>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Start Assessment
      </button>
    </div>
  );
}

export default StartScreen;