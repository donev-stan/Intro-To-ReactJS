import React from 'react'

const PlayAgain = ({onClick, gameStatus}) => {
    return (
        <div className='game-done'>
            <div className='message' style={{color: gameStatus === 'lost' ? 'red' : 'green' }}>
                {gameStatus === ' lost' ? 'Game Over' : 'Good Job'}
            </div>
            <button onClick={onClick}>Play Again</button>
        </div>
    )
}

export default PlayAgain
