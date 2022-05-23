//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.


function find_average(array) {
    //P: create variable called average to hold the average of the array through reduce and divide by length
    let average = array.reduce((acc,c)=> acc+c, 0 )/array.length
    //conditional to specify if array is empty or full of 0's, return 0
    if(average === 0){
    return 0;
      }else{
        return average
      }
  }
  //P: array of numbers, whole numbers, +, could be empty
  //R: return average of array unless array is empty, then return 0
  //E: [1,1,1] -> 1
  //[1,2,3] -> 2