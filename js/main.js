// main.js

function getComputerChoice(){
    let num = Math.ceil(Math.random() * 3);
    switch (num) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}

function getPlayerChoice(){
    let playerChoice = prompt("Enter your choice of Rock, Paper, or Scissors: ");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

}



function playGame(){
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
    }

    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome to Rock Paper Scissors! This will be a 5 round game.");
    console.log("Can you beat the computer?")
    for (let i = 1; i < 6; i++){
        playRound(getPlayerChoice(), getComputerChoice());
        console.log(`Current scores: player ${playerScore}, computer ${computerScore}`);
    }
    console.log("Final score is:");
    console.log(`player: ${playerScore}, computer: ${computerScore}`);
    if (playerScore > computerScore){
        console.log("You won! Great job.");
    }else{
        console.log("Better luck next time!");
    }
}

playGame();