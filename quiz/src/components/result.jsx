import React from "react";

const Result = ({
  totalQuestions,
  attemptedQuestions,
  correctAnswers,
  wrongAnswers,
  onPlayAgain,
  onBackToHome,
}) => {
  const calculatePercentage = (total, correct) => {
    return ((correct / total) * 100).toFixed(2);
  };

  const scorePercentage = calculatePercentage(totalQuestions, correctAnswers);

  return (
    <div className="result_page">
      <h1>Quiz Completed!</h1>
      <p>
        Total Questions: <b>{totalQuestions}</b>
      </p>
      <p>
        Attempted Questions: <b>{attemptedQuestions}</b>
      </p>
      <p>
        Correct Answers: <b>{correctAnswers}</b>
      </p>
      <p>
        Wrong Answers: <b>{wrongAnswers}</b>
      </p>
      <h2> Your Score: {scorePercentage}%</h2>
      <div className="result_buttons">
        <button className="result_button" onClick={onPlayAgain}>
          Play Again
        </button>
        <button className="result_button" onClick={onBackToHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Result;
