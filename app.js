/*
GAME FUNCTION:
- Player must guess a number between a min and a max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lost
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
    // Turn guess into number from string
    let guess = parseInt(guessInput.value);

    // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if(guess === winningNum){
        // Game Over - Won
        gameOver(true, `${winningNum} is correct`);
    } else {
        // Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0){
            // Game Over - lost
            gameOver(false, `Game Over, ${winningNum} was correct answer`);
        } else {
            // Game continues - answer wrong
            // Change border color
            guessInput.style.borderColor = 'red';

            // Clear input
            guessInput.value = '';
            // Set message
            setMessage(msg);
        }
    }
});

// Game Over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    message.style.color = color;
    // Set message
    setMessage(`${winningNum} is correct`, color);
}


// Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}





























