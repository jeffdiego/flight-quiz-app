import { useContext } from "react";
import Quiz from "../img/quiz.svg";

import "./Welcome.css";
import { QuizContext } from "../content/quiz";

const Welcome = () => {
  const quizState = useContext(QuizContext);

  console.log(quizState);

  return (
    <div id="Welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para iniciar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  );
};

export default Welcome;
