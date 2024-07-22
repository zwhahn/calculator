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
    a = Number(a)
    b = Number(b)
    switch(operator){
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            return '';
    }
}

function getValue(btnValue){
    if (!operator){
        firstNumber = btnValue;
        updateDisplay(firstNumber);
        console.log(`first value: ${firstNumber}`);
        return;
    } else if (!secondNumber){
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

function clear(){
    updateDisplay('');
    if (!operator || solution){
        firstNumber = null;
        return;
    }
    else if (!secondNumber || solution){
        operator = null;
        return;
    }
    else {
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
equalBtn.addEventListener("click", () => updateDisplay(operate(firstNumber, operator, secondNumber)))

const clearBtn = document.getElementById("clear")
clearBtn.addEventListener("click", () => clear())

const display = document.getElementById("display")