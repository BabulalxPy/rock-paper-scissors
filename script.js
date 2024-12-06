console.log("ROCK PAPER SCISSORS GAME")
function getComputerChoice(){
    arr = ["rock","paper","scissors"]
    return arr[(Math.floor(Math.random() * arr.length))];
}

let humanScore = 0;
let computerScore = 0;


const displayHumanScore = document.querySelector(".displayHumanScore");
const displayComputerScore = document.querySelector(".displayComputerScore");

function updateScore() {
    displayHumanScore.textContent = "Human Score: " + humanScore;
    displayComputerScore.textContent = "Computer Score: " + computerScore;
};


function playround(humanChoice, computerChoice){
    const display = document.querySelector(".display");
    const displayResults = document.querySelector(".displayResults");
    if(humanChoice == "rock" && computerChoice == "paper"){
        computerScore += 1;
        
        displayResults.textContent = "You lose! Paper beats rock";
        display.appendChild(displayResults);
        
        console.log("You lose! Paper beats rock");
        
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        computerScore += 1;
        
        displayResults.textContent = "You lose! Scissors beats paper";
        display.appendChild(displayResults);

        console.log("You lose! Scissors beats paper");
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        computerScore += 1;

        displayResults.textContent = "You lose! rock beats scissors";
        display.appendChild(displayResults);

        console.log("You lose! rock beats scissors");
        
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore += 1;
        
        displayResults.textContent = "You won!";
        display.appendChild(displayResults);

        console.log("You won!");
        
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore += 1;
        
        displayResults.textContent = "Your won!";
        display.appendChild(displayResults);

        console.log("Your won!");
        
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore += 1;
        
        displayResults.textContent = "You won!";
        display.appendChild(displayResults);

        console.log("You won!");
        
    }
    else if(humanChoice === computerChoice){
        
        displayResults.textContent = "Tie";
        display.appendChild(displayResults);

        console.log("Tie");
    }
    else{
        console.log("Enter correctly");
    }

    updateScore();

    const declareWinner = document.querySelector(".declareWinner");

    if(humanScore == 5){
        declareWinner.textContent = "You Won the game!";
        display.appendChild(declareWinner);
        btn1.removeEventListener("click", rock);
        btn2.removeEventListener("click", paper);
        btn3.removeEventListener("click", scissors);
    }
    else if(computerScore == 5){
        declareWinner.textContent = "You lost the game!";
        display.appendChild(declareWinner);
        btn1.removeEventListener("click", rock);
        btn2.removeEventListener("click", paper);
        btn3.removeEventListener("click", scissors);
    }

}


function rock(){
    humanChoice = "rock";
    const computerSelection1 = getComputerChoice();
    playround(humanChoice,computerSelection1);
   
}
function paper(){
    humanChoice = "paper";
    const computerSelection1 = getComputerChoice();
    playround(humanChoice,computerSelection1);

}
function scissors(){
    humanChoice = "scissors";
    const computerSelection1 = getComputerChoice();
    playround(humanChoice,computerSelection1);
    
}

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", rock);
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", paper);
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", scissors);

