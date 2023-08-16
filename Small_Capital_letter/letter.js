const inputValue = document.getElementById('input');
const buttonPal = document.getElementById('check');
const small = document.getElementById('small');
const capital = document.getElementById('capital');

buttonPal.addEventListener('click', ()=> {
    const val = inputValue.value;
    let s = 0;
    let c = 0;
    for(let i = 0; i<val.length; i++){
        if(val[i] === 'A' || val[i] === 'Z'){
            s++;
            small.innerHTML = "Small: " + s;
        }else {
            c++;
            capital.innerHTML = "Capital " + c;
        }
    }
});