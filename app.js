// GAME FUNCTION

// Player must guess a number between a min and max
// Player gets a certain amount of guesses
// Notify player of number of guesses remaining
// Notify the player of the correct answer if Loose 
// Let Player choose to play again

// Games values
let min = 1, 
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.getElementById('game'), 
      minNum = document.querySelector('.minNum'),
      maxNum = document.querySelector('.maxNum'), 
      guessBtn = document.getElementById('guessValue'); 

