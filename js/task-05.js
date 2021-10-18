const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', inputValue);

function inputValue(event) {
    const value = event.target.value.trim();

    if (!value) {
        refs.nameOutput.textContent = 'Anonymous';
    }
    else {
        refs.nameOutput.textContent = value;
    }
    }
    









