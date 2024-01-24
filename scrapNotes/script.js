'use strict';

// alert('Hello world');

// console.log(this); 
//  DOM Window, Global object 

const calcAge = function(birthyear) {
    console.log(2023 - birthyear);
    console.log(this);
};
calcAge(1986);

const calcAgeArrow = birthyear => {
    console.log(2023 - birthyear);
    console.log(this);
};
calcAgeArrow(1986);

const person = {
    name: 'Rick Sanchez',
    birthyear: 1986,
    calcAge: function () {
        console.log(this);
    },
};

person.calcAge();

