import React from "react";
import Options from "./components/Options";

export default function Question({ question, index, dispatch, answer }) {
  return (
    <div>
      <h3>{question.question}</h3>
      <ul className='li'>
        <Options question={question} dispatch={dispatch} answer={answer} />
      </ul>
    </div>
  );
}
