const inputs = document.querySelectorAll('input');
const text = document.querySelector('text');
const score = document.querySelector('score');


let playerSelect;
let computerSelect;
let winCounter = 0;
let loseCounter = 0;

//typewriter effect on title
var i = 0;                          
var txt = 'Choose your Pokémon!';
var speed = 100;

function typeWriterTitle() {
    if (i < txt.length) {
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriterTitle, speed);
    }
}

document.onload = typeWriterTitle(); //

inputs.forEach((input) => {     //for each button, add event listeners
    input.addEventListener('click', () => {
        document.getElementById('text').textContent = (playRound(input.id, computerPlay()));
        document.getElementById('score').textContent = winCounter;
        document.getElementById('aiscore').textContent = loseCounter;


        if (winCounter >= 5) {
            document.getElementById('text').textContent = "You win the game! Choose again to start a new game.";
            winCounter=0;
            loseCounter=0;
            document.getElementById('score').textContent = winCounter;
            document.getElementById('aiscore').textContent = loseCounter;
        }

        if (loseCounter >= 5) {
            document.getElementById('text').textContent = "You lose the game. Choose again to start a new game.";
            winCounter=0;
            loseCounter=0;
            document.getElementById('score').textContent = winCounter;
            document.getElementById('aiscore').textContent = loseCounter;
        }
    })


    input.addEventListener('mouseover', () => {
        input.src = "images/pokeball_open.png"
        if (input.id=="torchic") {
        document.getElementById('choicepic').src = "images/torchic.png";
        }
        else if (input.id=="mudkip") {
            document.getElementById('choicepic').src = "images/mudkip.png";
        }
        else if (input.id=="treecko") {
            document.getElementById('choicepic').src = "images/treecko.png";
        }
    })
    input.addEventListener('mouseout', () => {
        input.src = "images/pokeball_closed.png"

    });
}
);

/* randomly returns torchic, mudkip, or treecko */
function computerPlay() {
    let computerPick = Math.floor(Math.random() * 3) + 1;
    if (computerPick == 1) {
        return "torchic";
    }
    else if (computerPick == 2) {
        return "mudkip";
    }
    else if (computerPick == 3) {
        return "treecko";
    }
}
/* function to play single round using 2 inputs:  playerselection, computerselection
returns string in format "You lose! mudkip beats torchic"
case insensitive */

function playRound(playerSelect, computerSelect) {
    console.log("You picked " + playerSelect + ". Computer picked " + computerSelect + "."); /* test line */
    document.getElementById('aichoicepic').src = "images/" + computerSelect + ".png";
    document.getElementById('choicepic').src = "images/" + playerSelect + ".png";
    document.getElementById('aichoiceshow').textContent = capitalize(computerSelect);
    document.getElementById('choiceshow').textContent = capitalize(playerSelect);

    if (playerSelect == "torchic") {
        if (computerSelect == "torchic") {
            return "Tie game! You both chose " + capitalize(playerSelect) + ".";
        }
        else if (computerSelect == "mudkip") {
            loseCounter++;
            return "You lose. " + capitalize(computerSelect) + " beats " + capitalize(playerSelect) + ".";
        }
        else if (computerSelect == "treecko") {
            winCounter++;
            return "You win! " + capitalize(playerSelect) + " beats " + capitalize(computerSelect) + ".";
        }

    }
    else if (playerSelect == "mudkip") {
        if (computerSelect == "torchic") {
            winCounter++;
            return "You win! " + capitalize(playerSelect) + " beats " + capitalize(computerSelect) + ".";
        }
        else if (computerSelect == "mudkip") {
            return "Tie game! You both chose " + capitalize(playerSelect) + ".";
        }
        else if (computerSelect == "treecko") {
            loseCounter++;
            return "You lose. " + capitalize(computerSelect) + " beats " + capitalize(playerSelect) + ".";
        }
    }
    else if (playerSelect == "treecko") {
        if (computerSelect == "torchic") {
            loseCounter++;
            return "You lose. " + capitalize(computerSelect) + " beats " + capitalize(playerSelect) + ".";
        }
        else if (computerSelect == "mudkip") {
            winCounter++;
            return "You win! " + capitalize(playerSelect) + " beats " + capitalize(computerSelect) + ".";
        }
        else if (computerSelect == "treecko") {
            return "Tie game! You both chose " + capitalize(playerSelect) + ".";
        }
    }
    else {
        return "Invalid option!";
    }
}


/* function to capitalize first letter in a string */
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

