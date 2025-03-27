import { useState } from "react"
import "./tic-tac-toe.css"
import useTicTacToe from "../hooks/useTicTacToe";

const TicTacToe = (props) => {
    const { num ,mark} = props;

    const { board, statusMessage, clickhandler, gameEnd, resetGame } = useTicTacToe(num,mark);

    return <div className="game">
        <span>{statusMessage}</span>
        <button onClick={resetGame}>Reset</button>
        <div style={{gridTemplateColumns : `repeat(${num}, 1fr)`}} className={`board ${gameEnd ? "disable" : ''}`} >
            {board.map((player, index) => {
                return <div className={`grid-item ${player !== null ? "disable" : ""}`} key={index} onClick={() => clickhandler(index)}>{player}</div>
            })}
        </div>
    </div>
}

export default TicTacToe