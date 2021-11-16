function computerPlay(){    /* randomly returns rock, paper, or scissors */
    let computerPick = Math.floor(Math.random()* 3) +1;
    if (computerPick==1) {
        return "Rock";
    }
    else if (computerPick==2) {
        return "Paper";
    }
    else if (computerPick==3) {
        return "Scissors";
    }
}
    alert(computerPlay());
    
    
    


/* play single round using 2 inputs:  playerselection, computerselection
returns string in format "You lose! Paper beats Rock"
case insensitive */

/* new function using previous function inside it to run 5 round game, keep score, return winner at end */

/*use console.log to display results of each round and end winner */

/* use prompt() to get input
 */