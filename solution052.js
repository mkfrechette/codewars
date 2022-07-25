/*Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"*/

function longest(s1, s2) {
    //take each string, create a set from each which will put only unique letters into it, turn into array
    let arr1 = [...new Set(s1.split(''))]
    let arr2 = [...new Set(s2.split(''))]
   
    //combine the arrays by looping through arr2 and pushing each value into arr1
    for(let i=0; i<arr2.length; i++){
      arr1.push(arr2[i])
    }
    //create a final array, use set to only have it hold unique letters
    //sort arr so all letters are alphabetical order, join back to a string
    let finalArr = [...new Set(arr1)].sort().join('')
    return finalArr
  }