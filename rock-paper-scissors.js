//  test section
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice(choice) {
    choice = choice.toLowerCase(); // convert choice to lowercase
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
// TODO: code for edge case when player and computer both choose same move
function playRound(humanChoice, computerChoice) {
    if ( humanChoice === "rock" && computerChoice != "paper") {
        console.log("You win! Rock beats Scissors!");
        return "winner";
    } else if ( humanChoice === "paper" && computerChoice != "scissors" ) {
        console.log("You win! Paper beats Rock!");
        return "winner";
    } else if ( humanChoice === "scissors" && computerChoice != "rock" ) {
        console.log("You win! Scissors beats Paper!");
        return "winner";
    } else if ( computerChoice === "rock" && humanChoice === "scissors!" ) {
        console.log("You lose! Rock beats Scissors!");
        return "loser";
    } else if ( computerChoice === "paper" && humanChoice === "rock" ) {
        console.log("You lose! Paper beats Rock!");
        return "loser";
    } else if ( computerChoice === "scissors" && humanChoice === "paper" ) {
        console.log("You lose! Scissors beats paper!");
        return "loser";
    } else {
        console.log("Somehow you messed up.");
    }
}

let winnerOrLoser = playRound(humanChoice, computerChoice);

// TODO: Increment score after a round is played
// TODO: for some reason current computerChoice is getting stored into computerScore
function adjustScore(winnerOrLoser, playerScore, computerScore) {
    if ( winnerOrLoser === "winner" ) {
        playerScore = playerScore + 1;
        console.log("Player's current score: ", playerScore);
        console.log("Computer's current score: ", computerScore);
    } else if ( winnerOrLoser === "loser" ) {
        computerScore = computerScore + 1;
        console.log("Player's current score: ", playerScore);
        console.log("Computer's current score: ", computerScore);
    } else {
        console.log("Somehow you messed up calculating score");
    }
}

adjustScore(winnerOrLoser, playerScore, computerChoice);