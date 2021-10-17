const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};
const inputValue = newValue =>
refs.nameOutput.textContent = newValue.currentTarget.value.trim() || "Anonymous";
refs.nameInput.addEventListener('input', inputValue);

console.log(inputValue);








