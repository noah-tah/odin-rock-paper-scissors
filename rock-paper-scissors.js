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
    const scoreboardContainer = document.querySelector(".scoreboard-container");
    let displayPlayerScore = document.createElement("p");
    displayPlayerScore.classList.add("player-score-display", "score-display-style", "game-font-style");
    let displayComputerScore = document.createElement("p");
    displayComputerScore.classList.add("computer-score-display", "score-display-style", "game-font-style");
    scoreboardContainer.appendChild(displayComputerScore);
    scoreboardContainer.appendChild(displayPlayerScore);
    const scoresArray = [displayComputerScore, displayPlayerScore];
    return scoresArray;
}

function updateScore(scoresArray) {
    scoresArray[0].textContent =  "The computer's score is: " + computerScore;
    scoresArray[1].textContent = "The player's score is: " + playerScore;
}

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
let scoreboard = initializeScoreboard();

let gameResultText = "";

function playRound() {
    let computerChoice = getComputerChoice(getRandomInt(3));
    if ( humanChoice === computerChoice) {
        gameResultText = "It's a tie!";
        displayGameResult(gameResultText);
        return;
    } else if ( humanChoice === "rock" && computerChoice != "paper") {
        playerScore ++;
        gameResultText = "You Win! Rock beats Paper!";
        displayGameResult(gameResultText);
    } else if ( humanChoice === "paper" && computerChoice != "scissors" ) {
        playerScore++;
        gameResultText = "You Win! Paper beats Scissors!!";
        displayGameResult(gameResultText);
    } else if ( humanChoice === "scissors" && computerChoice != "rock" ) {
        playerScore++;
        gameResultText = "You Win! Scissors beats Rock!";
        displayGameResult(gameResultText);
    } else if ( computerChoice === "rock" && humanChoice === "scissors!" ) {
        computerScore++
        gameResultText = "You Lose! Computer chose Rock!";
        displayGameResult(gameResultText);
    } else if ( computerChoice === "paper" && humanChoice === "rock" ) {
        computerScore++;
        gameResultText = "You Lose! Computer chose Paper!";
        displayGameResult(gameResultText);
    } else if ( computerChoice === "scissors" && humanChoice === "paper" ) {
        computerScore++;
        gameResultText = "You Lose! Computer chose Scissors!";
        displayGameResult(gameResultText);
    } else {
        gameResultText = "Something went wrong!";
        displayGameResult(gameResultText);
        return;
    }
    updateScore(scoreboard);
}

function displayGameResult(gameResultText) {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add("results-container");
    let resultText = document.createElement('p');
    resultText.classList.add("results-styles", "game-font-style");
    resultText.textContent = gameResultText;
    resultContainer.appendChild(resultText);
    document.body.appendChild(resultContainer);
} 

displayGameResult();


