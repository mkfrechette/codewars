/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/

function findShort(str){
    //split the string into an array
    //map through array and get the length of all the words
    //sort word length from lowest to highest
    //get first value in array
    return str.split(' ').map(word => word.length).sort((a,b) => a - b)[0]
  }
  //P: a string of words, never empty, always strings
  //R: return the length of the shortest word
  //E: "bitcoin take over the world maybe who knows perhaps" --> 3
  //"turns out random test cases are easier than writing out basic ones" --> 3
  //"Let's travel abroad shall we" --> 2
  
