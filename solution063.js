/*You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.*/

//split the string into an array separated by spaces in the string
//reverse the array, join into a string by spaces
//ignore uncessary whitespace by trimming the end and beginning
let reverse = string => string.split(" ").reverse().join(' ').trim()
//P: string, never empty
//R: string reversed by word not letter
//E:"Hello World" --> "World Hello"
//"Hi There." --> "There. Hi"