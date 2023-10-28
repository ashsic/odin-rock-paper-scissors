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
        playerScore += 1;
    }
    function handleLoss(){
        console.log(`You lose. ${computerSelection} beats ${playerSelection}`);
        computerScore += 1;
    }
    function handleTie(){
        console.log(`Its a tie! You both picked ${computerSelection}`);
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
}




function keepScore(){
    if (playerScore >= 5 || computerScore >= 5){
        console.log("Final score is:");
        console.log(`player: ${playerScore}, computer: ${computerScore}`);
        if (playerScore > computerScore){
            console.log("You won! Great job.");
        }else{
            console.log("Better luck next time!");
        }
        for (button of buttonsList){
            button.removeEventListener("click", handleClick);
        }
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



