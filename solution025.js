//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


//P: will it be a string of numbers? Array? Ever negative or floated values? Array
  //R: return not console log
  //E: squareSum([1,2,2]) -> 9
function squareSum(numbers){
    //square each number in array with a map creating a new array
    let newArr = numbers.map(n => n**2)
    //add each of the numbers in the new array together and return
    return newArr.reduce((acc, c) => acc + c, 0)
  }
  