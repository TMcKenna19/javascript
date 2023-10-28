'use strict';
    /** put classes into variable */
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const openModal = document.querySelectorAll('.show-modal')

for(let i = 0; i < openModal.length; i++){
    openModal[i].addEventListener('click', function() {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

    /** close modal with x  */
closeModal.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

    /** click outside modal close */
overlay.addEventListener('click', function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
