'use strict';
const players = [
    {
        score: 0,
        tmpScore : 0,
        ui:{
            score : document.querySelector(".player--0 .score"),
            tmpScore : document.querySelector(".player--0 .current .current-score")
        }
    },{
        score: 0,
        tmpScore:0,
        ui:{
            score : document.querySelector(".player--1 .score"),
            tmpScore : document.querySelector(".player--1 .current .current-score")
        }
    }
]
let activePlayer = 0;
let playing = true;
const maxScore = 100;
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
const imgDice = document.querySelector(".dice");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function switchPlayers(){
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
    activePlayer = (activePlayer === 0 ? 1 : 0);
    document.querySelector(`.player--${activePlayer}`).classList.add("player--active");
}

function resetTmpScore(){
    players[activePlayer].tmpScore = 0;
    players[activePlayer].ui.tmpScore.textContent = players[activePlayer].tmpScore;
}

function gameOver(){
    playing = false;
    document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
}

const init = ()=>{
    for (let i = 0; i < players.length; i++) {
        players[i].score = 0;
        players[i].tmpScore = 0;
        players[i].ui.score.textContent = 0;
        players[i].ui.tmpScore.textContent = 0;
    }
    
    document.querySelector(`.player--0`).classList.add("player--active");
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
    activePlayer = 0;
    playing = true;
}

const Roll = ()=>{
    if(playing){
        const dice = getRandomInt(5);
        imgDice.setAttribute("src",`dice-${dice+1}.png`);
        if (dice === 0) {
            resetTmpScore()
            switchPlayers();

        } else {
            players[activePlayer].tmpScore += dice+1;
            players[activePlayer].ui.tmpScore.textContent = players[activePlayer].tmpScore;
        }
    }
}

const Hold = ()=>{
    if (playing) {
        players[activePlayer].score += players[activePlayer].tmpScore;
        players[activePlayer].ui.score.textContent = players[activePlayer].score;
        resetTmpScore();
        if(players[activePlayer].score >= maxScore){
            gameOver();
        }else{
            switchPlayers();
        }
    }
    
}

btnHold.addEventListener('click',Hold);
btnRoll.addEventListener('click',Roll);
btnNew.addEventListener('click',init);

init();



