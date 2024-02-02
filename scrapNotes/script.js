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

const resturant = {
    Name: 'Mario Italiano',
    Location: '230 Pike st Marietta, OH 45750',
    categories: ['Italian', 'Pizza', 'Vegitarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruchetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risoto'],
    order: function( starterIndex, mainIndex ){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
}

// console.log(resturant.order(0, 2));
