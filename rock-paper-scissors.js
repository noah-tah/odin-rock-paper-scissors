//  test section
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function getHumanChoice(choice) {
    let formattedChoice = choice.toLowerCase();
    if (choice === "rock") {
        console.log("You chose: Rock.")
        return "rock";
    } else if (choice === "paper") {
        console.log("You chose: Paper.")
        return "paper";
    } else if (choice ===  "scissors") {
        console.log("You chose: Paper.")
        return "scissors";
    } else {
        console.log("Invalid input! Please enter rock, paper, or scissors!");
    }
}

function getComputerChoice(randNum) {
    if (randNum === 0) {
        console.log("The computer chose: Rock.");
        return "rock";
    } else if (randNum === 1) {
        console.log("The computer chose: Paper.");
        return "paper";
    } else if (randNum === 2) {
        console.log("The computer chose: Scissors.");
        return "scissors"
     } else {
        console.log("Somehow the computer choice function failed");
    }
}


let humanChoice = getHumanChoice(prompt("Please choose rock, paper or scissors: "));
let computerChoice = getComputerChoice(getRandomInt(3));

let computerScore = 0;
let playerScore = 0;

function playRound(humanChoice, computerChoice) {
    if ( humanChoice === "rock" && computerChoice != "paper") {
        console.log("You win! Rock beats Scissors!");
    } else if ( humanChoice === "paper" && computerChoice != "scissors" ) {
        console.log("You win! Paper beats Rock!");
    } else if ( humanChoice === "scissors" && computerChoice != "rock" ) {
        console.log("You win! Scissors beats Paper!");
    } else if ( computerChoice === "rock" && humanChoice === "scissors!" ) {
        console.log("You lose! Rock beats Scissors!");
    } else if ( computerChoice === "paper" && humanChoice === "rock" ) {
        console.log("You lose! Paper beats Rock!");
    } else if ( computerChoice === "scissors" && humanChoice === "paper" ) {
        console.log("You lose! Scissors beats paper!");
    } else {
        console.log("Somehow you messed up.");
    }
}

playRound(humanChoice, computerChoice);