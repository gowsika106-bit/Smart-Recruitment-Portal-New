function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  const passed = percentage >= 60;

  return (
    <div className="result_container">
      <h2>Round 1 - Aptitude Result</h2>

      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints}
      </p>

      <p className="result">
        Percentage: <strong>{Math.ceil(percentage)}%</strong>
      </p>

      <p className="highscore">
        Highscore: {highscore} points
      </p>

      {passed ? (
        <>
          <h3 style={{ color: "lightgreen" }}>
            ✅ Congratulations! You passed Aptitude Round
          </h3>

          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "nextRound" })}
          >
            Go To Technical Round
          </button>
        </>
      ) : (
        <>
          <h3 style={{ color: "red" }}>
            ❌ Sorry! You are not qualified for the next round
          </h3>

          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "restart" })}
          >
            Try Again
          </button>
        </>
      )}
    </div>
  );
}

export default FinishScreen;