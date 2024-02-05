const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    orderDelivery({ starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address
    }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicuious pasta with ${ing1}, ${ing2} and ${ing3} `);
    }
};

  // copy array with spread oparator
//   const mainMenuCopy = [...restaurant.mainMenu];
//   const starterMenuCopy = [...restaurant.starterMenu];
//   const newMenu = [...restaurant.mainMenu , 'Ganucci'];
//   const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//   console.log(fullMenu); 

  // You can only use the spread oparator when building an arrray or pass values into a function


  //.reduce()
// const numbers = [3, 6, 2, 9, 1];
// const sum  = numbers.reduce((p, c) => {
//     console.log(`Previous ${p}`);
//     console.log(`Current ${c}`)
//     return p + c;
// }, 0);

// console.log(sum);


// const people = [
//     {
//         name: 'Dom Perry',
//         age: 35
//     },
//     {
//         name: 'Andrew Wilkson',
//         age: 47
//     },
//     {
//         name: 'Brian Walker',
//         age: 27
//     }
// ];

// const oldestAge = people.reduce((p, c) => {
//     if(c.age > p) {
//         return c.age;
//     }
//     return p
// }, 0);

// console.log(oldestAge);

// const add = function(...numbers) {
//     for(i = 0; i < numbers.length; i++){
//         let sum = 0; 
//         sum += numbers[i];
//         console.log(sum)
//     };
    
// }
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);


