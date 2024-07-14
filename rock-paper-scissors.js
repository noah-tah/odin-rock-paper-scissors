let humanChoice = "";
let computerScore = 0;
let playerScore = 0;
let scoreboard = initializeScoreboard();
let gameResultText = "";
let roundCount = "";
let winnerText = "";

getHumanChoice();

function getHumanChoice() {
    const rockButton = document.querySelector("#rock-button");
    const paperButton = document.querySelector("#paper-button");
    const scissorsButton = document.querySelector("#scissors-button");

    rockButton.addEventListener("click", () => {
        clearGameResult();
        humanChoice = "rock";
        playRound();
    });
    paperButton.addEventListener("click", () => {
        clearGameResult();
        humanChoice = "paper";
        playRound();
    });
    scissorsButton.addEventListener("click", () => {
        clearGameResult();
        humanChoice = "scissors";
        playRound();
    });
}



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
    scoresArray[0].textContent = "The computer's score is: " + computerScore;
    scoresArray[1].textContent = "The player's score is: " + playerScore;
}



function playRound() {
    let computerChoice = getComputerChoice(getRandomInt(3));
    if (humanChoice === computerChoice) {
        gameResultText = "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        playerScore++;
        gameResultText = "You Win! Rock Computer chose Scissors!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        gameResultText = "You Win! Paper Computer chose Rock!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        gameResultText = "You Win! Computer chose Paper!";
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++
        gameResultText = "You Lose! Computer chose Rock!";
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        gameResultText = "You Lose! Computer chose Paper!";
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        gameResultText = "You Lose! Computer chose Scissors!";
    } else {
        gameResultText = "Something went wrong!";
    }
    roundCount++;
    displayGameResult(gameResultText);
    updateScore(scoreboard);
    checkGameOver();
}

function displayGameResult(gameResultText) {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add("results-container");
    resultContainer.setAttribute("id", "results-container");
    document.body.appendChild(resultContainer);
    let resultText = document.createElement('p');
    resultText.classList.add("results-styles", "game-font-style");
    resultText.setAttribute("id", "result-text");
    resultContainer.appendChild(resultText);
    resultText.textContent = gameResultText;
}


function clearGameResult() {
    let resultText = document.querySelector('#result-text');
    if (resultText) {
        resultText.textContent = '';
    }
    let resultContainer = document.querySelector(".results-container");
    if (resultContainer) {
        resultContainer.remove();
    }

}

function checkGameOver() {
    if (roundCount === 5) {
        checkWinner();
    } else {
        return
    }
}

function checkWinner() {
    if (playerScore > computerScore) {
        winnerText = "You Won!";
    } else if (playerScore < computerScore) {
        winnerText = "You Lost!";
    } else if (playerScore === computerScore) {
        winnerText = "It's a tie!";
    } else {
        winnerText = "Something went wrong!";
    }
    displayWinnerText();
}

function displayWinnerText() {
    const winnerTextContainer = document.createElement('div');
    winnerTextContainer.classList.add("winner-text-container");
    winnerTextContainer.setAttribute("id", "winner-text-container");
    document.body.appendChild(winnerTextContainer);
    let winnerText = document.createElement('p');
    winnerText.classList.add("winner-text", "game-font-style");
    winnerText.setAttribute("id", "winner-text");
    winnerTextContainer.appendChild(winnerText);
    clearGameResult();
}


