function add(a, b){
    return (a+b);
}

function subtract(a, b){
    return (a-b);
}

function multiply(a, b){
    return (a*b);
}

function divide(a, b){
    return (a/b);
}

var firstNumber;
var secondNumber;
var operator;

function operate(a, operator, b){
    if (operator === 'add'){
        return add(a, b);
    }
    else if (operator === 'subtract'){
        return subtract(a, b);
    }
    else if (operator === 'multiply'){
        return multiply(a, b);
    }
    else if (operator === 'divide'){
        return divide(a, b);
    }
    else {
        return 'ERROR: Operator not recognized'
    }
}

console.log(`addition(3,5): ${operate(3, 'add', 5)}`);
console.log(`subtract(5,3): ${operate(3, 'subtract', 5)}`);
console.log(`multiply(3,5): ${operate(3, 'multiply', 5)}`);
console.log(`divide(6,3): ${operate(6, 'divide', 3)}`);