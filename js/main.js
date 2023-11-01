// main.js

function getComputerChoice(){
    let num = Math.ceil(Math.random() * 3);
    switch (num) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}

// player input using prompt
// function getPlayerChoice(){
//     let playerChoice = prompt("Enter your choice of Rock, Paper, or Scissors: ");
//     playerChoice = playerChoice.toLowerCase();
//     return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
// }

function handleClick(event){
    console.log(event.target.getAttribute("id"));
    playerSelection = event.target.getAttribute("id");
    playRound(playerSelection, getComputerChoice());
    keepScore();
};

let playerSelection = false;
let buttonsList = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;
console.log("Welcome to Rock Paper Scissors! This will be a 5 round game.");
console.log("Can you beat the computer?")

buttonsList.forEach(function(button){
    button.addEventListener("click", handleClick);
});

function playRound(playerSelection, computerSelection){
    function handleWin(){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        let roundResult = document.querySelector("#round-result");
        roundResult.textContent = `You win the round! ${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
    }
    function handleLoss(){
        console.log(`You lose. ${computerSelection} beats ${playerSelection}`);
        let roundResult = document.querySelector("#round-result");
        roundResult.textContent = `You lose the round. ${computerSelection} beats ${playerSelection}`;
        computerScore += 1;
    }
    function handleTie(){
        console.log(`Its a tie! You both picked ${computerSelection}`);
        let roundResult = document.querySelector("#round-result");
        roundResult.textContent = `This round ends in a draw.`;
    }
    if (playerSelection == "Rock"){
        if (computerSelection == "Rock") handleTie();
        if (computerSelection == "Scissors") handleWin();
        if (computerSelection == "Paper") handleLoss();
    } else if (playerSelection == "Paper"){
        if (computerSelection == "Rock") handleWin();
        if (computerSelection == "Scissors") handleLoss();
        if (computerSelection == "Paper") handleTie();
    } else if (playerSelection == "Scissors"){
        if (computerSelection == "Rock") handleLoss();
        if (computerSelection == "Scissors") handleTie();
        if (computerSelection == "Paper") handleWin();
    }
    console.log("Current score: ")
    console.log(`player: ${playerScore}, computer: ${computerScore}`);
    document.querySelector("#player-score").textContent = `${playerScore}`;
    document.querySelector("#computer-score").textContent = `${computerScore}`;
}

function keepScore(){
    if (playerScore >= 5 || computerScore >= 5){
        console.log("Final score is:");
        console.log(`player: ${playerScore}, computer: ${computerScore}`);
        if (playerScore > computerScore){
            console.log("You won! Great job.");
            let roundResult = document.querySelector("#round-result");
            roundResult.textContent = `You win the game!`;
        }else{
            console.log("Better luck next time!");
            let roundResult = document.querySelector("#round-result");
            roundResult.textContent = `You lose the game.`;
        }
        for (button of buttonsList){
            button.removeEventListener("click", handleClick);
        }
        document.querySelector("#curr-score").textContent = "Final Score:";
    }
}
// if (playerScore >= 5 || computerScore >= 5){
//     console.log("Final score is:");
//     console.log(`player: ${playerScore}, computer: ${computerScore}`);
//     if (playerScore > computerScore){
//         console.log("You won! Great job.");
//     }else{
//         console.log("Better luck next time!");
//     }
// }



