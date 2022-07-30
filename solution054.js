/*There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there*/

var number = function(busStops){
    //create empty array
    let finalNumber = []
    //loop through busStops
    for(let i=0; i<busStops.length; i++){
      //push number of people that got on the bus - people that got off at each stop into empty array
      finalNumber.push(busStops[i][0] - busStops[i][1])
    }
    //add numbers of people that remained on the bus together and return
    return finalNumber.reduce((acc,c) => acc+c, 0)
  }
  //P: an array of arrays, whole numbers, positive or 0
  //R: return the number of people left on the bus at the end
  //E: [10,0],[3,5],[5,8]]) -> 5
  //[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) -> 17