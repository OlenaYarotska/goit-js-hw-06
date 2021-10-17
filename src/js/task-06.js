const inputWindow = document.querySelector('#validation-input');

inputWindow.addEventListener('blur', inputValidation);
function inputValidation(input) {
    const inputOn = input.target;
    if (inputOn.value.length === inputOn.dataset.length) {
        inputWindow.classList.add('valid')
        inputWindow.classList.remove('invalid')
        return
    }
    inputWindow.classList.add('invalid')
    }
