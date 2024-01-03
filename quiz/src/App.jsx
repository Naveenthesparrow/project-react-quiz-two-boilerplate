import React, { useState } from "react";
import "./App.css";
import questions from "./resources/quizQuestion.json";
import Result from "./components/result";
import Home from "./components/home";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const present_question = questions[questionIndex];
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [attemptedQuestions, setAttemptedQuestions] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);

  const getChoice = (selectedOption) => {
    setAttemptedQuestions(attemptedQuestions + 1);
    if (selectedOption === present_question.answer) {
      setScore(score + 1);
    }
    setSelectedOption(selectedOption);
  };

  const handleNext = () => {
    setSelectedOption(null);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    setSelectedOption(null);
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const handleQuit = () => {
    const confirmQuit = window.confirm("Are you sure you want to quit?");

    if (confirmQuit) {
      setShowResult(true);
    }
  };
  const handlePlayAgain = () => {
    setQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setAttemptedQuestions(0);
    setShowResult(false);
  };

  const handleBackToHome = () => {
    setQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setAttemptedQuestions(0);
    setShowResult(false);
    setStartQuiz(false);
  };

  return (
    <div className="app-container">
      {!startQuiz && (
        <Home
          onStartQuiz={() => {
            setStartQuiz(true);
            setQuestionIndex(0);
          }}
        />
      )}

      {startQuiz && !showResult && (
        <div className="quiz_box">
          <h1 className="title">Questions</h1>
          <h3>{`${questionIndex + 1} of ${questions.length}`}</h3>
          <div className="questions">
            <p>{present_question.question}</p>
          </div>
          <div className="Options">
            <ul>
              <li
                className={`option-A ${
                  selectedOption === present_question.optionA ? "selected" : ""
                }`}
                onClick={() => getChoice(present_question.optionA)}
              >
                {present_question.optionA}
              </li>
              <li
                className={`option-B ${
                  selectedOption === present_question.optionB ? "selected" : ""
                }`}
                onClick={() => getChoice(present_question.optionB)}
              >
                {present_question.optionB}
              </li>
              <li
                className={`option-C ${
                  selectedOption === present_question.optionC ? "selected" : ""
                }`}
                onClick={() => getChoice(present_question.optionC)}
              >
                {present_question.optionC}
              </li>
              <li
                className={`option-D ${
                  selectedOption === present_question.optionD ? "selected" : ""
                }`}
                onClick={() => getChoice(present_question.optionD)}
              >
                {present_question.optionD}
              </li>
            </ul>
          </div>

          <div className="buttons">
            <button className="hover-button" onClick={handlePrevious}>
              Previous
            </button>
            <button className="hover-button" onClick={handleNext}>
              Next
            </button>
            <button className="hover-button" onClick={handleQuit}>
              Quit
            </button>
          </div>
        </div>
      )}

      {showResult && (
        <Result
          totalQuestions={questions.length}
          attemptedQuestions={attemptedQuestions}
          correctAnswers={score}
          wrongAnswers={attemptedQuestions - score}
          onPlayAgain={handlePlayAgain}
          onBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
}

export default App;
