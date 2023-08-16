const inputValue = document.getElementById('input');
const buttonPal = document.getElementById('check');
const showVal = document.getElementById('displayPalindrome');


buttonPal.addEventListener('click', () => {
    let val = inputValue.value;
    const reverse =[...val].reverse().join('');
    if(val === reverse){
        showVal.innerHTML = "palindrome";
    }else{
        showVal.innerHTML = "Not Palindrome"
    }

    inputValue.value = "";
})