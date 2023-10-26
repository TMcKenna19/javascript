'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5; 
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value); //gets Number() from .guess feild value

        /**  no input  */
    if(!guess) {
        displayMessage('🚫 Guess a Number! 🚫');
        
        /**  player wins */
    } else if (guess === secretNumber) {
        displayMessage('🎉 Boom Shakalaka!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        /** guess incorrect */
    } else if (guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? '⬆️ Too High ⬆️' : '⬇️ Too Low ⬇️');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('GAME OVER. YOU LOSE!')
            document.querySelector('.score').textContent = 0;
        }
    } 
});

    /** Again button  */
document.querySelector('.again').addEventListener('click', function() {
    score = 5;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';   
})
