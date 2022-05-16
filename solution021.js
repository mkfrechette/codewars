//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

let solution = (str, ending) => str.endsWith(ending)

//PREP
//Parameters
//Returns
//Examples
//Pseudo Code

//A string and the end of a string, if ending is the same as the end of str return true
//will the string always be a string? Will it ever be an empty string?Will it ever be a string with a single character? Any other things that might be passed in I haven't clarified?
//P: str, ending, not empty string, not a single character
//I want to clarify what I'm returning to you. Is it okay if I print to console or do you actually want a return?
//R: return
//Mind if I give you an example before we jump into solving this problem? I'm going to go ahead an set up my function here, I'm going to call this solution. I know that I'm taking in two strings that will never be empty or a single character. I'm going to call my parameters str and ending, and I'm going to set up some test cases.

//Pseudo Code
function solution2(str, ending){
    //A way to identify what a string ends with
    //return true if str ends with ending
    str.endsWith(ending)
}

//I'm going to call solution and I'm going to pass in a string called "string" and an ending of "ng". I'll call it again passing in "Atlas" and "las", and again with "trees" and "ee". Does this look correct?

solution2("string","ng")//Should return true
solution2("Atlas", "las")//Should return true
solution2("trees", "ee")//Should return false