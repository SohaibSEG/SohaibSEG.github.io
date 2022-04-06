'use strict';
let guess = getRandomInt(20);
let highScore = parseInt(document.querySelector(".highscore").textContent);
let score = 20;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function displayMessage(message){
    document.querySelector(".message").textContent = message;
}

function changeBackgroundColor(color){
    document.querySelector("body").style.backgroundColor = color;
}

const reset = function() {
    guess = getRandomInt(20);
    score = 20;
    displayMessage("start guessing...");
    changeBackgroundColor("#222");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
}

const check = function() {
    const answer = parseInt(document.querySelector(".guess").value);
    if (answer === guess) {
        changeBackgroundColor("rgb(70,200,70)");
        displayMessage("🎉 Correct answer! 🎉");
        document.querySelector(".number").textContent = guess;
        if(score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = score;
        }
    } else {
        if(score > 1){
            score--;
            document.querySelector(".score").textContent = score;
            displayMessage(answer > guess ? "too high 📈" : "too low 📉");
        }else{
            changeBackgroundColor("rgb(200,70,70)");
            displayMessage("💥 you lost the game 💥");
        }
    }
}

document.querySelector(".check").addEventListener('click',check);
document.querySelector(".again").addEventListener('click',reset);