var buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button =>{
    var contents = document.querySelectorAll('.content p');
    button.addEventListener('click',(event)=>{
        document.querySelector('.content').scrollTo({
            left:contents[event.target.getAttribute('data-id')].offsetLeft ,
            behavior: 'smooth'
        });
    });
});
