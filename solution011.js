//You get an array of numbers, return the sum of all of the positives ones.

let positiveSum = arr => arr.filter(n => n > 0).reduce((a,c) => a + c, 0)
