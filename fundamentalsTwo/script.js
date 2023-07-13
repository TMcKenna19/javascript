// Function Declaration, a function that can be used before its declared 
function calAge(birthYear) {
    return 2023 - birthYear;
}

console.log(calAge(1986));

// Function  Expression, a function value stored in a variable 
const calAge = function (birthYear) {
    return 2023 - birthYear;
};

console.log(calAge(1988));

// Arrow Function, quick one line functions. Has no this keyword 
const arrowAge = (birthYear) => 2023 - birthYear;
console.log(arrowAge(2013));


const untilRetirement = function (birthYear) {
    const age = 2023 - birthYear;
    const years = 65 - age;
    const retirement = `${years} year(s) until retirement`;
    const cheers = `How has retirement been treating you?`;

    if (years > 0) {
        return retirement;
    } else {
        return cheers;
    };

};

console.log(untilRetirement(1923));


// calling a function in a function 
const cutPieces = function (fruit) {
    return fruit * 4;
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

    return juice;
};

console.log(fruitProcessor(2, 3));

//Arrays 
const friends = ['Rick', 'Jerry', 'Morty'];
console.log(friends);

friends.push('Bird person');
console.log(friends);

//push to front of array
friends.unshift('Fart');
console.log(friends);

//remove
// friends.pop(); // last elemnet, no argumanet needed
const popped = friends.pop(); // a way to save popped value, could be used in a "undo" feature. 
console.log(friends);
console.log('popped', popped);

const shifted = friends.shift();
console.log(friends);
console.log('shifted', shifted);

console.log(friends.indexOf('Morty'));
console.log(friends.includes('Mr. Poopy Butthole')); // checks for value 

/**
 * Objects 
 */

const person = {
    firstName: 'Rick',
    lastName: 'Sanchez',
    job: 'Scientist',
    birthYear: 1954,
    friends: ['Morty', 'Mr Poopybutthole', 'Birdperson'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    }



};

console.log(person.calcAge());


let diceOne = Math.trunc(Math.random() * 6 + 1); // Math.random() * 6 then Math.trunc() chopps off the decimal


let diceTwo = Math.trunc(Math.random() * 6 + 1); // +1 to reach 6 


let roll = (diceOne + diceTwo);
console.log(`{${diceOne}, ${diceTwo}} rolled a ${roll}`);
