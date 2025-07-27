import React from "react";

function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <>
        {answer && (
          <button
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            className={`btn btn-next`}>
            Next Question
          </button>
        )}
      </>
    );

  if (index === numQuestions - 1) {
    return (
      <>
        {answer && (
          <button
            onClick={() => dispatch({ type: "FINISH" })}
            className={`btn btn-next`}>
            Finish Quiz
          </button>
        )}
      </>
    );
  }
}

export default NextButton;
