// Function Declaration, a function that can be used before its declared 
function calAge(birthYear){
    return 2023 - birthYear;
}

console.log(calAge(1986));

// Function  Expression, a function value stored in a variable 
const calAge = function(birthYear) {
    return 2023 - birthYear;
};

console.log(calAge(1988));

// Arrow Function, quick one line functions. Has no this keyword 
const arrowAge = (birthYear) => 2023 - birthYear;
console.log(arrowAge(2013));


const untilRetirement = function(birthYear) {
    const age = 2023 - birthYear; 
    const years = 65 - age;
    const retirement = `${years} year(s) until retirement`;
    const cheers = `How has retirement been treating you?`;

    if(years > 0) {
        return retirement;
    }else {
        return cheers;
    };

};

console.log(untilRetirement(1923));


// calling a function in a function 
const cutPieces = function(fruit) {
    return fruit * 4; 
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

    return juice;
};    

console.log(fruitProcessor(2,3));
 