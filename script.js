var navlist =document.getElementById("uil");
var close=document.getElementById("nav-close");
var menubar= document.getElementById("nav-toggle"); 
var home=document.getElementById("home_con");
menubar.addEventListener("click",pi);
function pi(){
    navlist.classList.add("show");
    menubar.classList.add("hide");
    close.classList.add("closewala");
}
close.addEventListener("click",po);
function po(){
    navlist.classList.remove("show");
    menubar.classList.remove("hide");
    close.classList.remove("closewala");

}
const header = document.querySelector('.nav');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
var progressbar =document.querySelectorAll(".s >div");
function intialiserbar(bar){
    bar.setAttribute("data-visited",false);
    bar.style.width=0+'%';
}
for(var bar of progressbar){
    intialiserbar(bar);
}


function fillbar(bar){
    var currentwidth=0;
    var targerwidth=bar.getAttribute("data");
    var interval = setInterval(()=>{
        if(currentwidth>=targerwidth){
            clearInterval(interval);
            return;
        }
        currentwidth++;
        bar.style.width =currentwidth +'%';    },5)


}
function checkscroll(){
    for(let bar of progressbar){
        var barcoordinates=bar.getBoundingClientRect();
        if((bar.getAttribute("data-visited")=="false")&&(barcoordinates.top<=(window.innerHeight-barcoordinates.height))){
            bar.setAttribute("data-visited",true);
            fillbar(bar);
        }
        else if(barcoordinates.top>window.innerHeight){
            bar.setAttribute("data-visited",false);
            intialiserbar(bar);
        }
    }

}
window.addEventListener("scroll",checkscroll);

const wrapper = document.querySelector(".wrapp"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll("img"),
  buttons = document.querySelectorAll(".button");

let imageIndex = 1,
  intervalId;


const autoSlide = () => {
  
  intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};

autoSlide();


const slideImage = () => {
  
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
 
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};


const updateClick = (e) => {
  
  clearInterval(intervalId);
  
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
  
  autoSlide();
};


buttons.forEach((button) => button.addEventListener("click", updateClick));


wrapper.addEventListener("mouseover", () => clearInterval(intervalId));

wrapper.addEventListener("mouseleave", autoSlide);
