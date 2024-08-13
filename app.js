// Exercise 1

// Use `.map()` to iterate over the following array:

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const nums2 = nums.map((currentElement) => {
    return currentElement * 2;
})

console.log('exercise 1', nums2)



// Exercise 2
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const [firstPizzaToppings, secondPizzaToppings] = pizzaToppings;

console.log('exercise 2', firstPizzaToppings, secondPizzaToppings)


// Exercise 3
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here
const { make, model} = car;

console.log('exercise 3', make, car.model )



// Exercise 4
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings2 = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const controversialPizzaToppings = [...pizzaToppings2];

console.log('exercise 4',controversialPizzaToppings)


// Exercise 5
// Duplicate the following object and spread its values into a new variable `myCar`.

const Newcar = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
  
const myCar = { ...Newcar };

myCar.model = 'q7'

console.log('exercise 5', 'Newcar', Newcar, 'myCar', myCar)


// Exercise 6

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

const usernameVar = 'username'
const userProfile = {
    [usernameVar]: 'Rodney'
}

console.log('exercise 6', userProfile)



// Exercise 8

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function describe(noun, adjective) {

    noun = noun || 'cat';
    adjective = adjective || 'white';
    
    console.log(`The ${noun} is ${adjective}.`);
  }

describe();

// Exercise 9

// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

console.log(pizza === 'tasty' ? 'yum' : 'yuck');

// Your code here

// Exercise 10

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig || 'en';
// Log the result
console.log('Language setting:', LANG);


// Exercise 11

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
  };
  
  let cat; // Your code here
  
  console.log(cat?.age);
  
