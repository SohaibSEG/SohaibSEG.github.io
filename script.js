'use-strict';
let next = document.querySelector('.carousel-nav-next');
let prev = document.querySelector('.carousel-nav-prev');
let project = document.querySelectorAll('.project');
console.log(project[0]);
let active = 0;
//let project_page = Math.ceil(project.length/4);

let l = 0;
let movePer = 26;
let maxMove = 26*(project.length-1);

function updateActive(){
    if(active >= project.length){
        active = project.length -1
    }if(active < 0){
        active = 0
    }
    project[active].classList.add("carousel-active");
    for(let i =0 ; i<project.length;i++){
        if (i!=active) {
            project[i].classList.remove("carousel-active");
            
        }
    }

}

// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches)
    {
    movePer = 18;
    maxMove = 18 * (project.length-1);
    }

let right_mover = ()=>{
    l = l + movePer;
    active = active +1;
    updateActive();
    if (l > maxMove){l = l - movePer;}
    for(const i of project)
    {   
        i.style.left = '-' + l + 'rem';
    }

}
let left_mover = ()=>{
    l = l - movePer;
    active = active -1;
    updateActive();
    if (l<=0){l = 0;}
    for(const i of project){

            i.style.left = '-' + l + 'rem';
    }
}
next.onclick = ()=>{right_mover();}
prev.onclick = ()=>{left_mover();}