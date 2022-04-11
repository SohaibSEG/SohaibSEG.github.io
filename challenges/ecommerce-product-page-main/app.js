'use-strict';
const buCart = document.querySelector(".bu-cart");
const buMenu = document.querySelectorAll(".bu-menu")
const toggleCart = function(){
    const cartView = document.querySelector(".cart");
    if(cartView.style.display === "none" | cartView.style.display === ""){
        cartView.style.display = "flex";
    }else{
        cartView.style.display = "none";
    }
}

const toggleMenu = function() {
    const linksWrapper = document.querySelector(".links-wrapper");
    const navBar = document.querySelector(".navbar")
    if(linksWrapper.style.display === "none" | linksWrapper.style.display == ""){
        navBar.style.position = "static";
        linksWrapper.style.display = "inline-block";
    }else{
        navBar.style.position = "relative";
        linksWrapper.style.display = "none";
    }
}
