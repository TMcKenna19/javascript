'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5; 

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
        score++;
        document.querySelector('.score').textContent = score;

       
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

/**
 * [x] Select the element with "again" class and attach a clickHandler.
 * [] In the handler fucntion, restore initial values of the score and number variables.
 * [] Resote the initial conditions of the message, number, score and guess input feild. 
 * [x] restore the original backgorund color #222 and number with 15rem 
 */