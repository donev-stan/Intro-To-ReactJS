import Game from './Game';
import {useState} from 'react';

const StarMatch = ({}) => {

    const [gameID, setGameID] = useState(1);

    return (
        <Game key={gameID} startNewGame={()=> setGameID(gameID+1)} />
    )
}

export default StarMatch;
