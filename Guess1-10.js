const min = 1;
const max = 10;
const answer = Math.floor(Math.random()*(max-min+1))+min;

let running = true;
let attempts = 0;
let guess;

while(running){
    guess = window.prompt(`Guess the number b/w ${min}-${max}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert(`Please enter valid number`);
    }
    else if(guess<min || guess>max){
        window.alert(`Please enter valid number`);
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert(`too low, try again!`);
        }
        else if(guess>answer){
            window.alert(`too high, try again!`);
        }
        else{
            window.alert(`you are right, the answer is ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}