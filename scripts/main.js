let playerSelect;
let computerSelect;
let winCounter = 0;

alert(game());

/* randomly returns rock, paper, or scissors */
function computerPlay() {   
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
/* function to play single round using 2 inputs:  playerselection, computerselection
returns string in format "You lose! Paper beats Rock"
case insensitive */

function playRound(playerSelect, computerSelect) {
    playerSelect = prompt("Rock, Paper, or Scissors?").toLowerCase(); /* ask user for their selection */
    computerSelect = computerPlay();
    alert("You picked " + playerSelect + ". Computer picked " + computerSelect + "."); /* test line */

    if (playerSelect == "rock") {
        if (computerSelect == "rock") {
            return "Tie game!";
        }
        else if (computerSelect == "paper") {
            return "You lose. " + capitalize(computerSelect) + " beats " + playerSelect + ".";
        }
        else if (computerSelect == "scissors") {
            winCounter++;
            return "You win! " + capitalize(playerSelect) + " beats " + computerSelect + ".";
        }
    }
    else if (playerSelect== "paper") {
        if (computerSelect == "rock") {
            winCounter++;
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
            winCounter++;
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


/* new function using previous function inside it to run 5 round game, keep score, return winner at end */

function game() {
    for (i=0; i<5; i++) {
    alert(playRound(playerSelect, computerSelect));
    alert(winCounter + " wins so far.");
    }
    if (winCounter<3) {
        return "You lost the game."
    }
    else {
        return "You won the game."
    }
}

/* function to capitalize first letter in a string */
function capitalize(string) {
    return string[0].toUpperCase()+ string.slice(1);
}




/*use console.log to display results of each round and end winner */

