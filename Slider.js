let slideIndex = 0;
let slides = document.querySelectorAll(".slides img");
let intervalId = null;

document.addEventListener("DOMContentLoaded", intializeSlider);

function intializeSlider(){
    if(slides.length>0){
        slides[slideIndex].classList.add("display");
        intervalId = setInterval(nextSlide, 3000);
    }
}

function showSlide(index){
    if(index>=slides.length){
        slideIndex = 0;
    }
    if(index<0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("display");
    });
    slides[slideIndex].classList.add("display");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}