'use-strict';

const state = {
    selected : 0
} 

function init(){
    for (let i = 1; i < 6; i++){
        document.querySelector(`.s-${i}`).classList.remove("selected")
    }
    document.querySelector(`.s-${state.selected}`).classList.add("selected")
    document.querySelector(".rate").textContent = `You selected ${state.selected} out of 5`
}

document.querySelector(".bu-submit").addEventListener('click',()=>{
    console.log(1);
    if (state.selected != 0) {
    /*    document.querySelector(".alert").classList.remove("hidden");
    }else{*/
        document.querySelector(".active").classList.add("hidden");
        document.querySelector(".thanks").classList.remove("hidden");

    }
});

for (let i = 1; i < 6; i++){
    document.querySelector(`.s-${i}`).addEventListener("click",()=>{
        state.selected = i;
        init();


    })
}