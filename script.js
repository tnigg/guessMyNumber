'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

//refresh the game
document.querySelector('.again').addEventListener('click', function () {
    displayMessage("Start guessing...");
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = "15rem";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = "#222";
});

// get the player guess
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage("No Number! Try again");
    } else if (guess === secretNumber) { //player guess is correct        
        displayMessage("Correct number!");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) { // player guess is wrong
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

