/*Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.*/

let sortByLength = array => array.sort((a,b) => a.length - b.length)
  

//use sort method on array with (a,b)

//P: array of strings, strings all different lengths, empty strings possible
//R: an array with the same strings sorted by length shortest to longest
//E: ["Hi", "Atlas", "Cute"] -> ["Hi", "Cute", "Atlas"]