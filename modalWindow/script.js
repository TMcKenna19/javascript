'use strict';
    /** put classes into variable */
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal =  function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for(let i = 0; i < btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click', openModal);
};

    /** close modal with x DRY declare closeModal in event listener*/
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


// old repetitive
// closeModal.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function() {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });