const buSwitch = document.querySelector(".switch");
const signIn = document.querySelector(".signin");
const signUp = document.querySelector(".signup");
const bannerText = document.querySelector(".banner p");
const wrp = document.querySelector(".form-wrapper");
let state = 0;

buSwitch.addEventListener('click',()=>{
    if(state){
        bannerText.textContent = "Don't have an account?";
        buSwitch.querySelector(".text").textContent = "Sign up";
        signUp.classList.add("hidden");
        signIn.classList.remove("hidden");
    }else{
        bannerText.textContent = "Already have an account?";
        buSwitch.querySelector(".text").textContent = "Sign in";
        signIn.classList.add("hidden");
        signUp.classList.remove("hidden");
    }
    wrp.classList.toggle("left")
    state = ! state;
})