import DateCounter from "./DateCounter";
import Header from "./Header";
import { useEffect, useReducer } from "react";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import "./App.css";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Progress from "./components/Progress";
import NextButton from "./components/NextButton";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

const SECS_PER_QUESTION = 30; // Assuming each question has a 30-second timer

const initialState = {
  questions: [],
  status: "ready", // ready, loading, error, active
  index: 0,
  points: 0,
  answer: null,
  highestScore: 0,
  secondsRemaining: null, // Assuming a 10-second timer
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION, // Assuming a constant SECS_PER_QUESTION
      };
    case "newAnswer":
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        status: state.index + 1 < state.questions.length ? "active" : "ready",
      };

    case "FINISH":
      return {
        ...state,
        status: "finished",
        index: 0,
        points: 0,
        answer: null,

        highestScore:
          state.points > state.highestScore ? state.points : state.highestScore,
      };
    case "RESTART":
      return {
        ...initialState,
        status: "ready",
        questions: state.questions,
      };
    case "TIMER_TICK":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status:
          state.secondsRemaining - 1 <= 0
            ? "finished"
            : state.status === "active"
            ? "active"
            : state.status,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function App() {
  const [
    {
      status,
      questions,
      index,
      answer,
      points,
      highestScore,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const maxPossiblePoints = questions.reduce(
    (total, question) => total + question.points,
    0
  );

  useEffect(() => {
    document.title = "Quiz App";
  }, []);

  const numQuestions = questions.length;

  useEffect(function () {
    fetch("http://localhost:8000/questions").then((response) => {
      response
        .json()
        .then((data) => dispatch({ type: "dataReceived", payload: data }))
        .catch((err) => dispatch({ type: "dataFailed" }));
    });
  }, []);
  return (
    <div className='container'>
      <Header />

      <Main className='main'>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
              index={index}
            />
            <Footer>
              <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />

              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highestScore={highestScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
