/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421*/

function descendingOrder(n){
    //create variable to hold string
    //turn number into a string
    //split string into array of individual nums
    //sort numbers, will be lowest to highest
    //reverse and join into string
    //turn into number and return
    let str = String(n).split('').sort().reverse().join('')
    return Number(str)
  }
  //P: integer, always whole, always positive
  //R: return the number rearranged so the numbers within are from highest to lowest
  //E: 62537 -> 76532
  //3829 -> 9832
  //92837 -> 98732

