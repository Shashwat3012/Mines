// src/index.ts
import express from "express";

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

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.post("/check", (req, res) => {
  const { index } = req.body;
  console.log("Index at backend: " + index); // it reaches here
  if (index === undefined || index < 0 || index >= initialBoard.length) {
    return res.status(400).json({ error: "Invalid index" });
  }
  const result = initialBoard[index];
  console.log("Result: " + result);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  // console.log(mineSquare());
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

function generateBoard(mine: number) {
  for (var i = 0; i < 25; i++) {
    initialBoard[i] = "G";
  }

  initialBoard[mine] = "M";
}

const mine = mineSquare();
console.log(mine);

app.get("/board", (req, res) => {
  generateBoard(mine);
  res.json(initialBoard);
});

const multiplier: Number[] = [
  1.03, 1.08, 1.12, 1.15, 1.18, 1.21, 1.23, 1.25, 1.27, 1.29, 1.31, 1.33, 1.35,
  1.36, 1.37, 1.38, 1.39, 1.4, 1.41, 1.42, 1.43, 1.44, 1.45, 1.46,
];

// implement game over function
function gameOver() {
  console.log("Game Over");
}

// implement cashout function

// implement multiplier function

// implement normal bet function
