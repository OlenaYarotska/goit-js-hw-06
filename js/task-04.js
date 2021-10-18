const decrementBtn = document.querySelector('button[data-action="decrement"]');
const inctrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');
let counterValue = 0;

function decrement() {
    counter.textContent = counterValue -= 1;
};

function increment() {
     counter.textContent = counterValue += 1;
};
decrementBtn.addEventListener('click', decrement);
inctrementBtn.addEventListener('click', increment);

console.log(counter.textContent);

