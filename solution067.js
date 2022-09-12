/*Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.*/

//loop through a and square each number, put into new array with map, reduce to add new nums together, store in a variable
//loop through b and cube each number, put into new array with map, reduce to add new nums together, store in a variable
//use ternary, if the reduced a is greater than reduced b, return true, else return false

function arrayMadness(a, b) {
    let arr1 = a.map(num => num ** 2).reduce((acc,c) => acc + c, 0)
    let arr2 = b.map(num => num ** 3).reduce((acc,c) => acc + c, 0)
    return arr1 > arr2 ? true : false
  }
  //P: two arrays of integers, never empty, whole numbers, never negative
  //R: return true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b
  //E: arrayMadness([4, 5, 6], [1, 2, 3]); // returns true