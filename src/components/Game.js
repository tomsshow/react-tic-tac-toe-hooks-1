import React , { useState } from "react";
import { calculateWinner } from "../helper"
import Board from "./Board";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [setNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[setNumber]);
    const xO = xIsNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, setNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        // return won or occupied
        if(winner || squares[i]) return;
        //select square
        squares[i] = xO;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    }

    const renderMoves = () => 
        history.map((_step, move) => {
            const destination = move ? `Go to move#${move}` : "Go to start";
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            );
        });

    return(
        <>
        <h1>React Tic-tac-toe with Hooks!</h1>
        <Board squares={history[stepNumber]} onClick={handleClick} />
        <div className="info-wrapper">
            <div>
                <h3>History</h3>
                {renderMoves()}
            </div>
        </div>
        <h3>{winner ? "Winner " + winner : "Next Player " + xO}</h3>
        </>
    );
};

export default Game;