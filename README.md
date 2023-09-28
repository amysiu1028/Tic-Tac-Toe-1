# Tic Tac Toe

## ✨ [Play Tic Tac Toe](#) ✨

## 💭 Abstract:
This project is a classic Tic Tac Toe game built from scratch. It allows two players to take turns and compete against each other. The game displays the current player's turn, prevents players from placing their tokens in occupied squares, and detects wins and draws. The game resets automatically after each round.

## 💻 Installation instructions:
To play this game locally, follow these steps:
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Open the `index.html` file in your preferred web browser.

## 📷 Preview of App 
<img width="766" alt="Screen Shot 2023-09-25 at 7 21 38 PM" src="https://user-images.githubusercontent.com/140124108/270494049-f77ef465-9a9d-4f33-ab16-c38c0aff0863.png">

## Contributors:
[Amy](https://github.com/amysiu1028) 

## Link: 
[Live Github Link](https://amysiu1028.github.io/Tic-Tac-Toe-1/)

## 🍎 Context:
This project was developed as a solo project to solidify and demonstrate understanding of JavaScript, HTML, and CSS concepts. The goal was to create a fully functional Tic Tac Toe game while adhering to best practices and coding standards.

## 🧠 Learning Goals:
- Demonstrate proficiency in JavaScript.
- Implement event delegation for efficient event handling.
- Understand the separation between the data model and DOM representation.
- Utilize loops to iterate through and manipulate DOM elements.
- Develop problem-solving skills and break down complex problems step by step.

## 🎆 Wins && 🔥 Challenges: 
**Wins:**
- Successfully implemented game logic for player turns, wins, and draws.
- Achieved a clean and user-friendly game interface.
- Developed a responsive layout that works well on different screen sizes.
- Used event delegation to handle multiple square clicks efficiently.

**Challenges:**
- Debugging the game logic to ensure proper detection of wins and draws.
- Managing the game state and transitions between rounds.
- Ensuring the game's responsiveness and compatibility with various browsers.

## 📝 Observations && ❓ Questions:
**Observations:**
- This project was a great opportunity to apply and reinforce JavaScript concepts learned in the module.
- Event delegation proved to be a valuable technique for handling multiple square clicks.
- Understanding the difference between the data model and DOM representation was crucial.

**Questions:**
- How can the game's code be further optimized or refactored for better performance?
- Are there any additional features or improvements that could enhance the game?

## 💡 Pseudocode: 
**Iterations:**

**Iteration 0: Game Setup**
- Create the game board as a 3x3 grid.
- Initialize player objects with their tokens, wins, and turn status.
- Display the current player's turn.

**Iteration 1: Player Turns**
- Add event listeners to each grid square for player moves.
- Toggle between players' turns after each move.
- Check for win conditions after every move.

**Iteration 2: Detecting Wins**
- Implement win condition checks for rows, columns, and diagonals.
- Display a message and update player wins when a win is detected.
- Reset the board for a new round after a win.

**Iteration 3: Handling Draws**
- Check for a draw condition when the board is full and no player has won.
- Display a draw message and reset the board for a new round.

**Iteration 4: User Interface**
- Style the game board and squares with CSS for a visually appealing interface.
- Make the game responsive for different screen sizes.
- Add animations and transitions for a polished look.

**Iteration 5: Game Reset**
- Implement automatic game resets after a win or draw.
- Update the current player for the new round.
- Allow players to start a new game at any time.

**Extensions (Optional):**
- Persist player data using local storage.
- Refactor the code to separate game logic and DOM manipulation into different files.
- Add additional features like customizable player names and game themes.

This pseudocode outlines the major iterations and goals for building the Tic Tac Toe game. Each iteration focuses on a specific aspect of the game's functionality and user experience. Optional extensions can be explored once the core game is implemented successfully.
