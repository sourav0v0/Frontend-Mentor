var navIcon = document.querySelector('.icon');
navIcon.addEventListener('click',()=>{
    if(navIcon.getAttribute('data-lable') === "open"){
        var navIconImage = document.querySelector('.icon img');
        var navBar = document.querySelector('nav');
        navBar.style.display="flex";
        navIcon.style.position="relative";
        navIcon.style.zIndex="1";
        navIcon.setAttribute('src',"")
        navBar.classList.add('animation-for-nav-open');
        navIcon.setAttribute('data-lable','close');
        navIconImage.setAttribute('src','./assets/close-svg.svg')
    }
    else{
        var navIconImage = document.querySelector('.icon img');
        var navBar = document.querySelector('nav');
        navBar.classList.remove('animation-for-nav');
        navBar.classList.add('animation-for-nav-close');
        setTimeout(()=>{
            navIcon.setAttribute('data-lable','open');
            navIconImage.setAttribute('src','./assets/hamburger-svg.svg')
        },1000)
    }
});