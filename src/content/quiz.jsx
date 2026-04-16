import { createContext, useReducer } from "react";
import questions from "../data/questions.js";

const STAGES = ["Start", "Playing", "End"];

const initialState = {
  gameStage: STAGES[0],
  questions,
};

const quizReducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "CHANGE_STAGE":
      return {
        ...state,
        gameStage: action.payload ?? state.gameStage,
      };

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const value = { state, dispatch };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
