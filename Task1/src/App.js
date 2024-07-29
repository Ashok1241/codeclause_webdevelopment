import React, { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Score from './components/Score';
import './styles.css';

const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "Which river is the longest in the world?",
    answers: [
      { text: "Amazon", correct: false },
      { text: "Mississippi", correct: false },
      { text: "Nile", correct: true },
      { text: "Yangtze", correct: false }
    ]
  },
  {
    question: "What is the name of the process by which plants convert sunlight into energy?",
    answers: [
      { text: "Respiration", correct: false },
      { text: "Photosynthesis", correct: true },
      { text: "Oxidation", correct: false },
      { text: "Evolution", correct: false }
    ]
  },
  {
    question: "Which one is the hottest continent?",
    answers: [
      { text: "Africa", correct: true },
      { text: "South Asia", correct: false },
      { text: "North America", correct: false },
      { text: "Australia", correct: false }
    ]
  },
];

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(null);

  const startQuiz = () => {
    setQuizStarted(true);
    setScore(null);
  };

  const showScore = (score) => {
    setQuizStarted(false);
    setScore(score);
  };

  const retryQuiz = () => {
    setQuizStarted(false);
    setScore(null);
  };

  return (
    <div className="container">
      {!quizStarted && score === null && <Home startQuiz={startQuiz} />}
      {quizStarted && <Quiz questions={questions} showScore={showScore} />}
      {score !== null && <Score score={score} retryQuiz={retryQuiz} />}
    </div>
  );
}

export default App;
