/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer*/

function squareDigits(num){
    //create variable, turn given integer into a string
    //split the string by each number into an array
    //loop through and create a new array where each number in the original array is squared
    //join the new array of squared numbers into a string
    //return the string converted to a number 
      let squared = num.toString().split("").map(n => n**2).join('')
      return Number(squared)
    }
  
  //P: a number, whole number
  //R: return a number 
  