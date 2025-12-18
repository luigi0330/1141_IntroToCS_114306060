function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Error: Cannot divide by zero!");
        return null;
    }
    return a / b;
}

function calculate() {
    const num1Input = document.getElementById("num1").value;
    const num2Input = document.getElementById("num2").value;
    const operator = document.getElementById("operator").value;
    const resultDiv = document.getElementById("result");

    if (num1Input === "" || num2Input === "") {
        alert("Please enter both numbers.");
        return;
    }

    const num1 = parseFloat(num1Input);
    const num2 = parseFloat(num2Input);
    let result = 0;

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            if (result === null) return; 
            break;
        default:
            alert("Invalid Operation");
            return;
    }

    resultDiv.innerText = "Result = " + result.toFixed(2);
}