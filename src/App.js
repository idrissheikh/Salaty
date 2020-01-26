import React, { useState } from "react";
import Progress from "./components/Progress";
import Question from "./components/Question";
import Answer from "./components/Answer";
import Answers from "./components/Answers";
import "./App.css";
import { is } from "@babel/types";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [isCheckAnswer, setisCheckAnswer] = useState(false);
  const [error, setError] = useState("");
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "ارقد يا حماده ",
      answer_a: "I am fine thanks",
      answer_b: "I am ok ",
      answer_c: "Every thing gana be all writh",
      answer_d: "let me alone",
      correct_answer: "d"
    },

    {
      id: 2,
      question: "How you donig?",
      answer_a: "ask me again",
      answer_b: "what did you said? ",
      answer_c: "do you wana dei?",
      answer_d: "let me alone",
      correct_answer: "c"
    },

    {
      id: 3,
      question: "How?",
      answer_a: "I am fin",
      answer_b: "I am  not ok ",
      answer_c: "Every thing gana be ",
      answer_d: "let me",
      correct_answer: "d"
    }
  ];

  const question = questions[currentQuestion];

  const handleClick = e => {
    setCurrentAnswer(e.target.value);
    setError("");
  };

  const renderErorr = () => {
    if (!error) {
      return;
    }
    return <h2 className="text-danger">{error}</h2>;
  };

  const renderResultsMark = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return <span className="correct">Correct</span>;
    }
    return <span className="failed">failed </span>;
  };

  const renderResultsData = () => {
    return answers.map(answer => {
      const question = questions.find(
        question => question.id === answer.questionId
      );
      return (
        <div key={question.id}>
          {question.question} -{renderResultsMark(question, answer)}
        </div>
      );
    });
  };

  const restart = () => {
    setAnswers([]);
    setCurrentAnswer("");
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const checkAnswer = () => {
    if (!currentAnswer) {
      setError("Velg et alternative");
      return;
    }
    const isCorrect = currentAnswer === question.correct_answer;
    setisCheckAnswer(true);
    //alert(isCorrect ? "CORRECT" : "WRONG");
  };
  const next = () => {
    setisCheckAnswer(false);
    const answer = {
      questionId: question.id,
      answer: currentAnswer
    };

    answers.push(answer);
    setAnswers(answers);
    setCurrentAnswer("");

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }
    setShowResults(true);
  };

  if (showResults) {
    return (
      <div className="container results">
        <h2>Results</h2>
        <ul>{renderResultsData()} </ul>
        <button className="btn btn-primary" onClick={restart}>
          Restart
        </button>
      </div>
    );
  } else {
    return (
      <div className="container">
        <Progress total={questions.length} current={currentQuestion + 1} />
        <Question question={question.question} />
        {renderErorr()}
        <Answers
          question={question}
          currentAnswer={currentAnswer}
          correctAnswer={question.correct_answer}
          handleClick={handleClick}
          checkAnswer={isCheckAnswer}
        />
        {!isCheckAnswer && (
          <button className="btn btn-primary" onClick={checkAnswer}>
            Check Answer
          </button>
        )}

        {currentAnswer && isCheckAnswer && (
          <button className="btn btn-primary" onClick={next}>
            Countinue
          </button>
        )}
      </div>
    );
  }
}

export default App;
