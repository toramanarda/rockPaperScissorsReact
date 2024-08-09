import { useState } from 'react'
import paper from './assets/img/paper.png'
import scissors from './assets/img/scissors.png'
import rock from './assets/img/rock.png'
import triangle from "./assets/img/triangle.png"

import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const choices = ['rock', 'paper', 'scissors'];

  const handleClickChoice = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    const result = getResult(choice, computerChoice);
    setResult(result);
    if (result === "You win!") {
      setScore(score + 1);
    }
  };

  const getResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  };

  const handlePlayAgain = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult("");
  };

  return (
    <div className="app">
      <div className="header">
        <div className="header-content">
          <p><a href="#">ROCK PAPER SCISSORS</a></p>
        </div>
        <div className="score-area">
          <div className="score-content">
            <h4>SCORE</h4>
            <h2 className="score">{score}</h2>
          </div>
        </div>
      </div>

      <div className="game-area">
        {!userChoice ? (
          <div className="choices">
            <button className="paperChoice" onClick={() => handleClickChoice('paper')}>
              <img src={paper} alt="paper" className="paper" />
            </button>
            <button className="scissorsChoice" onClick={() => handleClickChoice('scissors')}>
              <img src={scissors} alt="scissors" className="scissors" />
            </button>
            <button className="rockChoice rockStart" onClick={() => handleClickChoice('rock')}>
              <img src={rock} alt="rock " />
            </button>
            <img src={triangle} alt="" className="triangle" />
          </div>
        ) : (
          <div className="result-area">
            <div className="picked">
              <div className="picked-you">
                <button><img src={userChoice === 'rock' ? rock : userChoice === 'paper' ? paper : scissors} alt={userChoice} className={userChoice} /></button>
                <p>YOU PICKED</p>
              </div>
              <div className="picked-home">
                <button><img src={computerChoice === 'rock' ? rock : computerChoice === 'paper' ? paper : scissors} alt={computerChoice} className={computerChoice} /></button>
                <p>THE HOUSE PICKED</p>
              </div>
            </div>
            <div className="result">
              <h1>{result}</h1>
              <button className="again-btn" onClick={handlePlayAgain}>PLAY AGAIN</button>
            </div>
          </div>
        )}
      </div>

      <div className="rules">
        <a href="/rockPaperScissors/modal.html">R U L E S</a>
      </div>
    </div>
  );
}

export default App;