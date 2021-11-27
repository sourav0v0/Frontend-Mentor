console.log(" hewhwe we ");
var drag = document.getElementById('progress-icon');

const event = new Event('onHoldRelease')

var b = false;

drag.addEventListener('click',(event)=>{
    
   
    var x= Document.clientX;
    var y =event.clientY;
    console.log(x + "  "+ y);

});