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
var animal = {};

animal.species = 'Cat';

animal['name'] = 'Misty';

animal.noises = [];

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];

noises[0] = 'meow';

noises.push('hiss');

noises.unshift('purr');

noises.push('whine');

console.log(noises.length);

console.log(noises)




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;

noises.unshift('roar');

console.log(animal)


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *Using dot notation or bracket notation.
 * 2. What are the different ways of accessing elements on arrays?
 *Using bracket notation.
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
var animals = [];

animals.push(animal);

var duck = {species: 'Duck', name: 'Jerome', noises: ['quack',
'honk', 'sneeze', 'woosh'] }

animals.push(duck);

var bird = {species: 'Bird', name: 'Betty', noises: ['tweet', 
'chirp'] }

var snake = {species: 'Snake', name: 'James', noises: ['hiss',
'rattle'] }

animals.push(bird);
animals.push(snake);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Array would hold list of friends easily and is easily editable.
var friends = [];

function getRandom(arr) {
  var randomFriend = Math.floor(Math.random()*arr.length);
  return randomFriend;
}

friends.push(animals[getRandom(animals)].name);


animals[0]['friends'] = friends;




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