const screen = document.querySelector('#screen');
const numButtons = document.querySelectorAll('[data-selection]');
const operaterButtons = document.querySelectorAll('[data-key]');
const equals = document.querySelector('[data-equals]');
const memory = document.querySelector('[data-ac]');
const backspace = document.querySelector('[data-backspace]')

let DISPLAYVALUE = ''
let SECONDNUMBER = ''
let array = []

numButtons.forEach(numButton => {
    numButton.addEventListener('click', () => {
        const number = numButton.dataset.selection
        display(number)
    });
});

function display(number) {
    if (number === '.' && DISPLAYVALUE.includes('.')) return;
    DISPLAYVALUE += number;
    screen.innerHTML = DISPLAYVALUE;
};

operaterButtons.forEach(operaterButton => {
    operaterButton.addEventListener('click', e => {
        OPERATOR = operaterButton.dataset.key
        array.push(DISPLAYVALUE)
        array.push(OPERATOR)
        SECONDNUMBER = DISPLAYVALUE
        DISPLAYVALUE = ''
    });
});

equals.addEventListener('click', () => {
    array.push(DISPLAYVALUE)
    screen.innerHTML = DISPLAYVALUE;
    operate(array)
    
});

backspace.addEventListener('click', () => {
    let index = DISPLAYVALUE.length;
    DISPLAYVALUE = DISPLAYVALUE.slice(0, index - 1)
    screen.innerHTML = DISPLAYVALUE
});

memory.addEventListener('click', e => {
    DISPLAYVALUE = ''
    SECONDNUMBER = ''
    array = []
    screen.innerHTML = DISPLAYVALUE
});

function operate(array) {
    let product = eval(array.join(' '))
    screen.innerHTML = product
}
