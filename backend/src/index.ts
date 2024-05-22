// src/index.ts
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/*

1. Create a mine board and send it to frontend


Keep the game running until mine is clicked or user cashes out his money


*/
