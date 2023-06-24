import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";
import nervous from "../sounds/nervous.mp3";
import { FastForwardOutlined } from "@ant-design/icons";

export default function Trivia({
  data,
  questionNumber,
  setQuestionNumber,
  setStop,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [letsNervous] = useSound(nervous);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
    setSelectedAnswer(null);
    setClassName("answer");
    setAnswered(false);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    if (!answered) {
      letsNervous();
      setSelectedAnswer(a);
      setClassName("answer active");
      setAnswered(true);
      delay(3000, () => {
        setClassName(a.correct ? "answer correct" : "answer wrong");
        delay(1000, () => {
          if (a.correct) {
            correctAnswer();
            delay(1000, () => {
              setQuestionNumber((prev) => prev + 1);
            });
          } else {
            wrongAnswer();
            delay(3000, () => {
              setStop(true);
            });
          }
        });
      });
    }
  };

  const [skipped, setSkipped] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  const skipQuestion = () => {
    if (!answered && !skipped && questionNumber !== data.length) {
      setSkipped(true);
      setQuestionNumber((prev) => prev + 1);
    } else if (questionNumber === data.length) {
      setIsLastQuestion(true);
      setTimeout(() => {
        setIsLastQuestion(false);
      }, 3000);
    }
  };

  const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false);

  const useFiftyFifty = () => {
    if (!answered && !fiftyFiftyUsed) {
      setFiftyFiftyUsed(true);
      setFiftyFiftyUsed((prev) => prev + 1);

      const correctAnswer = question.answers.find((answer) => answer.correct);
      const wrongAnswers = question.answers.filter((answer) => !answer.correct);
      const randomIndex = Math.floor(Math.random() * wrongAnswers.length);
      const randomWrongAnswer = wrongAnswers[randomIndex];

      setSelectedAnswer(null);

      setQuestion((prevQuestion) => {
        const updatedAnswers = prevQuestion.answers.map((answer) => {
          if (answer.correct || answer === randomWrongAnswer) {
            return { ...answer };
          } else {
            return { ...answer, number: " ", text: " " };
          }
        });

        return { ...prevQuestion, answers: updatedAnswers };
      });
    }
  };

  return (
    <div className="trivia">
      {isLastQuestion && (
        <div className="last-question-alert">
          Đây là câu hỏi cuối cùng, bạn không được bỏ qua
        </div>
      )}
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a, index) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => handleClick(a)}
            key={index}
          >
            {a.number} <span>{a.text}</span>
          </div>
        ))}
      </div>

      <div className="d-flex">
        <div className="circle-wrapper">
          <div
            className={`skip-button ${skipped ? "disabled-button" : ""}`}
            onClick={skipQuestion}
          >
            <div className={skipped ? "rotate-icon" : ""}>
              <FastForwardOutlined />
            </div>
            {skipped && <div className="cancel-overlay">X</div>}
          </div>
        </div>

        <div className="circle-wrapper">
          <div
            className={`remove-button ${
              fiftyFiftyUsed ? "disabled-button" : ""
            }`}
            onClick={useFiftyFifty}
          >
            <div className={fiftyFiftyUsed ? "rotate-icon" : ""}>50-50</div>
            {fiftyFiftyUsed && <div className="cancel-overlay">X</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
