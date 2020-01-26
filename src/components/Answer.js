import React from "react";

function Answer(props) {
  let classes = ["answer"];
  if (props.selected) {
    classes.push("selected");
  }
  if (props.isCorrect && props.checkAnswer) {
    classes.push("correct");
  }
  if (!props.isCorrect && props.checkAnswer && props.selected) {
    classes.push("wrong");
  }
  return (
    <button
      value={props.letter}
      className={classes.join(" ")}
      onClick={props.handleClick}
    >
      <span className="letter">{props.letter}.</span> {props.answer}
    </button>
  );
}
export default Answer;
