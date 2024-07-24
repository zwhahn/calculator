var firstNumber = 0;
var secondNumber = null;
var operator = null;
var solution = null;
var operationBtn;

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
        operationBtn.disabled = false;
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
        // solution = null;
        console.log(operator);
        return;
    }
    return;
}

function getValue(btnValue){
    if (!operator && !solution){
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
    else if ((operator && firstNumber) || solution){
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

function getOperator(opBtn){
    if(!firstNumber){
        return;
    }
    updateDisplay('');
    operationBtn = opBtn;
    operator = opBtn.innerHTML;
    operationBtn.disabled = true;
    console.log(operator);
    return;
}

function clear(){
    solution = null;
    console.log(`operator ${operator}`)
    if(operator){
        operationBtn.disabled = false;
    }
    if (!operator){
        updateDisplay('');
        firstNumber = null;
        return;
    }
    else if (!secondNumber){
        updateDisplay('');
        operator = null;
        return;
    }
    else {
        updateDisplay('');
        firstNumber = null;
        secondNumber = null;
        return;
    }
}

const numBtns = document.querySelectorAll(".num")
numBtns.forEach(numBtn => {
    numBtn.addEventListener("click", () => getValue(numBtn.innerHTML))  
})

const opBtns = document.querySelectorAll(".operation")
opBtns.forEach(opBtn => {
    opBtn.addEventListener("click", () => getOperator(opBtn))
})

const equalBtn = document.getElementById("equal")
equalBtn.addEventListener("click", () => operate(firstNumber, operator, secondNumber))

const clearBtn = document.getElementById("clear")
clearBtn.addEventListener("click", () => clear())

const display = document.getElementById("display")