var firstNumber;
var secondNumber;
var operator;
var solution;

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
        if (b === 0){
            return "Can't divide by 0";
        }
        return divide(a, b);
    }
    else {
        return '';
    }
}

function getValue(btnValue){
    if (operator === undefined){
        firstNumber = btnValue;
        console.log(`first value: ${firstNumber}`);
        return;
    } else if (secondNumber === undefined){
        secondNumber = btnValue;
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
// clearBtn.addEventListener("click", () => updateDisplay(''))


const display = document.getElementById("display")