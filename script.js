const pages = document.querySelectorAll(".page");

const busBack = document.querySelectorAll(".go-back");
const buKnowMore = document.querySelector(".bu-know-more");
const buPortfolio = document.querySelector(".bu-open-portfolio")
let current = 0;

const moveNext = function(){
    window.scroll(0, 0);
    pages[current].classList.remove("active");
    current++;
    current = current < pages.length ? current : pages.length -1;
    pages[current].classList.add("active");
    window.scroll(0, 0);
}

const moveBack = function(){
    pages[current].classList.remove("active");
    current--;
    current = current > 0 ? current : 0;
    pages[current].classList.add("active");
    window.scroll(0, 0);
}

busBack.forEach(buBack => {
    buBack.addEventListener('click',moveBack);    
});

buKnowMore.addEventListener('click',moveNext);
buPortfolio.addEventListener('click',moveNext);
