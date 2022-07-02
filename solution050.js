/*Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"*/

const rps = (p1, p2) => {
    //if player1 beats player2, return "Player 1 won!"
    if( p1 == "rock" && p2 == "scissors" || 
        p1 == "scissors" && p2 == "paper" || 
        p1 == "paper" && p2 == "rock"){
      return "Player 1 won!"
      //if player1 and player2 have the same answer, return "Draw!"
    }if(p1 == p2){
      return "Draw!"
      //if player1 didnt win and it isnt a draw, player2 won
    }else{
      return "Player 2 won!"
    }
  };
  //P: player1 and player2, two strings, either "rock" "paper" or "scissors"
  //R: return which player won
  //E:"scissors", "paper" --> "Player 1 won!"
    //"scissors", "rock" --> "Player 2 won!"
    //"paper", "paper" --> "Draw!"