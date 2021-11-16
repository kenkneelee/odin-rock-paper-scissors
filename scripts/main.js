function computerPlay() {    /* randomly returns rock, paper, or scissors */
    let computerPick = Math.floor(Math.random() * 3) + 1;
    if (computerPick == 1) {
        return "rock";
    }
    else if (computerPick == 2) {
        return "paper";
    }
    else if (computerPick == 3) {
        return "scissors";
    }
}

let playerSelect = prompt("Rock, Paper, or Scissors?").toLowerCase(); /* ask user for their selection */
let computerSelect = computerPlay();

alert(playerSelect + " " + computerSelect); /* test line */
alert(playRound(playerSelect, computerSelect));

/* play single round using 2 inputs:  playerselection, computerselection
returns string in format "You lose! Paper beats Rock"
case insensitive */

function playRound(playerSelect, computerSelect) {

    if (playerSelect == "rock") {
        if (computerSelect == "rock") {
            return "Tie game!";
        }
        else if (computerSelect == "paper") {
            return "You lose. " + capitalize(computerSelect) + " beats " + playerSelect + ".";
        }
        else if (computerSelect == "scissors") {
            return "You win! " + capitalize(playerSelect) + " beats " + computerSelect + ".";
        }
    }
    else if (playerSelect== "paper") {
        if (computerSelect == "rock") {
            return "You win! "  + capitalize(playerSelect) + " beats " + computerSelect + ".";
        }
        else if (computerSelect == "paper") {
            return "Tie game!";
        }
        else if (computerSelect == "scissors") {
            return "You lose. "  + capitalize(computerSelect) + " beats " + playerSelect + ".";
        }
    }
    else if (playerSelect=="scissors"){
        if (computerSelect == "rock") {
            return "You lose. "  + capitalize(computerSelect) + " beats " + playerSelect + ".";
        }
        else if (computerSelect == "paper") {
            return "You win! "  + capitalize(playerSelect) + " beats " + computerSelect + ".";
        }
        else if (computerSelect == "scissors") {
            return "Tie game!";
        }
    }
    else {
        return "Invalid option!";
    }
}

function capitalize(string) {
    return string[0].toUpperCase()+ string.slice(1);
}



/* new function using previous function inside it to run 5 round game, keep score, return winner at end */

/*use console.log to display results of each round and end winner */

/* use prompt() to get input
 */