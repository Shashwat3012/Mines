# Mines

Frontend : ReactJS with TS
Backend : Express

## Main Idea
We give the user hardcoded 100 rs virtual money to start the game and place bets.<br>
The board for each game is generated in the backend and then sent to the frontend to avoid anyone getting to know about business logic by inspecting.<br>
Also on each click the selected tile is sent to the backend and then checked there to return mine or gem according to the board.<br>


We are facing some issues as of now:<br>
1. not able to get the selections to the backend
2. the bet * multiplier logic works fine for only 5 continuous gems, fails to go beyond that

## Logic

1 Mine and 25 Gems

- After selecting 1 mine my bet becomes = bet \* 1.03

My multipliers for 1 mine game will be :
1.03, 1.08, 1.12, 1.15, 1.18, 1.21, 1.23, 1.25, 1.27, 1.29, 1.31, 1.33, 1.35, 1.36, 1.37, 1.38, 1.39, 1.40, 1.41, 1.42, 1.43, 1.44, 1.45, 1.46

Will use this later to fetch the board

- https://discuss.jsonapi.org/t/using-post-instead-of-get-for-retrieving-a-resource/2399
