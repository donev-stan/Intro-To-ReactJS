import "./App.css";
import utils from "./Utils";
import { useState } from "react";
import Number from './Number';
import Stars from './Stars';

function App() {
    const [stars, setStars] = useState(utils.random(1, 9));

    return (
        <div className="game">

            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            
            <div className="body">
                <div className="left">
                    <Stars starsCount={stars} />
                </div>

                <div className="right">
                    {utils.range(1, 9).map((number) => (
                        <Number key={number} number={number} />
                    ))}
                </div>
            </div>

            <div className="timer">Time Remaining: 10</div>
        </div>
    );
}

export default App;