/*Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

*/

function friend(friends){
    //filter through the list of names and put any name with a length of 4 into the new array, return array
    return friends.filter(name => name.length === 4)
  }
  //P: an array of strings, could be empty, could be any length
  //R: an array with the names of each string that has a length of 4
  //E:["Ryan", "Kieran", "Mark"] -> ["Ryan", "Mark"]
  //["Ryan", "Jimmy", "123", "4", "Cool Man"]) -> ["Ryan"]