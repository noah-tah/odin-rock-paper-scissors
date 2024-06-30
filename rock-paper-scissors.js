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
        console.log("You chose: Scissors.");
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

// TODO: Increment score after a round is played
// TODO: for some reason current computerChoice is getting stored into computerScore
function playRound(humanChoice, computerChoice) {
    if ( humanChoice === "rock" && computerChoice === "rock" ) {
        console.log("Tie! Human and computer chose: Rock!");
    } else if ( humanChoice ==="paper" && computerChoice === "paper" ) {
        console.log("Tie! Human and computer chose: Paper!");
    } else if ( humanChoice ==="scissors" && computerChoice === "scissors" ) {
        console.log("Somehow you messed up.");
    } else if ( humanChoice === "rock" && computerChoice != "paper") {
        console.log("You win! Rock beats Scissors!");
        playerScore++; // maybe i should return something then capture the value outside of the function
        // return "winner";
    } else if ( humanChoice === "paper" && computerChoice != "scissors" ) {
        console.log("You win! Paper beats Rock!");
        playerScore++;
        // return "winner";
    } else if ( humanChoice === "scissors" && computerChoice != "rock" ) {
        console.log("You win! Scissors beats Paper!");
        playerScore++;
        // return "winner";
    } else if ( computerChoice === "rock" && humanChoice === "scissors!" ) {
        console.log("You lose! Rock beats Scissors!");
        computerScore++
        // return "loser";
    } else if ( computerChoice === "paper" && humanChoice === "rock" ) {
        console.log("You lose! Paper beats Rock!");
        computerScore++;
        // return "loser";
    } else if ( computerChoice === "scissors" && humanChoice === "paper" ) {
        console.log("You lose! Scissors beats paper!");
        computerScore++;
        // return "loser";
    } else {
        console.log("Somehow you messed up!");
    }
}
    // function adjustScore(winnerOrLoser, playerScore, computerScore) {
    //     if ( winnerOrLoser === "winner" ) {
    //         playerScore++;
    //         return playerScore;
    //     } else if ( winnerOrLoser === "loser" ) {
    //         computerScore++;
    //         return computerScore;
    //     } else {
    //         console.log("Tie!");
    //     }
    // }
let computerScore = 0;
let playerScore = 0;


    // let winnerOrLoser = playRound(humanChoice, computerChoice);
    // adjustScore(winnerOrLoser, playerScore, computerScore);
    console.log(playerScore);
    console.log(computerScore);

function playGame() {
    let humanChoice = getHumanChoice(prompt("Please choose rock, paper or scissors: "));
    let computerChoice = getComputerChoice(getRandomInt(3));
    playRound(humanChoice, computerChoice);
 }   


playGame();
console.log("computerScore: ", computerScore);
console.log("playerScore: ", playerScore);
playGame();
console.log("computerScore: ", computerScore);
console.log("playerScore: ", playerScore);
playGame();
console.log("computerScore: ", computerScore);
console.log("playerScore: ", playerScore);
playGame();
console.log("computerScore: ", computerScore);
console.log("playerScore: ", playerScore);
playGame();
console.log("computerScore: ", computerScore);
console.log("playerScore: ", playerScore);