const inputValue = document.getElementById('input');
const buttonPal = document.getElementById('check');
const vowel = document.getElementById('vowel');
const cons = document.getElementById('consonant');

buttonPal.addEventListener('click', () => {
    let val = inputValue.value;
    let v = 0;
    let c = 0;
    for(let i = 0; i<val.length; i++){
        if(val[i] === 'a' || val[i] === 'e' || val[i] === 'i' ||val[i] === 'o' ||val[i] === 'u'){
            v++;
            vowel.innerHTML = "Vowel: " + v;
    
        }else {
            c++;
            cons.innerHTML = "Consonant: " + c;
        }
    }
    inputValue.value = "";
})