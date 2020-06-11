var startButton = document.querySelector("input");
var speed = 1500;

startButton.addEventListener("click", start);
window.addEventListener("keypress", keyPressed);

function start() {
    startButton.style.display = "none";
    // console.log(randomPosition());
    newLetter();
}

var keyPressed = function(event) {
    let letter = event.key;
    div = document.querySelector("." + letter);
    document.querySelector("body").removeChild(div);
}

function newLetter() {
    let letter = randomLetter();
    let x = randomPosition();
    let y = randomPosition();
    let div = document.createElement("div");
    div.innerText = letter;
    div.style.top = y;
    div.style.left = x;
    div.className = "boxLetter " + letter;
    document.querySelector("body").appendChild(div);
    setTimeout(newLetter, speed);
}

function randomLetter() {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let position = randomNumber(letters.length);
    return letters.charAt(position);
}

function randomPosition() {
    return randomNumber(95) +"%";
}

function randomNumber(max) {
    return Math.round(Math.random() * max);
}