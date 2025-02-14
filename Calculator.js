let display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function resultDisplay(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}