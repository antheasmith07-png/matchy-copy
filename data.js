/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create an empty object called animal
var animal = {};
//use dot notation to give animal a property of species and assign it
animal.species = 'Reptile';
//use bracket notation to give animal a property of name and assign it
animal["name"] = 'Alligator';
//use either notation and give animal a property of noises assign it to an empty array
animal.noises = [];
//print animal to the console
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//1. create a variable called noises and assign to empty array
var noises = [];
//2. Use bracket notation to assign variable noises it's first string value
noises[0] = 'Hiss';
//3. Using an array function add another noise to the end of noises.
noises.push("Click");
//6. add element to noises using unshift method
noises.unshift('Roar');
//7. use bracket notation to add another element to noises
noises.push("Slither");
//8.`console.log` the length of `noises`
console.log(noises.length);
//9.`console.log` the last element in `noises` again without hard coding the index.
console.log(noises.length - 1);
// 10. `console.log` the whole array.
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//1. Using bracket notation assign the noises variable to the animal object 
animal["noises"] = noises;
//2. using any method add another noise to the animal noise property
noises[4] = 'Growl';

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * //Through Bracket and Dot notation

 * //2. What are the different ways of accessing elements on arrays?
 * //Bracket Notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//1. Create a variable named animals and assign to empty array
var animals = [];
//2. Push animal we created to the animals array
animals.push(animal);
//3.log to console
console.log(animals);
//4.create a variable called Duck and assign it data
var duck = {
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh']
}
//5. Push duck to animals
animals.push(duck);
//6. log to console
console.log(animals);
//7. Create two more animals and assign it to the animals variable
var bird = {
  species: 'bird', name: 'Beaker', noises: ['tweet', 'chirp', 'call', 'flap']
}
var dolphin = {
  species: 'dolphin', name: 'Dory', noises: ['whistle', 'click', 'laugh', 'woosh']
}
animals.push(bird);
animals.push(dolphin);
//8. log to console
console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//1. I choose an array to make a list of friends
//2. Array is used to create a list of data inputs
//3. Create a friend variable and assign to an empty array
var friends = [];
//5. create a getRandom function that uses the math.random method to get a random index of the input array
function getRandom(arr) {
var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
//6. Using this function get a random animal and add it's name to friends
var newFriend = getRandom(animals);
friends.push(newFriend.name);
//7. log to console
console.log(friends)
//8. Use Bracket Notation to add the friends property to the animals
animals["friends"] = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}