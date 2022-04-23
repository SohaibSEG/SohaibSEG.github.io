'use-strict';
const buCart = document.querySelector(".bu-cart");
const buMenu = document.querySelectorAll(".bu-menu")
//navigation events

const toggleCart = function(){
    const cartView = document.querySelector(".cart");
    cartView.classList.toggle("cart-visible");
}

const toggleMenu = function() {
    const linksWrapper = document.querySelector(".links-wrapper");
    const navBar = document.querySelector(".navbar")
    if(linksWrapper.classList.contains("links-visible")){
        linksWrapper.classList.remove("links-visible");
        setTimeout(()=>{navBar.style.position = "relative";},100);
    }else{
        linksWrapper.classList.add("links-visible");
        navBar.style.position = "static"; 
    }
}

const toggleLightBox = function (){
    const lightBox = document.querySelector(".lightbox");
    lightBox.classList.toggle("lightbox-visible");
}
//TODO: carousel

// cart events 

let cartState =  [
        {
            Tite : "Fall Limited Edition Sneakers",
            UnitePrice : 250.00,
            Discount : 0.5,
            Quantity : 3
        }
    ]

const buAddToCart = document.querySelector(".add-to-cart");
