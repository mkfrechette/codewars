/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F*/

//Pseudo Code

//split the string into two words in an array
//get the first letter from each of the words
//join together with a .
//make sure the characters are upper case

let abbrevName = name => name.split(' ').map(n => n[0]).join(".").toUpperCase()

//P: a string consisting of two words with a space between them, never an empty string, may be lower case
//R: return the first capital letter of each word with a period between them
//E: "Molly Kate" -> M.K
//"Lauren Elizabeth" -> L.E
//"Joanne Marie" -> J.M