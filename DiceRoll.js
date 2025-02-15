const dice = document.getElementById("dice");

dice.addEventListener("submit", event => {
    let input = document.getElementById("num");
    let value = document.getElementById("values");
    let dice = document.getElementById("dice");
    let imgs = document.getElementById("img");
    let min = 1;
    let max = 6;
    let values = [];
    let images = []; /* if i put it outside 
    it will add every dice in the past and 
    reveal it in page which we dont want
     */

    event.preventDefault();

    for(let i = 0; i<input.value; i++){
        let random = Math.floor((Math.random()*(max-min+1)))+min;
        values.push(random);
        images.push(`<img src="dice images/${random}.png" alt="dice: ${random}">`);
    }

    value.textContent = `Dice: ${values.join(", ")}`;
    imgs.innerHTML = images.join(" ");

})