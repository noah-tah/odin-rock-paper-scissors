//  test section
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(randNum) {
    if (randNum === 0) {
        console.log("Rock");
    } else if (randNum === 1) {
        console.log("Paper");
    } else if (randNum === 2) {
        console.log("Scissors");
    } else {
        console.log("Somehow you messed up")
    }
}

getComputerChoice(getRandomInt(3));

function getHumanChoice(choice) {
    let formattedChoice = choice.toLowerCase();
    if (choice === "rock") {
        console.log("rock selected");
    } else if (choice === "paper") {
        console.log("paper selected");
    } else if (choice ===  "scissors") {
        console.log("scissors selected");
    } else {
        console.log("Somehow you messed up")
    }
}

console.log(getHumanChoice(prompt("Please choose rock, paper or scissors: ")));


// new new change