// GAME FUNCTION

// Player must guess a number between a min and max
// Player gets a certain amount of guesses
// Notify player of number of guesses remaining
// Notify the player of the correct answer if Loose 
// Let Player choose to play again

// Games values
let min = 1, 
    max = 10,
    winningNum,
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

   const winningNum = Math.floor(Math.random()*max);

   console.log(winningNum);
  
    let guess = parseInt(guessInput.value); 

   //Reset message 
  setMessage(null, null)

   //   Validation
   if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Your guess is outside the games Min and Max range of
                    ${min} and ${max}, please try again`, 
                    'alert-danger')
   }
   else if(guess === winningNum){
    setMessage(`Your guess of ${guess} was correct!!`, 
                    'alert-success')
   }else if(guessesLeft) {
    setMessage(`Your guess of ${guess} was incorrect, you have ${guessesLeft} guesses left`, 
                    'alert-warning')
    guessesLeft = guessesLeft - 1; 
    console.log(guessesLeft);
   }else{
    setMessage(`You've run out of guesses :(`, 
                    'alert-secondary')
   }

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