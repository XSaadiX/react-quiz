import React from "react";

function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className='progress'>
      <progress value={index} max={maxPossiblePoints} />
      <p>
        Question <strong>{index + 1}</strong> of <strong>{numQuestions}</strong>
      </p>
      <p>
        <strong>{points}</strong> of <strong>{maxPossiblePoints}</strong>
      </p>
    </header>
  );
}

export default Progress;
