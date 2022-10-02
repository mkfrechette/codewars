/*Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.*/

"use strict";
//create a new array with all sub array elements concatenated using the flat method
//sort through the new array to organize numbers from lowest to highest
let flattenAndSort = array => array.flat().sort((a,b) => a - b)

//P: an array with nested arrays of integers, or empty arrays
//R: return each element in the array sorted from lowest to highest
//E: [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]] -> [1, 2, 3, 4, 5, 6, 7, 8, 9]