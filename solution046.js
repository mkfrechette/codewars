/*The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

*/

function openOrSenior(data){
    //create an array to store the strings of "Open" and "Senior"
    let output = []
    //loop through the data array
    for(let i = 0; i < data.length; i++){
      //if the first number in each nested array is 55 or older and the second number is 7 or above, push "Senior" into output
      if(data[i][0] >= 55 && data[i][1] > 7){
        output.push("Senior")
        //otherwise, push "Open" into output
      }else{
        output.push("Open")
      }
    }
    //return the new array of strings
    return output
  }
  //P: an array of nested arrays
  //R: return an array of strings, "Senior" for each member 55 or older with a handicap of at least 7, "Open" for everyone else
  //E: input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
  //output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]