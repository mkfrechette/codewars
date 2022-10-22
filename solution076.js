//Given an array/list [] of integers , Find the product of the k maximal numbers

function maxProduct(numbers, size) {
  //sort the numbers array from lowest to highest, slice "size" amount off the end of array
  let maxNums = numbers.sort((a, b) => a - b).slice(-size);
  //return the product of the numbers multiplied
  return maxNums.reduce((acc, c) => acc * c, 1);
}
//P:an array of numbers, always whole, can be negative or 0, never empty, and a whole non-negative integer
//R: return the product of the k maximal numbers
//E: maxProduct ({4, 3, 5}, 2) ==>  return (20)
//maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
//maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
