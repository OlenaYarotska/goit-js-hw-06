const inputWindow = document.querySelector('#validation-input');
const ValidNumber = parseInt(inputWindow.dataset.length);


function inputValidation(input) {
    const inputOn = input.target.value.trim().length;
    inputWindow.classList.add('invalid');

    if (inputOn === ValidNumber) {
        inputWindow.classList.replace('invalid', 'valid');
        return
    }
    inputWindow.classList.replace('valid', 'invalid');
};

inputWindow.addEventListener('blur', inputValidation);