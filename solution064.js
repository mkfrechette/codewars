/*A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.*/

// make sure the line input is a string
//if line reversed is equal to line, return true else return false
//have to split line into array of letters/numbers to use reverse method, then join into a string
let isPalindrome = line => String(line.split('').reverse().join('')) === String(line) ? true : false

//P: a string or number, if its a num convert to string
//R: whether the string is a palindrome true or false
//E:"anna"   ==> true
/*"walter" ==> false
12321    ==> true
123456   ==> false*/
