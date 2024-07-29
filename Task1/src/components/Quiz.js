import React, { useState } from 'react';

function Quiz({ questions, showScore }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerButtonClick = (correct) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(correct);
      if (correct) {
        setScore(score + 1);
      }
      setShowNextButton(true);
    }
  };

  const handleNextButtonClick = () => {
    setSelectedAnswer(null);
    setShowNextButton(false);
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      showScore(score);
    }
  };

  const getProgressBarWidth = () => {
    return ((currentQuestionIndex + 1) / questions.length) * 100 + '%';
  };

  return (
    <div className="quiz">
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: getProgressBarWidth() }}></div>
      </div>
      <div className="question-container">
        <div className="question-number">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <div className="question">{questions[currentQuestionIndex].question}</div>
        <div className="answer-buttons">
          {questions[currentQuestionIndex].answers.map((answer) => (
            <button
              key={answer.text}
              className={selectedAnswer !== null ? (answer.correct ? 'correct' : 'wrong') : ''}
              onClick={() => handleAnswerButtonClick(answer.correct)}
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
      {showNextButton && <button id="nextBtn" onClick={handleNextButtonClick}>Next</button>}
    </div>
  );
}

export default Quiz;
