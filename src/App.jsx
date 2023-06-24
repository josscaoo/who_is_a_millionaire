import { useEffect, useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";
import { useSelector } from "react-redux";
import QuizData from "./components/QuizData";

function App() {
  const [usernameStart, setUsernameStart] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [finished, setFinished] = useState(false);
  const [winner, setWinner] = useState(false); // Thêm state để kiểm tra chiến thắng
  const username = useSelector((state) => state.user);
  const { data, moneyPyramid } = QuizData();

  useEffect(() => {
    if (questionNumber > data.length) {
      setFinished(true);
      setWinner(true);
    } else if (questionNumber > 1) {
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
    }
  }, [questionNumber, moneyPyramid, data.length]);

  const handleRestart = () => {
    setUsernameStart(null);
    setQuestionNumber(1);
    setStop(false);
    setEarned("$ 0");
    setFinished(false);
    setWinner(false);
  };

  return (
    <div className="app">
      {!usernameStart ? (
        <Start setUsernameStart={setUsernameStart} />
      ) : (
        <>
          <div className="main">
            {stop ? (
              <>
                <div className="endText">
                  Cám ơn {username} đã đến với chương trình! <br />
                  Số tiền thắng của bạn là: {earned}
                  <h4 onClick={handleRestart} className="playNew">
                    Chơi lại
                  </h4>
                </div>
              </>
            ) : finished ? (
              <>
                <div className={`endText ${winner ? "centerText" : ""}`}>
                  Bạn đã chiến thắng!
                  <p
                    className={`endText ${winner ? "centerText" : ""}`}
                    onClick={handleRestart}
                  >
                    Chơi lại
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="top">
                  <div className="userName">
                    người chơi:
                    <span>{username}</span>
                  </div>

                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setStop={setStop}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  key={m.id}
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
