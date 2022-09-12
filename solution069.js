/*Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0*/

function sumOfDifferences(arr) {
    let descending = arr.sort((a,b) => b - a)
    let newArr = []
    for(let i=0; i < descending.length - 1; i++){
      let subtracted = newArr.push(arr[i] - arr[i + 1])
    }
    return newArr.reduce((acc,c) => acc + c, 0)
  }