import React from 'react';

function Home({ startQuiz }) {
  return (
    <div className="home">
      <h1>Welcome to the Quiz Game!</h1>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
}

export default Home;
