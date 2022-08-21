/*Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string)*/

//turn each integer into a number, add them together, turn sum into a string

let sumStr = (a,b) => String(Number(a) + Number(b))


//P: 2 integers as a string, whole numbers, string could be empty, num could be negative
//R: the sum of the 2 integers
//E:"4",  "5" --> "9"
//"34", "5" --> "39"
//"", "" --> "0"