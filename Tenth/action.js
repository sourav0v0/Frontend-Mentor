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
var navSideBars = document.querySelector('.nav-links');
burger.addEventListener('click',()=>{
    navSideBars.classList.toggle("hide");
});
// Close Button 
var close = document.querySelector('.close-nav');
close.addEventListener('click',()=>{
    navSideBars.classList.toggle("hide");
});
// Adding In Input Box
var decrement = document.querySelector('.decrement');
var increment = document.querySelector('.increment');
var inputField = document.getElementById('quantity-data');
decrement.addEventListener('click',()=>{
    if(inputField.value >0)
        inputField.value -= 1;
});
increment.addEventListener('click',()=>{
    var value =inputField.value;
    inputField.value = Number(1)+Number(value);
});
