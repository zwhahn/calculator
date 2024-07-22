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
        return 'ERROR: Operator not recognized';
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

function updateOperator(operation){
    operator = operation;
    console.log(operator);
    console.log(firstNumber);
    return;
}

const numBtns = document.querySelectorAll(".num")
numBtns.forEach(numBtn => {
    numBtn.addEventListener("click", () => getValue(numBtn.innerHTML))  
})

const opBtns = document.querySelectorAll(".operation")
opBtns.forEach(opBtn => {
    opBtn.addEventListener("click", () => updateOperator(opBtn.innerHTML))
})

const equalBtn = document.getElementById("equal")
equalBtn.addEventListener("click", () => updateDisplay(operate(firstNumber, operator, secondNumber)))

const display = document.getElementById("display")

//click firstNumber
    //update firstNumber
//click operator
    // add operator
    // clear display
//click secondNumber
    // update secondNumber
//click equal
    //run operator
    //update firstNumber with sum

//clear
    //clears all values

