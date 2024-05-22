import React, { useState } from "react";
import "./styles/Board.css";
import Square from "./Square";

const initialBoard = [
  "G",
  "G",
  "M",
  "G",
  "G",
  "G",
  "G",
  "G",
  "G",
  "M",
  "G",
  "G",
  "G",
  "G",
  "G",
  "M",
  "G",
  "G",
  "G",
  "G",
  "G",
  "G",
  "M",
  "G",
  "G",
];

const Board: React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(25).fill(""));
  const [revealed, setRevealed] = useState<boolean[]>(Array(25).fill(false));

  const handleClick = (index: number) => {
    const newRevealed = [...revealed];
    newRevealed[index] = true;
    setRevealed(newRevealed);

    console.log(index + " " + newRevealed[index]);

    const newBoard = [...board];
    newBoard[index] = initialBoard[index];
    setBoard(newBoard);
  };

  const renderSquare = (index: number) => {
    return (
      <Square
        value={revealed[index] ? board[index] : ""}
        onClick={() => handleClick(index)}
        key={index}
      />
    );
  };

  const createBoard = () => {
    let squares = [];
    for (let i = 0; i < 25; i++) {
      squares.push(renderSquare(i));
    }
    return squares;
  };

  return <div className="board">{createBoard()}</div>;
};

export default Board;
