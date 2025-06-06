const input1 = document.getElementById("operand-a")
const input2 = document.getElementById("operand-b")
const dropdown= document.getElementById("operator")

const clearButton = document.getElementById("clear")
const storeButton = document.getElementById("store")
const calculateButton = document.getElementById("calculate")

const calculations = document.getElementById("calculations")
const lastResult = document.getElementById("lastResult")
const storedValue = document.getElementById("storedValue")

let result = null
let stored = null

function solve(a, b, operator) {
    let result = "none"
    if (+a && +b) {
        a = +a
        b = +b
        switch (operator) {
            case "+":
                result = a + b
                break
            case "-":
                result = a - b
                break
            case "*":
                result = a * b
                break
            case "/":
                result = a / b
                break
            case "%":
                result = a % b
                break
        }
    }
    return result
}

calculateButton.addEventListener('click', () => {
    let operandA = input1.value
    let operandB = input2.value
    const operator = dropdown.value
    if (!operandA || !operandB) {return}
    if (operandA === "stored") {operandA = stored}
    if (operandB === "stored") {operandB = stored}
    result = solve(operandA, operandB, operator)
    const calculation = document.createElement('p')
    if (result === "none") {
        calculation.textContent = result
    } else {
        calculation.textContent =`${operandA} ${operator} ${operandB} = ${result}`
    }
    calculations.prepend(calculation)
    lastResult.textContent = "result: " + result
})

storeButton.addEventListener('click', () => {
    if (storeButton.textContent === "Store") {
        stored = result
        storedValue.textContent = "stored: " + result
        storeButton.textContent = "Clear Store"
    } else {
        stored = null
        storedValue.textContent = "stored: none"
        storeButton.textContent = "Store"
    }
})

clearButton.addEventListener('click', () => {
    calculations.innerHTML = ""
    input1.value = ""
    input2.value = ""
    dropdown.value = "+"
    lastResult .textContent = "result: none"
    storedValue.textContent = "stored: none"
})