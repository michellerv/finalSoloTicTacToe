# Tic-Tac-Toe: Fire v.s. Water
## An elemental twist on a classic game

### Overview:
- This application is a specialized version of tic tac toe harnessing the elements of fire and water.
- The user will be told who's turn it is, and players can accumulate points as they play. After a win or a draw, the game will automatically reset. After a win, the player can no longer select any squares. The user can play as many rounds as they wish. The turns will change at the beginning of each new game, based on who started the previous game. 

### Contributors:
- Michelle Villagran
- Student at Turing School of Software and Design, Front End program 2305
- https://github.com/michellerv

### Learning Goals: 
- The learning goals for this project were to solidify and demonstrate our understanding of DRY JavaScript, event delegation to handle similar event listeners, the difference between the data model and the DOM.
- Use of for loops to iterate through and filter DOM elements.
- Use our problem solving process to break down large problems, solve things in smaller steps, and trust ourselves with logical challenges.

### Code Architecture
- My data model consists of the two player objects, water and fire.
-  These objects hold keys that allow for moves to be tracked, which determines a win or a draw. 
- After a game is won, or at a draw, the moves are cleared in the moves key of the object, and the game board will be cleared as well. 
- If a box is already filled, a stoprRepeats function stops that box from being selected and filled again. 

### Future Features 
- A potential feature is to allow users to pick the elements they would like to have compete: air, water, fire, or earth. 
- Once two elements are selected, the design of the page changes, as do the announcements and banners. 
- Elements could compete tournament style with the element with the most amount of wins within certain rounds winning it all.

### Setup Instructions
- Go to https://github.com/michellerv/finalSoloTicTacToe.
- Click the green button that says "code" on it to get the SSH key to clone the repository down to your local machine.
- After copying the SSH code, go into terminal and type in git clone and paste the SSH key behind it to clone a copy of the app to your machine.
- Type open index.html in the terminal. 
- Enjoy the game. 

### Preview of App:

![Elemental tic tac toe](assets/Elemental%20tic%20tac%20toe.gif)

### Challenges & Wins
- The biggest challenge and win for me with this project was testing my confidence in my abilities. I proved to myself with this project that I could have a completely different data model, yet still be able to communicate my ideas, and ask for help when needed. I am also very capable of finding and fixing bugs on my own, because I understand my code. 
- Another win for me, was realizing and seeing how much I've learned from my first solo project to this one. 


 