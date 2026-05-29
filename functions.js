/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//2. Implement a function declaration called `search` that takes a paramaters animals array and a string called name
function search(animals, name) {
//Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
for (i = 0; i < animals.length; i++) {
if (animals[i].name === name) {

    return animals[i];
//Returns `null` if no animal with that name exists
} 
}
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//1. Write a function declaration called `replace` that takes 3 parameters, an Array of animals, a String representing  the name of an animal on which to perform a search, and an Object that represents the replacement animal.
    function replace(animals, name, replacement){ 
    for (let i = 0; i < animals.length; i++) {
    //If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
    if(animals[i].name === name) {
        return animals[i] = replacement;
    }
    //Otherwise do nothing.
    }
    }
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//1. Write a function declaration called `remove` that akes 2 parameters, an Array of animals, and a name of an animal
function remove(animals, name) {
    for (let i = 0; i < animals.length; i++) {
        //test if an animal with that name exists within the `animals` Array
        if(animals[i].name === name) {
        //- If an animal with that name exists within the `animals` Array, remove it.
        animals.splice(i, 1); // Removes exactly 1 item at index 'i'
            i--;
}
}
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. Write a function declaration called `add` that akes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
function add(animals, animal) {
//Checks that the animal Object has a `name` property with a length > 0.
//Checks that the animal Object has a `species` property with a length > 0.
//Has a **unique** name, meaning no other animals have that name.

if (!animal.name || animal.name.length === 0 || !animal.species || animal.species.length === 0) {
    return animals; // Reject if validation fails
}

// 2. Check that the name is unique across the array
for (let i = 0; i < animals.length; i++) {
    if (animals[i].name === animal.name) {
        return animals; // Reject because name already exists
    }
}

// 3. If all checks pass, add to the array
animals.push(animal);
return animals;
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}