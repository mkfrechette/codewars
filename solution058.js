/*Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).*/

function powersOfTwo(n){
    //create empty array
    //loop through numbers less than or equal to n
    //push 2**i into the empty array as many times as loop runs
    let final = []
    for(let i=0; i<=n; i++){
      final.push(2**i)
    }
    return final
  }
  //P: a number, not negative, always whole
  //R: a list of all the powers of 2 with the exponent ranging from 0 to n
  //E: n = 0  ==> [1]        # [2^0]
  //n = 1  ==> [1, 2]     # [2^0, 2^1]
  //n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
  