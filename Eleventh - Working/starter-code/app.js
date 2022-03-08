var navIcon = document.querySelector('.icon');

const throttleFunction=(func, delay)=>{
 
    // Previously called time of the function
    let prev = 0;
    return (...args) => {
      // Current called time of the function
      let now = new Date().getTime();

      // Logging the difference between previously
      // called and current called timings
      console.log(now-prev, delay);
       
      // If difference is greater than delay call
      // the function again.
      if(now - prev> delay){
        prev = now;

        // "..." is the spread operator here
        // returning the function with the
        // array of arguments
        return func(...args); 
      }
    }
  }
navIcon.addEventListener('click',throttleFunction(()=>{
    if(navIcon.getAttribute('data-lable') === "open"){
        var navIconImage = document.querySelector('.icon img');
        var navBar = document.querySelector('nav');
        navBar.style.display="flex";
        navIcon.style.position="relative";
        navIcon.style.zIndex="2";
        navBar.classList.remove('animation-for-nav-close');
        navBar.classList.add('animation-for-nav-open');
        navIcon.setAttribute('data-lable','close');
        navIconImage.setAttribute('src','./assets/close-svg.svg')
    }
    else{
        var navIconImage = document.querySelector('.icon img');
        var navBar = document.querySelector('nav');
        navBar.classList.remove('animation-for-nav-open');
        navBar.classList.add('animation-for-nav-close');
        setTimeout(()=>{
            navIcon.setAttribute('data-lable','open');
            navIconImage.setAttribute('src','./assets/hamburger-svg.svg')
        },1000)
    }
},2000));