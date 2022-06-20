/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.*/




function isIsogram(str){
    //make string all lower case
    //turn string into an array of letters
    //loop through array and if one character is equal to another, return false
    let lowerCaseArr = str.toLowerCase().split('')
    return !lowerCaseArr.some(function(value,index,array){
      return array.lastIndexOf(value)!=index
    })
  }
  //P: a string, could have lower or upper case, could be empty
  //R: return true if string is an isogram, false if not
  //E: "Dermatoglyphics" --> true
  //"aba" --> false
  //"moOse" --> false (ignore letter case)