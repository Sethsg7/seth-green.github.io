// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
/*
I: Base, can be string or number.
O: Function that tests if the base is larger.
C
E
*/
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(base2){
      return base2 > base;
    }
    /*Base 2 comes from the function variable passed in later (
        var greaterThan2 = createGreaterThanFilter(2);
expect(greaterThan2).to.be.instanceof(Function);
expect(greaterThan2(1)).to.be.false;
expect(greaterThan2(3)).to.be.true;*/
    // YOUR CODE ABOVE HERE //
  }





/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
        return function(base2){
            return base2 < base;
          }
    
    // YOUR CODE ABOVE HERE //
}






/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
 function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    return function(letter) {
      
      if (letter[0].toLowerCase() === startsWith.toLowerCase()) {
        return true
      } else {
        return false
      }
    }
      // YOUR CODE ABOVE HERE //
  }






/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
 function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    return function(letter) {
      return (letter[letter.length - 1].toLowerCase() === endsWith[endsWith.length - 1].toLowerCase())
  
    }
    // YOUR CODE ABOVE HERE //
  }
  








/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */

 function modifyStrings(strings, modify) {
  // YOUR CODE BELOW HERE //
  var collection = []

  strings.forEach(function(number) {
    collection.push(modify(number));
  })

  return collection
  // YOUR CODE ABOVE HERE //
}








/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */

 function allStringsPass(strings, test) {
  for (var i = 0; i < strings.length; i++) {
    if (!test(strings[i][0])) {
      return false;
    }
  }
  return true;
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
