console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log('Testing the greeting', helloName('Arnold'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(
  'Here we test some addition, 6 + 5 should give us 11',
  addNumbers(6, 5)
);

// 4. Function to multiply three numbers & return the result
function multiplyThree(numberOne, numberTwo, numberThree) {
  return numberOne * numberTwo * numberThree;
}
console.log('Multiplying 5, 21, and 13 gives us ', multiplyThree(5, 21, 13));
// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log('22 is positive: ', isPositive(22));
console.log('-1 is a positive: ', isPositive(-1));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length > 0) {
    const last = array.slice(-1)[0];
    return last;
  } else {
    return undefined;
  }
}
console.log(
  'The last number is 4. The value we return is: ',
  getLast([2, 5, 6, 5, 4])
);
console.log('This array is empty so we return the value of: ', getLast([]));
// console.log('The last word should be waffles: ' , getLast(['never', 'eat', 'soggy', 'waffles']));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false; // Return false after the loop if value is not found
}
console.log('Is the value of 23 in my array?', find(23, [34, 56, 23, 44])); // returns true
console.log('Is the value of 23 in my array?', find(23, [34, 56, 99, 44])); // returns false

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string.charAt(0)) {
    return true;
  } else {
    return false;
  }
}

console.log('Does this string start with a? ', isFirstLetter('a', 'Does this string start with a'));
console.log('Does this string start with D? ', isFirstLetter('D', 'Does this string start with a'));



// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  for (let i=0; i < array.length; i++){
    sum += array[i];
  }
  // TODO: loop to add items
return sum
  // TODO: return the sum
}
console.log('The sum of 4+5+99+-22 is ', sumAll([4,5,99,-22]));
console.log('The sum of 1+2+3+-5 is ', sumAll([1,2,3,-5]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {}

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
