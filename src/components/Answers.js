import React from "react";
import Answer from "./Answer";

function Answers(props) {
  return (
    <>
      <Answer
        letter="a"
        answer={props.question.answer_a}
        handleClick={props.handleClick}
        selected={props.currentAnswer === "a"}
        isCorrect={props.correctAnswer === "a"}
        checkAnswer={props.checkAnswer}
      />
      <Answer
        letter="b"
        answer={props.question.answer_b}
        handleClick={props.handleClick}
        selected={props.currentAnswer === "b"}
        isCorrect={props.correctAnswer === "b"}
        checkAnswer={props.checkAnswer}
      />
      <Answer
        letter="c"
        answer={props.question.answer_c}
        handleClick={props.handleClick}
        selected={props.currentAnswer === "c"}
        isCorrect={props.correctAnswer === "c"}
        checkAnswer={props.checkAnswer}
      />
      <Answer
        letter="d"
        answer={props.question.answer_d}
        handleClick={props.handleClick}
        selected={props.currentAnswer === "d"}
        isCorrect={props.correctAnswer === "d"}
        checkAnswer={props.checkAnswer}
      />
    </>
  );
}
export default Answers;
