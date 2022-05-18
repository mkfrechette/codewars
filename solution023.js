//Create a function with two arguments that will return an array of the first (n) multiples of (x).

//Assume both the given number and the number of times to count will be positive numbers greater than 0.

//Return the results as an array (or list in Python, Haskell or Elixir)

function countBy(x, n) {
    //create an empty array to hold final result
    let z = [];
    //create a for loop with i = 1 as initialization, i<=n; i++
    for(let i = 1; i <= n; i++){
      //push i*x into the empty array
      z.push(i*x)
    }
    //return the array
    return z;
  }
  
  //P: two numbers, +, whole numbers
  //Return not console log
  //E: countBy(2,6) [2,4,6,8,10,12]
  //countBy(3,4) [3,6,9,12]