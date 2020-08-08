const screen = document.querySelector('#screen')
const numButtons = document.querySelectorAll('[data-selection]')
const operaterButtons = document.querySelectorAll('#operator')
const equals = document.querySelector('#equals')

let DISPLAYVALUE = ''
let FIRSTNUMBER = ''
let SECONDNUMBER = ''
let OPERATOR = ''


operaterButtons.forEach(operaterButton => {
    operaterButton.addEventListener('click', e => {
        OPERATOR = operaterButton.dataset.key
        SECONDNUMBER = DISPLAYVALUE
        DISPLAYVALUE = ''
    });
});

equals.addEventListener('click', e => {
    operate(OPERATOR, FIRSTNUMBER, SECONDNUMBER);
    screen.innerHTML = DISPLAYVALUE;
});



numButtons.forEach(numButton => {
    numButton.addEventListener('click', e => {
        const number = numButton.dataset.selection
        display(number)  
    });
});

function display(input) {
    FIRSTNUMBER = input
    DISPLAYVALUE += input;
    screen.innerHTML = DISPLAYVALUE;
};




function operate(operater, a, b) {
    if (operater === '+') {
        let num1 = parseFloat(a);
        let num2 = parseFloat(b)
        DISPLAYVALUE = add(num1, num2)
    }
    else if (operater === '-') {
        DISPLAYVALUE = subtract(a, b);
    }
    else if (operater === '*') {
        DISPLAYVALUE = multiply(a, b);
    }
    else if (operater === '**') {
        DISPLAYVALUE = power(a, b);
    }
    else if (operater === '/') {
        DISPLAYVALUE = divide(a, b)
    }
    else if (operater === '!') {
        DISPLAYVALUE = factorial(a);
    }
}


function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function divide(a, b) {
    return a / b
}
function multiply(a, b) {
    return a * b
}
function power(a, b) {
    return a ** b
}
function factorial(x) {
    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
}
