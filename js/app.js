btns = document.querySelectorAll('.btn');
inputBox = document.querySelector('.input');



btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        // console.log(btn);
        const value=btn.getAttribute('num');
        // console.log(value);
        
            if(value === "C"){
                inputBox.value = "";
            }else if(value === '='){
                inputBox.value=eval(inputBox.value);
            }else{
                inputBox.value += value;
            }
        
    })
});


