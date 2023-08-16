const showTag = document.getElementById('randNumber');
const randomBtn = document.getElementById('btnRandom');

randomBtn.addEventListener('click', ()=> {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    showTag.innerHTML = randomNumber;
});