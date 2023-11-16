'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0; 
let activePlayer = 0;

// Roll Dice
btnRoll.addEventListener('click', function () {
    const dice = Math.trunc(Math.random() * 6) + 1; 
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if(dice !== 1) {
        currentScore += dice; 
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else {
        activePlayer = activePlayer === 0 ? 1 : 0;
    }

    // 2 display dice 

    // 3 check check if dice is 1 
})