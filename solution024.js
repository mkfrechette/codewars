//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
    //conditional 
    if(n > 0 && m > 0){
      //if both numbers are positive return num of classmates * num of pages
      return n*m
      //if either number is negative return 0
    }else{
      return 0
    }
  }
  
  //P: n is number of classmates, m is number of pages, can be positive or negative integers, never floated
  //R: return 0 if either is a negative number
  //E: paperwork(5,5) -> 25
  //paperwork(-5,5) -> 0