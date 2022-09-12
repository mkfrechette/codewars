/*Find Mean
Find the mean (average) of a list of numbers in an array.*/

//add all array nums together by using reduce, then divide by the length of the array
//arrow function for implicit return
let findAverage = nums => (nums.reduce((acc, c) => acc + c, 0)/nums.length)
//P: array of numbers, whole, never negative or empty
//R: the mean of the array
//E: [1,3,5,7] -> 4