/*The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.*/

let cockroachSpeed = s => Math.floor(s / 0.036)

//find formula for km per hour to cm per second -> cm/s = km/h ÷ 0.036
//speed in km per hour is argument
//return speed in cm per second
//implicit return with arrow function
//Math.floor() to round down speed in cm to whole integer

//P: an integer, never negative
//R: speed in cm per second
//E: 1.08 --> 30