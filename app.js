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
const game = document.querySelector('#game'), 
      minNum = document.querySelector('.minNum'),
      maxNum = document.querySelector('.maxNum'), 
      guessBtn = document.querySelector('#guessBtn'), 
      message = document.querySelector('#message'), 
      guessInput = document.querySelector('#guessInput');


// Assign min, max to UI values 
minNum.textContent = min;
maxNum.textContent = max;

// Create Event listner for BTN

game.addEventListener('submit', getInputValue);

function getInputValue(e) {

  let guess = parseInt(guessInput.value); 

  setMessage(null, null)

   //   Validation
   if (guess === NaN || guess < min || guess > max) {
    setMessage(`Your guess is outside the games Min and Max range of
                    ${min} and ${max}, please try again`, 
                    'alert-danger')
   }else{
    console.log('guess fine');
   }

  console.log(guess);

  e.preventDefault(); 
}

function setMessage(userMessage, style) {

    if (userMessage === null && style === null ) {
        message.textContent = null; 
        message.className = 'alert'; 
        
    } else {
        message.textContent = userMessage; 
        message.classList.add(style);

    }

}