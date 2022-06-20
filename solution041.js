//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

/*Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.*/




function solution(number){
    //create empty array to store multiples of 3 or 5 in
    let totalCount = []
    //loop through the number starting at 1 and going until counter is less than given number
    for(let i = 1; i < number; i++){
      //if the remainder of the counter divided by 3 is 0, push i into the array
      if(i % 3 === 0){
        totalCount.push(i)
        //if the remainder of the counter divided by 5 is 0, push i into the array
      }else if(i % 5 === 0){
        totalCount.push(i)
      }
    }
    //loop through the array and add each number in it together to get the sum
    return totalCount.reduce((acc,c) => acc + c, 0)
  }
  //P: a number, whole number, could be negative 
  //R: return the sum of all multiples of 3 or 5 below the given number
  //E: 10 -> 23
  //15 -> 45