var bill = document.getElementById('price');
var no = document.getElementById('people');
var tip = document.getElementById('tip');
var total = document.getElementById('total');
var reset = document.getElementById('reset');
var priceItem = document.getElementById('price-item');
var percent= 0;
var custom = document.getElementById('custom');
custom.addEventListener('change',()=>{
    if(last !==null)
        last.classList.remove('price-item-click');
   percent = custom.value;
});

no.addEventListener('change',()=>{
    var amount = bill.value;
    var pep = no.value;
    var tipAmount = (percent/100) * amount;
    total.innerHTML = "$"+(Number(amount)+Number(tipAmount));
    tip.innerHTML = "$"+tipAmount;
});
var last = null;
function preGen(elem)
{
    if(last !==null)
        last.classList.remove('price-item-click');
    percent = elem.getAttribute('value');
    elem.classList.add('price-item-click');
    if( custom.value >0)
        custom.value=0;
    last = elem;
}
reset.addEventListener('click',()=>{
    percent=0;
    bill.value=0;
    no.value=0;
    custom.value=0;
});
