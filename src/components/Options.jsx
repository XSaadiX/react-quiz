import { type } from "@testing-library/user-event/dist/type";
import React from "react";

export default function Options({ dispatch, answer, question }) {
  const hasAnswered = answer !== null;
  return (
    <div className='options'>
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? "selected" : ""} ${
            hasAnswered
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={i}
          disabled={hasAnswered}
          onClick={() => {
            dispatch({ type: "newAnswer", payload: i });
          }}>
          <h4>
            {i + 1}. {option}
          </h4>
        </button>
      ))}
    </div>
  );
}
