//toggle menu on checkbox
document.querySelector("#menu_checkbox").addEventListener("change",()=>{
    document.querySelector(".links-wrapper").classList.toggle("links-wrapper-visible")
});

//carousel

const items = ["Chair","Couch","Bed"]

const c_items = document.querySelectorAll(".c-item");
const c_info_title = document.querySelector(".carousel-item-info .title");
let index = 0;
let shift_by = c_items[0].offsetWidth + 16;
let max_shift = shift_by * (c_items.length - 1);
let shift = 0;
function updateCarouselInfo(){
    c_info_title.textContent = items[index];
}
const shiftLeft = () => {
    shift = shift + shift_by;
    index++;
    if(shift > max_shift){
        shift = max_shift;
        index = items.length() -1;
    }

    c_items.forEach((item)=>{
        item.style = `right: ${shift}px`;
    })
    updateCarouselInfo();
};
const shiftRight = () => {
    shift = shift - shift_by;
    index--;
    if(shift < 0) {
        shift = 0;
        index = 0;
    }
    c_items.forEach((item)=>{
        item.style = `right: ${shift}px`;
    })
    updateCarouselInfo();
};
console.log(shift_by);

document.querySelector(".c-controls .next").addEventListener("click",shiftRight);
document.querySelector(".c-controls .prev").addEventListener("click",shiftLeft);
