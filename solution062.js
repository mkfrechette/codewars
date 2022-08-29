/*Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.*/

function remove (string) {
    //if the string ends with an "!", remove it
    if(string.endsWith("!")){
      //create variable to store index of the last "!"
      let index = string.lastIndexOf('!')
      //return the string sliced from the beginning to the last "!"
      return string.slice(0,index)
      //otherwise return the original string
    }else{
      return string
    }
   
  }
  //P: string, never empty
  //R: the string with one exclamation point removed from the end
  //E:remove("Hi!") === "Hi"
  //remove("Hi!!!") === "Hi!!"
  //remove("!Hi") === "!Hi"