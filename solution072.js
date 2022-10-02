//Given a sequence of numbers, find the largest pair sum in the sequence.


    //loop through and sort array in ascending order
    //target the last two integers using slice
    //add nums together using reduce, return

    let largestPairSum = numbers => numbers.sort((a,b) => a - b).slice(-2).reduce((acc,c) => acc + c, 0)  
    
    //P: an array of numbers, whole numbers, maybe negative, minimum 2 integers in arr
    //R: the sum of the two largest integers in the array
    //E: [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
    //[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)