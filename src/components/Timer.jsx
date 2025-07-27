import React, { useEffect } from "react";

function Timer({ secondsRemaining, dispatch }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  const displayTime = `${mins}:${secs < 10 ? `0${secs}` : secs}`;
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "TIMER_TICK" });
    }, 1000);
    return () => clearInterval(timer);
  }, [dispatch]);

  return <div className='timer'>{displayTime}</div>;
}

export default Timer;
