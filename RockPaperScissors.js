const choices=['rock', 'paper', 'scissors'];
let playerDisplay = document.getElementById("playerDisplay");
let computerDisplay = document.getElementById("computerDisplay");
let resultDisplay = document.getElementById("result");

let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");

let meScore = 0;
let comScore = 0;

let result;

function myFun(playerChoice){
    let computer = choices[Math.floor(Math.random()*3)];
    
    if(playerChoice == computer){
        result = `It's a tie!`;
    }
    else {
        switch(playerChoice){
            case 'rock':
                result = (computer == 'scissors')?`you win`:`you lose`;
                break;
            case 'paper':
                result = (computer == 'rock')?`you win`: `you lose`;
                break;
            case 'scissors':
                result = (computer == 'paper')?`you win`:`you lose`;
                break;
        }
    }
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computer}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("grn", "rd");
    switch(result){
        case `you win`:
            resultDisplay.classList.add("grn");
            meScore++;
            playerScore.textContent = `Player Score: ${meScore}`;
            break;
        case `you lose`:
            resultDisplay.classList.add("rd");
            comScore++;
            computerScore.textContent = `Computer Score: ${comScore}`;
            break;
    }


    
}