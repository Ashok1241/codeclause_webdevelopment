import React from 'react';

function Score({ score, retryQuiz }) {
  return (
    <div className="score">
      <h2>Your Score: {score}</h2>
      <button onClick={retryQuiz}>Retry Quiz</button>
    </div>
  );
}

export default Score;
