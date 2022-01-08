// Navigation Button Carousel
var tracker = 0;
var carouselElements = document.querySelectorAll(".carousel-item");
var navNext = document.querySelector('.arrow-right');
var navPre = document.querySelector('.arrow-left');
navPre.addEventListener('click',function(){
    tracker = ((tracker-1)>=0?(tracker-1):carouselElements.length-1) % (carouselElements.length);
    document.querySelector('.carousel').scrollTo({
        left:carouselElements[tracker].offsetLeft,
        behavior: 'smooth'
    });
});
navNext.addEventListener('click',function(){
    tracker = (tracker+1) % (carouselElements.length);
    document.querySelector('.carousel').scrollTo({
        left:carouselElements[tracker].offsetLeft,
        behavior: 'smooth'
    });
});
//Carousel End
//Nav Bar hamburger
var burger = document.querySelector('.fa-bars');
burger.addEventListener('click',()=>{
    var navSideBars = document.querySelector('.nav-links');
    navSideBars.classList.toggle("hide");
});