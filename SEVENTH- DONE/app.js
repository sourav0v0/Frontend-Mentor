
var nav = document.getElementById('m-nav');
$(document).ready(function(){
    var boxWidth = $(window).width() <= 400 ? $( window ).width() : ($( window ).width()/100)*35;
    $("#hamburger").click(function(){
        nav.classList.add('heading-col-elements-active');
        $("#m-nav").animate({
            width: boxWidth
        },1000);
    });
    $("#cross").click(function(){
        $("#m-nav").animate({
            width: 0
        },1000,function(){
            nav.classList.remove('heading-col-elements-active');
        });
        
    });
});