const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const result = document.getElementById("result");
const calcBtn = document.getElementById("calcBtn");

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }

function divide(a, b) {
    if (b === 0) {
        alert("不能除以 0");
        return null;
    }
    return a / b;
}

// 按鈕文字跟著選項變
operator.addEventListener("change", function () {
    switch (operator.value) {
        case "+": calcBtn.textContent = "Add"; break;
        case "-": calcBtn.textContent = "Subtract"; break;
        case "*": calcBtn.textContent = "Multiply"; break;
        case "/": calcBtn.textContent = "Divide"; break;
    }
});

calcBtn.addEventListener("click", calculate);

function calculate() {
    const a = Number(num1.value);
    const b = Number(num2.value);

    if (isNaN(a) || isNaN(b)) {
        result.textContent = "Invalid Input";
        return;
    }

    let ans;

    switch (operator.value) {
        case "+": ans = add(a, b); break;
        case "-": ans = subtract(a, b); break;
        case "*": ans = multiply(a, b); break;
        case "/": ans = divide(a, b); break;
    }

    if (ans !== null) {
        result.textContent = ans.toFixed(2);
    }
}
