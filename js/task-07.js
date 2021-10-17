const ref = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
};
ref.input.addEventListener("input", changeFontSize);

function changeFontSize(event) {
    ref.span.style.fontSize = event.target.value + 'px';
};