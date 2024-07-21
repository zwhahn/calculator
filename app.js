var firstNumber;
var secondNumber;
var operator;

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
        if (b === 0){
            return "Can't divide by 0";
        }
        return divide(a, b);
    }
    else {
        return 'ERROR: Operator not recognized';
    }
}

function getValue(buttonValue){
    if (operator === undefined){
        firstNumber = buttonValue;
        console.log(`first value: ${firstNumber}`);
        return;
    } else if (secondNumber === undefined){
        secondNumber = buttonValue;
        console.log(`second value: ${secondNumber}`);
        return;
    }
    console.log("both numbers updated")
    return;

}

function updateOperator(operation){
    operator = operation;
    return;
}

const numButtons = document.querySelectorAll(".num")
numButtons.forEach(numButton => {
    numButton.addEventListener("click", () => getValue(numButton.innerHTML))  
})

const opButtons = document.querySelectorAll(".operation")
opButtons.forEach(opButton => {
    opButton.addEventListener("click", () => updateOperator(opButton.innerHTML))
})


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

