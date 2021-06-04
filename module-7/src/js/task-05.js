const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const writeNameFn = () => {
    span.textContent = input.value;
    if(span.textContent === '') {
        span.textContent = 'незнайомець';
    }
};

input.addEventListener('input', writeNameFn)