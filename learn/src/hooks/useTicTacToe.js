import { useRef, useState } from "react";

const initalBoard = (n) => Array.from({ length: n * n }).fill(null);

const useTicTacToe = (num = 5,mark=num) => {

    const [board, setBoard] = useState(initalBoard(num));
    const [player, setPlayer] = useState(1); //X:1 & O:-1
    const [statusMessage, setStatusMessage] = useState("Player X's turn");
    const [gameEnd, setGameEnd] = useState(false);
    let rowmap = useRef(Array.from({ length: num }).fill(0));
    let colmap = useRef(Array.from({ length: num }).fill(0));
    let dia1 = useRef(0);
    let dia2 = useRef(0);

    const calculateWinner = (index) => {
        let row = parseInt(index / num);
        let col = index % num;
        rowmap.current[row] += player;
        colmap.current[col] += player;
        if (row === col) dia1.current = dia1.current + player;
        if (row + col === num - 1) dia2.current = dia2.current + player;

        console.log(rowmap, colmap, dia1, dia2);

        if (Math.abs(rowmap.current[row]) === mark || Math.abs(colmap.current[col]) === mark ||
            Math.abs(dia1.current) === mark || Math.abs(dia2.current) === mark) {
            return player;
        }

    }

    const clickhandler = (index) => {
        let updateBoard = [...board];
        updateBoard[index] = player > 0 ? 'X' : 'O';
        setBoard(updateBoard);
        setPlayer(player > 0 ? -1 : 1);
        setStatusMessage(player > 0 ? "Player O's turn" : "Player X's turn");
        let winner = calculateWinner(index);
        if (winner) {
            setStatusMessage(winner > 0 ? "Player X wins1!" : "Player O wins!");
            setGameEnd(true);
        }

        if (!updateBoard.includes(null))
            setStatusMessage("Match Draw")
    }

    const resetGame = () => {
        setBoard(initalBoard(num));
        setPlayer(1);
        setGameEnd(false);
        setStatusMessage("Player X's turn")
        rowmap.current = Array.from({ length: num }).fill(0);
        colmap.current = Array.from({ length: num }).fill(0);
        dia1.current = 0;
        dia2.current = 0;

    }

    return { board, statusMessage, clickhandler , gameEnd,resetGame}
}

export default useTicTacToe;