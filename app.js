var firstNumber = null;
var secondNumber = null;
var operator = null;
var solution = null;

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

function updateDisplay(solution){
    display.innerText = solution;
    return;
}

function operate(a, operator, b){
    if(a && operator && b){
        a = Number(a)
        b = Number(b)
        switch(operator){
            case 'add':
                solution = add(a, b);
                break;
            case 'subtract':
                solution = subtract(a, b);
                break;
            case 'multiply':
                solution = multiply(a, b);
                break;
            case 'divide':
                solution = divide(a, b);
                break;
            default:
                solution = '';
        }
        updateDisplay(solution);
        firstNumber = solution;
        operator = null;
        secondNumber = null;
        return;
    }
}

function getValue(btnValue){
    if (!firstNumber){
        firstNumber = btnValue;
        updateDisplay(firstNumber);
        console.log(`first value: ${firstNumber}`);
        return;
    } else if (operator && firstNumber){
        secondNumber = btnValue;
        updateDisplay(secondNumber);
        console.log(`second value: ${secondNumber}`);
        return;
    }
    console.log("both numbers updated")
    return;
}

function getOperator(operation){
    operator = operation;
    console.log(operator);
    return;
}

// Clear one value at a time, not all values
function clear(){
    if (!operator){
        updateDisplay('');
        firstNumber = null;
        return;
    }
    else if (!secondNumber){
        operator = null;
        return;
    }
    else {
        updateDisplay('');
        secondNumber = null;
        solution = null;
        return;
    }
}

const numBtns = document.querySelectorAll(".num")
numBtns.forEach(numBtn => {
    numBtn.addEventListener("click", () => getValue(numBtn.innerHTML))  
})

const opBtns = document.querySelectorAll(".operation")
opBtns.forEach(opBtn => {
    opBtn.addEventListener("click", () => getOperator(opBtn.innerHTML))
})

const equalBtn = document.getElementById("equal")
equalBtn.addEventListener("click", () => operate(firstNumber, operator, secondNumber))

const clearBtn = document.getElementById("clear")
clearBtn.addEventListener("click", () => clear())

const display = document.getElementById("display")