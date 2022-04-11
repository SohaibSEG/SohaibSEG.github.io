const pages = document.querySelectorAll(".page");

const busBack = document.querySelectorAll(".go-back");
const buKnowMore = document.querySelector(".bu-know-more");
const buPortfolio = document.querySelector(".bu-open-portfolio")
let current = 0;

const moveNext = function(){
    pages[current].classList.remove("active");
    current++;
    pages[current].classList.add("active");
}

const moveBack = function(){
    pages[current].classList.remove("active");
    current--;
    pages[current].classList.add("active");
}

busBack.forEach(buBack => {
    buBack.addEventListener('click',moveBack);    
});

buKnowMore.addEventListener('click',moveNext);
buPortfolio.addEventListener('click',moveNext);