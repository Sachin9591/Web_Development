let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
let resetScreen = false;
let numButtons = document.getElementsByClassName("numButton");
let opButtons = document.getElementsByClassName("opButton");
let eqButton = document.getElementsByClassName("eqButton")[0];
let clearButton = document.getElementsByClassName("clearButton")[0];
let displays = document.getElementById('display');


function updateDisplay(x){
    displays.textContent = x;
}


for(let i=0; i<numButtons.length; i++){
    numButtons[i].addEventListener("click", function(){
        if(operator == ""){
            firstNumber += this.textContent;
            updateDisplay(firstNumber);
        }else{
            secondNumber += this.textContent;
            updateDisplay(secondNumber);
        }
    });
}

for (let i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener("click", function() {
        operator = this.textContent;
    });
}

eqButton.addEventListener("click", function() {
    result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    updateDisplay(result);
});

clearButton.addEventListener("click", function() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    updateDisplay(0);
});


function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;;
        case '/':
            if(b == 0) {
                return 'Error! Division by zero is undefined';
            } else {
                return a / b;
            }
        default:
            return null;
    }
}
