import { useState, useEffect } from "react";
import Round3Resume from "./Round3Resume";

const questions = [
  {
    question: "Which hook is used for state management in React?",
    options: ["useEffect", "useState", "useMemo", "useRef"],
    correct: "useState",
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    correct: "Facebook",
  },
  {
    question: "What does JSX stand for?",
    options: ["Java XML", "JavaScript XML", "JSON XML", "Java Syntax XML"],
    correct: "JavaScript XML",
  },
  {
    question: "Which method renders React components?",
    options: ["render()", "ReactDOM.render()", "display()", "mount()"],
    correct: "ReactDOM.render()",
  },
  {
    question: "Which hook is used for side effects?",
    options: ["useRef", "useState", "useEffect", "useMemo"],
    correct: "useEffect",
  },
  {
    question: "JavaScript is a?",
    options: ["Database", "Programming Language", "Framework", "OS"],
    correct: "Programming Language",
  },
  {
    question: "Which symbol is used for JSX expressions?",
    options: ["{}", "[]", "()", "<>"],
    correct: "{}",
  },
  {
    question: "What is Node.js?",
    options: ["Runtime Environment", "Framework", "Database", "Compiler"],
    correct: "Runtime Environment",
  },
  {
    question: "What is npm?",
    options: [
      "Node Package Manager",
      "New Package Manager",
      "Node Program Manager",
      "None",
    ],
    correct: "Node Package Manager",
  },
  {
    question: "Angular is developed by?",
    options: ["Meta", "Google", "Microsoft", "Apple"],
    correct: "Google",
  },
  {
    question: "C++ supports?",
    options: ["OOP", "Only Functions", "Only Loops", "None"],
    correct: "OOP",
  },
  {
    question: "Inheritance is a feature of?",
    options: ["HTML", "CSS", "OOP", "SQL"],
    correct: "OOP",
  },
  {
    question: "Polymorphism means?",
    options: ["One Form", "Many Forms", "Loop", "Class"],
    correct: "Many Forms",
  },
  {
    question: "Encapsulation means?",
    options: ["Data Hiding", "Looping", "Sorting", "Searching"],
    correct: "Data Hiding",
  },
  {
    question: "Promise is used for?",
    options: ["Async Operations", "Loops", "Arrays", "Classes"],
    correct: "Async Operations",
  },
  {
    question: "Which keyword is used with Promise?",
    options: ["async", "while", "for", "switch"],
    correct: "async",
  },
  {
    question: "REST API uses?",
    options: ["HTTP", "FTP", "SMTP", "TCP"],
    correct: "HTTP",
  },
  {
    question: "Responsive Design means?",
    options: [
      "Works on all devices",
      "Fast website",
      "Database",
      "Animation",
    ],
    correct: "Works on all devices",
  },
  {
    question: "UX stands for?",
    options: [
      "User Experience",
      "User Extension",
      "Unique XML",
      "Universal Experience",
    ],
    correct: "User Experience",
  },
  {
    question: "React is a?",
    options: ["Library", "Database", "OS", "Language"],
    correct: "Library",
  },
];

function TechnicalQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [showResumeRound, setShowResumeRound] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !finished) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }

    if (timeLeft === 0) {
      setFinished(true);
    }
  }, [timeLeft, finished]);

  if (showResumeRound) {
    return <Round3Resume />;
  }

  const handleAnswer = (option) => {
    if (selected) return;

    setSelected(option);

    if (option === questions[currentQuestion].correct) {
      setScore((prev) => prev + 10);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const percentage = (score / 200) * 100;
  const passed = percentage >= 60;

  if (finished) {
    return (
      <div style={{ color: "white", textAlign: "center", padding: "30px" }}>
        <h1 style={{ color: "#00d4ff" }}>
          Round 2 - Technical Result
        </h1>

        <h2>Your Score: {score} / 200</h2>

        <h2>Percentage: {Math.round(percentage)}%</h2>

        <h2 style={{ color: passed ? "lightgreen" : "red" }}>
          {passed
            ? "✅ Congratulations! You Passed Technical Round"
            : "❌ Sorry! You Failed Technical Round"}
        </h2>

        {passed && (
          <button
            onClick={() => setShowResumeRound(true)}
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
            Go To Resume Round
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        color: "white",
        maxWidth: "800px",
        margin: "auto",
        padding: "30px",
      }}
    >
      <h1 style={{ color: "#00d4ff", textAlign: "center" }}>
        TECHNICAL QUIZ
      </h1>

      <h3>
        Question {currentQuestion + 1} / {questions.length}
      </h3>

      <h2>{questions[currentQuestion].question}</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "30px",
        }}
      >
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "18px",
              background:
                selected === option
                  ? option === questions[currentQuestion].correct
                    ? "#00d4ff"
                    : "#ef4444"
                  : "#f5a64a",
              color: "black",
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {selected && (
        <button
          onClick={nextQuestion}
          style={{
            marginTop: "20px",
            padding: "12px 30px",
            border: "none",
            borderRadius: "10px",
            background: "#00d4ff",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Next
        </button>
      )}

      <div style={{ marginTop: "20px", fontSize: "24px" }}>
        ⏱️ {Math.floor(timeLeft / 60)}:
        {(timeLeft % 60).toString().padStart(2, "0")}
      </div>

      <h3>Score: {score}</h3>
    </div>
  );
}

export default TechnicalQuiz;