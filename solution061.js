/*write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.*/

function stringy(size) {
    //create variable to hold string
    let str = ''
    //loop through size
    for(let i=1; i<=size; i++){
      //if i divided by 2 has a remainder of 1, the number is odd, concatenate str + 1
      if(i % 2 === 1){
        str = str + '1'
      }else{
        //else it is even, concatenate str + 0
        str = str + '0'
      }
    }
    return str
  }
  //P: an integer, whole number, never negative
  //R: a string of alternating 1's and 0's according to the size
  //E:a string with size 6 should return :'101010'.
  //with size 4 should return : '1010'.
  //with size 12 should return : '101010101010'.