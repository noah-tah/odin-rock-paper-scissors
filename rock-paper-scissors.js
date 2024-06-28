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

// new change