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

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
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
