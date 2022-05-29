//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    //create variable to store num of vowels
    let vowelsCount = 0;
    //create array of vowels
    let vowels = ["a","e","i","o","u"]
    //loop through each character in the string
    for(let char of str){
      //if the char from the string includes one of the vowels in the array, increase vowelCount
      if(vowels.includes(char)){
        vowelsCount++
      }
    }
    //return
   return vowelsCount
  }
  
  //P: string, never empty
  //R: return number of vowels in string
  //E: "abcde" --> 2
  //"Molly Kate" --> 3
  //"Atlas" --> 2