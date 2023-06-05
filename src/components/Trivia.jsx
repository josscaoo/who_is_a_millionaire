import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

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
      setSelectedAnswer(a);
      setClassName("answer active");
      setAnswered(true);
      delay(3000, () => {
        setClassName(a.correct ? "answer correct" : "answer wrong");
        delay(2000, () => {
          if (a.correct) {
            correctAnswer();
            delay(1000, () => {
              setQuestionNumber((prev) => prev + 1);
            });
          } else {
            wrongAnswer();
            delay(1000, () => {
              setStop(true);
            });
          }
        });
      });
    }
  };

const [skipped, setSkipped] = useState(false);

const skipQuestion = () => {
  if (!answered && !skipped) {
    setSkipped(true);
    setQuestionNumber((prev) => prev + 1);
  }
};



  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
      <button onClick={skipQuestion}>Bỏ qua</button>
    </div>
  );
}
