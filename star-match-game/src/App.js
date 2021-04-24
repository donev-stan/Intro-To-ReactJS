import "./App.css";
import utils from "./Utils";
import { useState } from "react";
import Number from './Number';
import Stars from './Stars';
import PlayAgain from './PlayAgain';

function App() {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);

    const candidatesAreWrong = utils.sum(candidateNums) > stars;
    const gameOver = availableNums.length === 0;

    const resetGame = () => {
      setStars(utils.random(1, 9));
      setAvailableNums(utils.range(1, 9));
      setCandidateNums([]);
    }

    const numberStatus = (number) => {
      if (availableNums.includes(number) === false) return 'used';
      if (candidateNums.includes(number)) return candidatesAreWrong ? 'wrong' : 'candidate';
      return 'available';
    }

    const onNumberClick = (number, currentStatus) => {
      if (currentStatus == 'used') return;

      const newCandidateNums = 
        currentStatus === 'available'
          ? candidateNums.concat(number)
          : candidateNums.filter(cn => cn !== number);

      if (utils.sum(newCandidateNums) !== stars) {
        setCandidateNums(newCandidateNums);
      } else {
        const newAvailableNums = availableNums.filter(
          n => !newCandidateNums.includes(n)
        );
        setStars(utils.randomSumIn(newAvailableNums, 9));
        setAvailableNums(newAvailableNums);
        setCandidateNums([]);
      }
    }

    return (
        <div className="game">

            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            
            <div className="body">
                <div className="left">
                  {gameOver ? (
                    <PlayAgain onClick={resetGame} />
                  ) : (
                    <Stars starsCount={stars} />
                  )}
                </div>

                <div className="right">
                    {utils.range(1, 9).map((number) => (
                        <Number 
                          key={number} 
                          number={number}
                          status={numberStatus(number)}
                          onClick={onNumberClick}
                        />
                    ))}
                </div>
            </div>

            <div className="timer">Time Remaining: 10</div>
        </div>
    );
}

export default App;