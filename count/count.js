const counterEl = document.getElementById('count');
const IncrementEl = document.getElementById('increment');
const DecrementEl = document.getElementById('decrement');
const Reset = document.getElementById('reset');
let counter = 0;

IncrementEl.addEventListener('click', () => {
    counter++;
    counterEl.innerText = counter;
});

DecrementEl.addEventListener('click',() => {
    counter--;
    if(counter >= 0){
        counterEl.innerText = counter;
    }
})

Reset.addEventListener('click',() => {
      counter = 0;
      counterEl.innerText = counter;

})