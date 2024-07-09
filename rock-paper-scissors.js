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
        return;
    }
}
function initializeScoreboard() {
    const scoreboard = document.querySelector(".results-container");
    let displayPlayerScore = document.createElement("p");
    displayPlayerScore.classList.add("player-score-display", "score-display-style", "game-font-style");
    let displayComputerScore = document.createElement("p");
    displayComputerScore.classList.add("computer-score-display", "score-display-style", "game-font-style");
    displayPlayerScore.textContent = "The player's score is: " + playerScore;
    displayComputerScore.textContent = "The computer's score is: " + playerScore;
    scoreboard.appendChild(displayComputerScore);
    scoreboard.appendChild(displayPlayerScore);
};
let humanChoice = "";
function getHumanChoice() {
    const rockButton = document.querySelector("#rock-button");
    const paperButton = document.querySelector("#paper-button");
    const scissorsButton = document.querySelector("#scissors-button");

    rockButton.addEventListener("click", () => {
        humanChoice = "rock";
        playRound();
    });
    paperButton.addEventListener("click", () => {
        humanChoice = "paper";
        playRound();
    });
    scissorsButton.addEventListener("click", () => {
        humanChoice = "scissors";
        playRound();
    });
}
getHumanChoice();
let computerScore = 0;
let playerScore = 0;
initializeScoreboard();



function playRound() {
    let computerChoice = getComputerChoice(getRandomInt(3));
    console.log(humanChoice);
    if ( humanChoice === "rock" && computerChoice === "rock" ) {
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

// function playGame() {
//     let humanChoice = getHumanChoice(prompt("Please choose rock, paper or scissors: "));
//     let computerChoice = getComputerChoice(getRandomInt(3));
//     playRound(humanChoice, computerChoice);
// }   

// when a button is clicked, fire playRound();