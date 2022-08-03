/*You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.*/



function getAge(inputString){
    //get the first character from the string, turn it into a number, and return it
      return Number(inputString.charAt(0))
    }
    //P: a string, always starts with a number
    //R: return the age as an integer
    //E: "6 years old" --> 6
    //"4 years old" --> 4