import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Board.css";
import Square from "./Square";
import bettingAmountFromSidebar from "./SideBar";

function Board() {
  const [board, setBoard] = useState<string[]>(Array(25).fill(""));
  const [revealed, setRevealed] = useState<boolean[]>(Array(25).fill(false));
  const [count, setCount] = useState(-1);

  // useEffect(() => {
  //   const fetchBoard = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/board");
  //       setBoard(response.data);
  //     } catch (error) {
  //       console.error("Error fetching board data:", error);
  //     }
  //   };

  //   fetchBoard();
  // }, []);

  const handleButtonClick = async () => {
    try {
      const response = await axios.get("http://localhost:3000/board");
      setBoard(response.data);
    } catch (error) {
      console.error("Error fetching board data:", error);
    }
  };

  const handleClick = async (index: number) => {
    const newRevealed = [...revealed];
    newRevealed[index] = true;
    setRevealed(newRevealed);

    console.log(index + " " + newRevealed[index]);

    // @piyush
    // abhi ke liye mein betting amount hardcoded daal rha hu, tujhe yaha pe user ne dala hua betting amount lana hai kaise toh karke ;)

    let betAmount: number = +bettingAmountFromSidebar;
    // let count: number = -1; // like the count of gems he has clicked on in a row, so that we use multiplier accordingly in th backend
    try {
      setCount(count + 1);
      console.log("Count : " + count);
      console.log(
        `Betting Amount from Board.tsx file : ${betAmount} and its type is ${typeof betAmount}.`
      );
      const response = await axios.post("http://localhost:3000/check", {
        index,
        betAmount,
        count,
      });
      const { result } = response.data;
      console.log("Result: " + result);

      const newBoard = [...board];
      newBoard[index] = board[index];
      setBoard(newBoard);

      console.log(`Board has ${board[index]} at index ${index}.`);

      if (board[index] == "M") {
        // Implement something so that the game gets over

        // On game over -> The amount betted will become 0, new board should be loaded and the total balance of the user should be updated
        console.log("Game Over");
      }
    } catch (error) {
      console.error("Error checking square:", error);
    }
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

  return (
    <>
      <div className="board">{createBoard()}</div>;
      <button onClick={handleButtonClick}>Generate Board</button>
    </>
  );
}

export default Board;
