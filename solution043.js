/*Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).*/



function DNAStrand(dna){
  //split the string into an array
  let arr = dna.split("")
  //create variable to hold final array of complementary DNA
  let dnaArr = []
  //loop through the array and replace A with T, T with A, C with G, and G with C
  for(let i = 0; i < arr.length; i++){
    arr[i] === "A" ? dnaArr.push("T") : arr[i]
    arr[i] === "T" ? dnaArr.push("A") : arr[i]
    arr[i] === "C" ? dnaArr.push("G") : arr[i]
    arr[i] === "G" ? dnaArr.push("C") : arr[i]
  }
  //return the new array and join it into a string 
  return dnaArr.join('')
}
//P: a string, capital letters
//R: return the string with A replaced with T, T with A, C with G, and G with C
//E: "ATTGC" --> "TAACG"
//"GTAT" --> "CATA"