function createRPSButtons() {
    const rpsButtonsContainer = document.createElement("div");
    const rockButton = document.createElement("rock-button");
    const paperButton = document.createElement("paper-button");
    const scissorsButton = document.createElement("scissors-button");
    rpsButtonsContainer.classList.add("choice-container");
    rockButton.classList.add("rps-buttons", "game-font-style");
    rockButton.setAttribute("id", "rock-button");
    paperButton.classList.add("rps-buttons", "game-font-style");
    paperButton.setAttribute("id", "paper-button");
    scissorsButton.classList.add("rps-buttons", "game-font-style");
    scissorsButton.setAttribute("id", "scissors-button");
    rpsButtonsContainer.appendChild(rockButton);
    rpsButtonsContainer.appendChild(paperButton);
    rpsButtonsContainer.appendChild(scissorsButton);
    document.body.appendChild(rpsButtonsContainer);


}
