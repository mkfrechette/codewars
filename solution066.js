/*We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.*/


//create empty array to hold array
//loop through numbers 0 to n - 1
//push numbers to new array and return
function arr(N){
    let newArr = []
    for (let i = 0; i < N; i++){
      newArr.push(i)
    }
    return newArr
  }
  
  //P: a number, whole, never negative, could be empty
  //R: an array with the numbers 0 to N-1
  //E: arr(5) -> [0,1,2,3,4]
  //arr(3) -> [0,1,2]
  //arr(8) -> [0,1,2,3,4,5,6,7]