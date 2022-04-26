const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown)=>{
    dropdown.addEventListener('click',()=>{
        dropdown.querySelector(".dropdown-content").classList.toggle("dropdown-content-expanded");
        dropdown.querySelector(".dropdown-content").classList.toggle("dropdown-content-hidden");
        dropdown.querySelector(".arrow").classList.toggle("arrow-rotate");
    })

}) 

const navControls = document.querySelectorAll(".toggle-nav");
navControls.forEach((t)=>{
    t.addEventListener('click',()=>{
        document.querySelector(".nav-wrapper").classList.toggle("nav-wrapper-hidden");
        document.querySelector(".nav-wrapper").classList.toggle("nav-wrapper-visible");

    })
})