


function printerError(s) {
    //turn string into array
    //filter through the array and put all characters n-z into the new array
    //get the length of the new array
    //get the length of the original array
    //put newArrLength/originalArrLength into a string via a template literal
  let newArr = s.split("")
  let newArrLength = newArr.filter(c => c>="n").length
  let originalArrLength = newArr.length
  return(`${newArrLength}/${originalArrLength}`)
  
  
}

//P: a string, always lower case letters, never empty, any characters a-z
//R: return the number of letters n-z / number of letters in the original array
//E: aaabbbzzz -> 3/9
//aaabbbxxxyyy -> 6/12
//aaaxxxyyyzzz -> 9/12