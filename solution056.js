/*You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.*/



//P: arrow function inside variable check
//ternary, if a includes x, return true, else return false
let check = (a, x) => a.includes(x)? true : false

//P: an array and a value, either a number or string
//R: true if a contains x, else return false
//E: [1,2,3,4,5] -> 5 -> true
//["a", "b", 6, 7] -> "b" -> true
//[1,2,"x","y", 7] -> 6 -> false