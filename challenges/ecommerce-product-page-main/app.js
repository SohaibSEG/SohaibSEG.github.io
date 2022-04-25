'use-strict';
const buCart = document.querySelector(".bu-cart");
const buMenu = document.querySelectorAll(".bu-menu");
const cartView = document.querySelector(".cart");

//navigation events

const toggleCart = function(){
    
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
//lightbox
const lightBox = document.querySelector(".lightbox");
const toggle = document.querySelectorAll(".toggle-lightbox");
const toggleLightBox = function (){
    lightBox.classList.toggle("lightbox-visible");
}
if(document.documentElement.clientWidth > 786){
    toggle.forEach((element)=>{element.addEventListener('click',toggleLightBox)});
}
//carousel
const imgList = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
]
let lbMainImage = document.querySelector(".lightbox .img-active");
let buNext = document.querySelector(".lightbox .next");
let buPrev = document.querySelector(".lightbox .previous");
if(document.documentElement.clientWidth < 786){
    lbMainImage = document.querySelector(".product-main .img-active");
    buNext = document.querySelector(".product-main .next");
    buPrev = document.querySelector(".product-main .previous");
}
let index = 0;


const moveNext = function (){
    index++;
    if(index>=imgList.length){
        index = 0;
    }
    lbMainImage.src = imgList[index];
}

const movePrev = function (){
    index--;
    if(index<0){
        index = imgList.length - 1;
    }
    lbMainImage.src = imgList[index];
}
buNext.addEventListener('click',moveNext);
buPrev.addEventListener('click',movePrev);
//thumbnail

const thumbnails = document.querySelectorAll(".thumbnails");

thumbnails.forEach((thumbnails_)=>{
    const tmbList = thumbnails_.querySelectorAll('.thumbnail');
    let currentActive = thumbnails_.querySelector(".t-active");
    tmbList.forEach((thumbnail)=>{
        thumbnail.addEventListener('click',()=>{
            currentActive.classList.toggle("t-active");
            thumbnail.classList.toggle("t-active");
            currentActive = thumbnail;
            let index = Array.prototype.indexOf.call(tmbList,thumbnail);
            thumbnail.parentNode.parentNode.querySelector(".img-active").src = imgList[index];
        });
    });
    
})

// cart events 

const cartState =  []
const product = {
        Title : "Fall Limited Edition Sneakers",
        Thumbnail:"images/image-product-1-thumbnail.jpg",
        UnitePrice : 250.00,
        Discount : 0.5,
        Quantity : 1,
        discountedPrice : function () {
            return this.UnitePrice - this.UnitePrice*this.Discount;
        },
        totalPrice : function () {
            return this.discountedPrice()*this.Quantity;
        }
    }

const removeElement = function(index){
    cartState.splice(index,1);
    updateCartElements();
}

function updateCartElements(){
    const cartContent = document.querySelector(".cart-content");
    document.querySelector(".bu-cart .alert").innerText = cartState.length;
    var template = document.querySelector('.cart-item-template');
    cartContent.innerHTML="";
    for (let i=0;i<cartState.length;i++) {
        element = cartState[i];
        var c_item = template.content.cloneNode(true);
        c_item.querySelector(".cart-item").classList.add(`cart-item-${i}`);
        c_item.querySelector(".ci-title").innerText = element.Title;
        c_item.querySelector(".ci-thumbnail").attributes.src = element.Thumbnail;
        c_item.querySelector(".ci-price span").innerText = `$${element.discountedPrice()} x ${element.Quantity} `;
        c_item.querySelector(".ci-price strong").innerText = `$${element.totalPrice()}`;
        c_item.querySelector(".delete").addEventListener("click",function(){removeElement(i)});
        cartContent.appendChild(c_item);
    }
    if(cartState.length===0){
        document.querySelector(".c-empty").style = "";
        cartContent.style = "display:none;";
        document.querySelector(".checkout").style = "display:none;";
        document.querySelector(".bu-cart .alert").style = "display:none;";
    }else{
        document.querySelector(".c-empty").style = "display:none;";
        cartContent.style = "";
        document.querySelector(".checkout").style = "";
        document.querySelector(".bu-cart .alert").style = "";
        
    }
}

function updateQuantity(){
    document.querySelector(".p-counter .count").innerText = product.Quantity;
}

const addToCart = function () {
    cartState.push(Object.assign({},product));
    updateCartElements();
}

const plus = function(){
    product.Quantity++;
    updateQuantity();
}
const minus = function(){
    if(product.Quantity > 1){
        product.Quantity--;
        updateQuantity();
    }
}

const buAddToCart = document.querySelector(".add-to-cart");
const buPlus = document.querySelector(".p-counter .bu-plus");
const buMinus = document.querySelector(".p-counter .bu-minus");

updateCartElements();
buAddToCart.addEventListener('click',addToCart);
buPlus.addEventListener('click',plus);
buMinus.addEventListener('click',minus);
