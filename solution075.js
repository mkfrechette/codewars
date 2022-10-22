/*To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.*/


function multiplyAll(arr){
    //return function that takes an integer as argument
    return function multiplyByInt(int){
      //return a new array using map on the existing array to multiply each integer by the given integer
      return arr.map(x => x*int)
    }
  }
  //P: an array of numbers, always whole, never negative
  //R: return a function that takes the original array and multiplies each element by a given integer
  //E: multiplyAll([1, 2, 3])(2) = [2, 4, 6];