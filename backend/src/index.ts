// src/index.ts
import express from "express";
import { exec } from "child_process";

const app = express();
const port = 3000;

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// new logic for game over and server restart
interface GameState {
  isGameOver: boolean;
  count: number;
}

let gameState: GameState = {
  isGameOver: false,
  count: 0,
};

// API calls
app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
  // newBoard();
});
let USER_BALANCE: number = 100;

let betAmount: number;
// let count: number;

app.post("/check", (req, res) => {
  const index = req.body.index;
  betAmount = req.body.betAmount;
  gameState.count = req.body.count + 1;

  console.log("Index at backend : " + index); // it reaches here
  console.log("Betting Amount : " + betAmount);
  console.log("Count : " + gameState.count);

  gameState.isGameOver = gameOver(index, mine);

  if (gameState.isGameOver) {
    console.log("You clicked on a mine!");
    // restart the server
    // exec("npm start", (error, stdout, stderr) => {
    //   if (error) {
    //     console.error("Error restarting server:", error);
    //   } else {
    //     console.log("Server restarted successfully:", stdout, stderr);
    //   }
    // });
    // process.exit(1);
  } else {
    multiplier();
    const result = initialBoard[index];
    console.log("Result: " + result);

    // keep the game loop running, figure out some way

    // on game over
    // frontend me betting amount 0, balance update, and backend restart
  }

  res.json({ isGameOver: gameState.isGameOver });
  // if (index == mine) {
  //   gameOver(index, mine);
  // } else {
  // }
});

//Get user balance
app.get("/balance", (req, res) => {
  res.json(USER_BALANCE);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/*

1. Create a mine board and send it to frontend


Keep the game running until mine is clicked or user cashes out his money


*/

function mineSquare(): number {
  return Math.floor(Math.random() * (24 - 0 + 1)) + 0;
}

// For creating the board

let initialBoard: string[] = new Array(25);

// let mine: number;

function generateBoard(mine: number) {
  for (var i = 0; i < 25; i++) {
    initialBoard[i] = "G";
  }
  // mine = mineSquare();
  // console.log("Mine is at index : " + mine);
  initialBoard[mine] = "M";
}

let mine: number;

// function newBoard() {
app.get("/board", (req, res) => {
  mine = mineSquare();
  console.log(mine);
  generateBoard(mine);
  res.json(initialBoard);
});
// }
const multiplierArray: number[] = [
  1.03, 1.08, 1.12, 1.15, 1.18, 1.21, 1.23, 1.25, 1.27, 1.29, 1.31, 1.33, 1.35,
  1.36, 1.37, 1.38, 1.39, 1.4, 1.41, 1.42, 1.43, 1.44, 1.45, 1.46,
];

console.log(multiplierArray[2]);

// implement game over function
function gameOver(index: number, mine: number): boolean {
  if (index == mine) {
    // reduces the betting amount to directly 0 then adds this 0 to user balance 😂😂
    betAmount = 0;
    gameState.count = 0;
    console.log("Game Over! Your betting amount is now : " + betAmount);
    // newBoard();
    return true;
  }
  return false;
}

// implement cashout function
function cashout() {
  // adds all the bet and winning amount to the user balance and displays it in the frontend

  USER_BALANCE += betAmount;
}

// implement multiplier function
function multiplier() {
  // multiplies the betting amount with the factor and passes it to frontend for displaying

  betAmount *= multiplierArray[gameState.count];
  console.log(
    `Your amount has now become ${betAmount} which is ${
      multiplierArray[gameState.count]
    } times your bet`
  );
}

// implement normal bet function
