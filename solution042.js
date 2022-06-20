/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.*/





function sumTwoSmallestNumbers(numbers) {  
  //sort the array from lowest number to highest, store in a variable
  //return the sum of the first two nums in the array
  let sortedArr = numbers.sort((a,b) => a - b)
  return sortedArr[0] + sortedArr[1]
}
//P: array of numbers, not floated or negative
//R: sum of the two lowest numbers in the array
//E: [19, 5, 42, 2, 77] -> 7
//[10, 343445353, 3453445, 3453545353453] -> 3453455.