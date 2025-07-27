import React from "react";

function FinishScreen({
  points,
  maxPossiblePoints,
  highestScore = "High Score: 0",
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage >= 80) {
    emoji = "🎉";
  } else if (percentage >= 50) {
    emoji = "🙂";
  } else {
    emoji = "😞";
  }

  return (
    <div>
      <p className='result'>
        You scored <strong>{points}</strong> out of{" "}
        <strong>{maxPossiblePoints}</strong> points - {Math.ceil(percentage)}%
        correct! {emoji}
      </p>
      <p className='highscore'>{highestScore}</p>
      <button className='restart' onClick={() => dispatch({ type: "RESTART" })}>
        Restart Quiz
      </button>
    </div>
  );
}

export default FinishScreen;
