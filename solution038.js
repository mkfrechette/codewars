/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.*/

function XO(str) {
    //turn string to lower case, split into an array, filter so array holds only x's, store in variable x
    //turn string to lower case, split into an array, filter so array holds only o's, store in variable o
    //if the length of x is the same as the length of o, there are equal x's and o's, return true
    //if neither array has any x's or o's, return true
    //otherwise there are not equal x's and o's, return false
      let x = str.toLowerCase().split('').filter(c => c == "x")
      let o = str.toLowerCase().split('').filter(c => c == "o")
      if(o.length === x.length){
        return true
      }else if(o.length == 0 && x.length == 0){
               return true
      }else{
        return false
      }
      
      
  }
  //P: A string, any capitalization, any char
  //R: return true if number of x's is same as number of o's, including no x's or o's. return false if number is not the same
  //E: XO("ooxx") => true
  //XO("xooxx") => false
  //XO("ooxXm") => true