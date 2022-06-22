//Given an array of integers, return a new array with each value doubled.

const maps = x => x.map(n => n*2)
//use map to loop through array (x) and double each number, pushing those numbers to the new array
//implicit return with arrow function

//P: an array of numbers, whole numbers, not negative
//R: each number in the array doubled, pushed to a new array
//E: [1, 2, 3] --> [2, 4, 6]
// [2,4,6] --> [4, 8, 12]
//[1,5,9,12] --> [2,10,18,24]