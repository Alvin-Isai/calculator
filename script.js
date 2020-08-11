const screen = document.querySelector('#numbers');
const numButtons = document.querySelectorAll('[data-selection]');
const operaterButtons = document.querySelectorAll('[data-key]');
const equals = document.querySelector('[data-equals]');
const resetMemory = document.querySelector('[data-ac]');
const backspace = document.querySelector('[data-backspace]')

let displayValue = ''
let secondNumber = ''
let array = []

numButtons.forEach(numButton => {
    numButton.addEventListener('click', () => {
        const number = numButton.dataset.selection
        display(number)
    });
});

function display(number) {
    if (number === '.' && displayValue.includes('.')) return;
    displayValue += number;
    screen.innerHTML = displayValue;
};

operaterButtons.forEach(operaterButton => {
    operaterButton.addEventListener('click', e => {
        OPERATOR = operaterButton.dataset.key
        array.push(displayValue)
        array.push(OPERATOR)
        secondNumber = displayValue
        displayValue = ''
    });
});

equals.addEventListener('click', () => {
    array.push(displayValue)
    screen.innerHTML = displayValue;
    operate(array)
    
});

backspace.addEventListener('click', () => {
    let index = displayValue.length;
    displayValue = displayValue.slice(0, index - 1)
    screen.innerHTML = displayValue
});

resetMemory.addEventListener('click', e => {
    displayValue = ''
    secondNumber = ''
    array = []
    screen.innerHTML = displayValue
});

function operate(array) {
    let product = eval(array.join(' '))
    screen.innerHTML = product
}
