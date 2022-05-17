//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//PREP
//P: string, never an empty string
//R: return
//E:
function reverseWords(str) {
    //P:
    //split each word in the string into an array by whole word
    let arr = str.split(' ')
    //map through the array
    //split each word in the array into single letters in nested arrays
    //reverse the letters
    //join the letters back together  into one array
    //join the array into a string divided by spaces
    return arr.map(x => x.split('').reverse().join('')).join(' ')
  }

  reverseWords('The quick brown fox') //ehT kciuq nworb xof
  reverseWords('Hello world') //olleH dlrow
  reverseWords('Atlas is cute') //saltA si etuc