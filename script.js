// DOM queris:
const prevButton = document.querySelector(".slide-arrow-prev");
const nextButton = document.querySelector(".slide-arrow-next");
const slide = document.querySelector(".slide");
const slidesContainer = document.querySelector(".slides-container")

//tilføj eventlistener til de to knapper:
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

//funktioner af prev:

function prevSlide(){
    const slideWidth = slide.clientWidth;
    console.log(slideWidth);
    slidesContainer.scrollLeft -= slideWidth;
}



//funktioner af next:

function nextSlide(){
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
}