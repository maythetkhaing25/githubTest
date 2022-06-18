const inputbox=document.querySelector('.inputbox');
const input=document.querySelector('.input');
const btn=document.getElementById('btn');

btn.addEventListener("click",function(){
    colour=input.value;
    inputbox.style.background= colour;
    btn.style.background= colour;


});