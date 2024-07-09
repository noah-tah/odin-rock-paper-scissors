function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice(choice) {
    choice = choice.toLowerCase(); // convert choice to lowercase
    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (choice ===  "scissors") {
        return "scissors";
    } else {
        return;
    }
}

function getComputerChoice(randNum) {
    if (randNum === 0) {
        return "rock";
    } else if (randNum === 1) {
        return "paper";
    } else if (randNum === 2) {
        return "scissors"
     } else {
        return;
    }
}

function playRound(humanChoice, computerChoice) {
    if ( humanChoice === "rock" && computerChoice === "rock" ) {
        // console.log("Tie! Human and computer chose: Rock!");
        return;
    } else if ( humanChoice ==="paper" && computerChoice === "paper" ) {
        // console.log("Tie! Human and computer chose: Paper!");
        return;
    } else if ( humanChoice ==="scissors" && computerChoice === "scissors" ) {
        // console.log("Somehow you messed up.");
        return;
    } else if ( humanChoice === "rock" && computerChoice != "paper") {
        playerScore++; 
    } else if ( humanChoice === "paper" && computerChoice != "scissors" ) {
        playerScore++;
    } else if ( humanChoice === "scissors" && computerChoice != "rock" ) {
        playerScore++;
    } else if ( computerChoice === "rock" && humanChoice === "scissors!" ) {
        computerScore++
    } else if ( computerChoice === "paper" && humanChoice === "rock" ) {
        computerScore++;
    } else if ( computerChoice === "scissors" && humanChoice === "paper" ) {
        computerScore++;
    } else {
        return;
    }
}

let computerScore = 0;
let playerScore = 0;


function playGame() {
    let humanChoice = getHumanChoice(prompt("Please choose rock, paper or scissors: "));
    let computerChoice = getComputerChoice(getRandomInt(3));
    playRound(humanChoice, computerChoice);
}   

function initializeScoreboard() {

    const scoreboard = document.querySelector(".results-container");

    let displayPlayerScore = document.createElement("p");
    displayPlayerScore.classList.add("player-score-display", "score-display-style", "game-font-style");

    let displayComputerScore = document.createElement("p");
    displayComputerScore.classList.add("computer-score-display", "score-display-style", "game-font-style");

    displayPlayerScore.textContent = "The player's score is: " + playerScore;

    displayComputerScore.textContent = "The computer's score is: " + playerScore;

    scoreboard.appendChild(displayPlayerScore);
    scoreboard.appendChild(displayComputerScore);
    body.appendChild(scoreboard);

};

