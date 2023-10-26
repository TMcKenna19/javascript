'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5; 
let highScore = 0; 

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    /**  no input  */
    if(!guess) {
        document.querySelector('.message').textContent = '🚫 Guess a Number! 🚫';

        /**  player wins */
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

       
        /** guess too high */
    } else if (guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'GAME OVER. YOU LOSE!';
            document.querySelector('.score').textContent = 0;
        }
        
        /** guess too low */
    } else if (guess < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'GAME OVER. YOU LOSE!';
            document.querySelector('.score').textContent = 0;
        }
    }

});

/** Again button  */
document.querySelector('.again').addEventListener('click', function() {
    score = 5;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';   
})
