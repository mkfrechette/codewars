/*JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]*/

// use the filter method to filter out odd numbers using modulus, return
let getEvenNumbers = (numbersArray) =>
  numbersArray.filter((el) => el % 2 === 0);

//P: an array of numbers, always positive and whole
//R: the array with only even numbers
//E:[2,4,5,6] -> [2,4,6]
