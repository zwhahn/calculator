var firstNumber = 0;
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

function operate(){
    a = firstNumber;
    b = secondNumber;
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
        secondNumber = null;
        operator = null;
        solution = null;
        console.log(operator);
        return;
    }
    return;
}

function getValue(btnValue){
    if (!operator){
        if (!firstNumber){
            firstNumber = btnValue;
        }
        else {
            firstNumber += btnValue;
        }
        updateDisplay(firstNumber);
        console.log(`first value: ${firstNumber}`);
        return;
    } 
    else if (operator && firstNumber){
        if(!secondNumber){
            secondNumber = btnValue;
        }
        else {
            secondNumber += btnValue;
        }
        updateDisplay(secondNumber);
        console.log(`second value: ${secondNumber}`);
        return;
    }
    console.log("both numbers updated")
    return;
}

function getOperator(operation){
    if(!firstNumber){
        return;
    }
    operator = operation;
    console.log(operator);
    return;
}

// Clear one value at a time, not all values
function clear(){
    console.log(`${operator}`)
    if (!operator){
        updateDisplay('');
        firstNumber = null;
        console.log(`no operator`)
        return;
    }
    else if (!secondNumber){
        updateDisplay('');
        operator = null;
        console.log(`no secondNumber`)
        return;
    }
    else {
        updateDisplay('');
        firstNumber = null;
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