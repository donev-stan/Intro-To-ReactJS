import utils from "./Utils";
import { useState, useEffect } from "react";
import Number from "./Number";
import Stars from "./Stars";
import PlayAgain from "./PlayAgain";

// Custom Hook - State manager
const useGameState = () => {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(15);

    useEffect(() => {
        if (secondsLeft > 0 && availableNums.length > 0) {
            const timerID = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            return () => clearTimeout(timerID);
        }
    });

    const setGameState = (newCandidateNums) => {
        if (utils.sum(newCandidateNums) !== stars) {
            setCandidateNums(newCandidateNums);
        } else {
            const newAvailableNums = availableNums.filter(
                (n) => !newCandidateNums.includes(n)
            );
            setStars(utils.randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    };

    return {stars, availableNums, candidateNums, secondsLeft, setGameState};
};

function Game({ startNewGame }) {

    const {stars, availableNums, candidateNums, secondsLeft, setGameState} = useGameState();

    const candidatesAreWrong = utils.sum(candidateNums) > stars;
    // const gameWon = availableNums.length === 0;
    // const gameLost = secondsLeft === 0;

    const gameStatus =
        availableNums.length === 0
            ? "won"
            : secondsLeft === 0
            ? "lost"
            : "active";

    const numberStatus = (number) => {
        if (!availableNums.includes(number)) return "used";
        if (candidateNums.includes(number))
            return candidatesAreWrong ? "wrong" : "candidate";
        return "available";
    };

    const onNumberClick = (number, currentStatus) => {
        if (gameStatus !== "active" || currentStatus === "used") return;

        const newCandidateNums =
            currentStatus === "available"
                ? candidateNums.concat(number)
                : candidateNums.filter((cn) => cn !== number);

        setGameState(newCandidateNums);
    };

    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>

            <div className="body">
                <div className="left">
                    {gameStatus !== "active" ? (
                        <PlayAgain
                            onClick={startNewGame}
                            gameStatus={gameStatus}
                        />
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

            <div className="timer">Time Remaining: {secondsLeft}</div>
        </div>
    );
}

export default Game;