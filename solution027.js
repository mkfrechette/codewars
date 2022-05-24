//You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

//The returned value must be a string, and have "***" between each of its letters.

//You should not remove or add elements from/to the array.


function twoSort(arr) {
    //sort the array alphabetically
    //shift the first value off and turn it into a string
    //split the string into individual characters in an array
    //join the characters into a string with *** between each char
    return arr.sort().shift().toString().split('').join('***')
  
  }
  //P: an array filled with strings, not empty strings
  //R: return the first value in the sorted array, with *** between each letter
  //E:  ["cat", "dog", "giraffe", "zebra"] -> "c***a***t"
  //["margarita", "beer", "wine", "white russian"] -> "b***e***e***r"