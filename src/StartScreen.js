import React from "react";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className='start'>
      <h2>Welcome to Quiz</h2>
      <p className='start-desc'>
        Click the button below to start the quiz. {numQuestions} Questions 
      </p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: "start" })}>
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
