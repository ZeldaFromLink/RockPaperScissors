const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor((Math.random() * options.length))]
    return choice;
}
function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    } else {
        return "Computer";
    }
}
function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a Tie!"
    } 
    else if(result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice(){
    let validInput = false;
    while(validInput == false) {
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceLowerCase = choice.toLowerCase();
        if(options.includes(choiceLowerCase)){
            validInput = true;
            return choiceLowerCase;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    for(let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        } else if(checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
        }
    }
    console.log("Game Over");
    if(scorePlayer > scoreComputer){
        console.log("Player Wins!");
    } else if(scoreComputer > scorePlayer){
        console.log("Computer Wins!");
    } else {
        console.log("It's a Tie!");
    }
}

game()