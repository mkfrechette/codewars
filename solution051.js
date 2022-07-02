/*Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise*/


//if employed is true and vacation is false, return true
//otherwise, return false
let setAlarm = (employed, vacation) => employed == true && vacation == false ? true : false
  
  //P: two booleans, true or false
  //R: return true if employed is true and vacation is false, else return false
  /*E:  setAlarm(true, true) -> false
        setAlarm(false, true) -> false
        setAlarm(false, false) -> false
        setAlarm(true, false) -> true*/


