//Flying balls 


const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
;

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  });

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

// inspo fra denne video: https://www.youtube.com/watch?v=7eE8xPyXSR4&list


// Nav stuff
// Hidden nav stuff
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', function() {
  nav.classList.toggle('show-nav');
});

document.addEventListener('click', function(event) {
    const isNavOpen = nav.classList.contains('show-nav');
    const isClickInsideNav = nav.contains(event.target);
    const isClickInsideMenuBtn = menuBtn.contains(event.target);
  
    if (isNavOpen && !isClickInsideNav && !isClickInsideMenuBtn) {
      nav.classList.remove('show-nav');
    }
  });
  


// Nav effekts 
const navItems = document.querySelectorAll('.nav__listItem');

navItems.forEach(item => {
  item.addEventListener('mouseover', function() {
    navItems.forEach(item => item.classList.add('inactive'));
    this.classList.remove('inactive');
    this.classList.add('active');
  });
  
  item.addEventListener('mouseout', function() {
    navItems.forEach(item => item.classList.remove('inactive'));
    this.classList.remove('active');
  });
});



// Card slider 
//const slider = document.querySelector('.trends__slider');
//const slides = document.querySelectorAll('.trends__slider-element');

//slider.addEventListener('click', event => {
  //const activeSlide = document.querySelector('.trends__slider-element.active');
  //const nextSlide = activeSlide.nextElementSibling || slides[0];
  //activeSlide.classList.remove('active');
  //nextSlide.classList.add('active');
//});


// Animated text on the front Inspo: https://www.youtube.com/watch?v=nxoHR9lltK0&ab_channel=CodingLab

const text = document.querySelectorAll(".moveText");

const textLoad = () => {
  setTimeout(() => {
    text.forEach(text => {
      text.textContent = "UI DESIGNER";
    });
  }, 0);
  setTimeout(() => {
    text.forEach(text => {
      text.textContent = "UX DESIGNER";
    });
  }, 4000);
  setTimeout(() => {
    text.forEach(text => {
      text.textContent = "CONTENT CREATOR";
    });
  }, 8000);
   setTimeout(() => {
    text.forEach(text => {
      text.textContent = "FRONTEND DEVELOPER";
    });
  }, 8000);
}

textLoad();
setInterval(textLoad, 16000);


// Javascript Sidens indhold

//counter
let counterNumber = document.querySelector(".counter__number")
let counterMinus = document.querySelector(".counter__minus")
let counterPlus = document.querySelector(".counter__plus")

let count = 0;


counterPlus.addEventListener("click", ()=>{
  count++;
  counterNumber.innerHTML = count;
});

counterMinus.addEventListener("click", ()=>{
  count--;
  counterNumber.innerHTML = count;
});
function updateNumber(){
  counterNumber.innerHTML = count;
}
updateNumber();



// Quiz link
const quizLink = document.querySelector(".quiz-link__button")

function openQuizLink(){
  window.open("https://maglut1.github.io/javascriptQuiz.html")
}

// Selve quizzen
