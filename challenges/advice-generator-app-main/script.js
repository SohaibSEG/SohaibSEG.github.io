'use-strict';

const id = document.querySelector(".id");
const dice = document.querySelector(".dice");
const advice = document.querySelector(".advice");

const generate = function(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        
        id.textContent = `ADVICE #${data.slip.id}`;
        advice.textContent = data.slip.advice;
    
    
    });

}

generate()
dice.addEventListener('click',generate);