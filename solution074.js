/*Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.*/

//loop through the array and create a new one with map that turns strings to numbers, return
let toNumberArray = (stringarray) => stringarray.map((el) => Number(el));

//P: an array of strings, the strings contain numbers, numbers could be floats, not negative
//R: the array with numbers not strings
//E: ["1", "2", "3"] to [1, 2, 3]
