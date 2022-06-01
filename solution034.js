/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.*/

function highAndLow(numbers){
    //create variable, split string into array, sort array from lowest number to highest number
    let newArr = numbers.split(' ').sort((a,b) => {return a-b})
    //return template literal with last number in array space first number in array
    return `${newArr[newArr.length - 1]} ${newArr[0]}`
  }
  //P: a string of numbers separated by a space, string will never be empty
  //R: return a string of the highest number and the lowest number, separated by a space
  //E: "1 3 2" --> "3 1"
  //   "-3 -6 5 9" --> "9 -6"