//  test section
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(randNum) {
    if (randNum === 0) {
        return "rock";
    } else if (randNum === 1) {
        return "paper";
    } else if (randNum === 2) {
        return "scissors"
     } else {
        console.log("Somehow the computer choice function failed");
    }
}


function getHumanChoice(choice) {
    let formattedChoice = choice.toLowerCase();
    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (choice ===  "scissors") {
        return "scissors";
    } else {
        console.log("Invalid input! Please enter rock, paper, or scissors!");
    }
}

let humanChoice = getHumanChoice(prompt("Please choose rock, paper or scissors: "));
let computerChoice = getComputerChoice(getRandomInt(3));

let computerScore = 0;
let playerScore = 0;

function playRound(humanChoice, computerChoice) {
}