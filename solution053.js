/*This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.*/

//create checkForFactor variable
//base and factor are parameters
//ternary, if base modulus factor is 0, return true, else return false
let checkForFactor = (base, factor) => base % factor === 0 ? true : false

//P: base is a whole number, non-negative. factor is a whole number, positive
//R: return true if factor is a factor of the base number, false if not
//E: 3 is a factor of 6 because 2*3 is 6
//4 is a factor of 12 because 4*3 is 12
//6 is a factor of 24 because 6*4 is 24