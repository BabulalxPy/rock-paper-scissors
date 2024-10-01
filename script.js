console.log("ROCK PAPER SCISSORS GAME")
function getComputerChoice(){
    arr = ["rock","paper","scissors"]
    return arr[(Math.floor(Math.random() * arr.length))];
}

function getHumanchoice(){
    let ans = prompt("Enter your answer(rock,paper or scissors)")
    return ans.toLowerCase();
}


let humanScore = 0;
let computerScore = 0;

function playround(humanChoice, computerChoice){
    if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats rock");
        computerScore += 1;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats paper");
        computerScore += 1;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! rock beats scissors");
        computerScore += 1;
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You won!");
        humanScore += 1;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("Your won!");
        humanScore += 1;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You won!");
        humanScore += 1;
    }
    else if(humanChoice === computerChoice){
        console.log("Tie");
    }
    else{
        console.log("Enter correctly");
    }
}



function playgame(){
    const humanSelection1 = getHumanchoice();
    const computerSelection1 = getComputerChoice();
    console.log(playround(humanSelection1, computerSelection1));
    console.log("Your score: ", humanScore);
    console.log("Computer score: ", computerScore);
    const humanSelection2 = getHumanchoice();
    const computerSelection2 = getComputerChoice();
    console.log(playround(humanSelection2, computerSelection2));
    console.log("Your score: ", humanScore);
    console.log("Computer score: ", computerScore);
    const humanSelection3 = getHumanchoice();
    const computerSelection3 = getComputerChoice();
    console.log(playround(humanSelection3, computerSelection3));
    console.log("Your score: ", humanScore);
    console.log("Computer score: ", computerScore);
    const humanSelection4 = getHumanchoice();
    const computerSelection4 = getComputerChoice();
    console.log(playround(humanSelection4, computerSelection4));
    console.log("Your score: ", humanScore);
    console.log("Computer score: ", computerScore);
    const humanSelection5 = getHumanchoice();
    const computerSelection5 = getComputerChoice();
    console.log(playround(humanSelection5, computerSelection5));
    console.log("Your score: ", humanScore);
    console.log("Computer score: ", computerScore);
    
}
console.log(playgame())
if (humanScore > computerScore){
    console.log("You won the game");
}
else{
    console.log("You lost the game");
}

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
content.style.backgroundColor = 'blue';
container.appendChild(content);