window.onload = Init;
let number1 = "0"
let isFirstDigitClick = true
let lastOperatorClicked = null

const displayElement = document.getElementById("display")

function onButtonClick(event) {
    console.log(event.target.innerText)
}

function onEqualButtonClick(event) {
    const result = eval(number1 + lastOperatorClicked + displayElement.innerText)
    console.log(result)
    displayElement.innerText = result
}

function onOperatorButtonClick(event) {
    lastOperatorClicked = event.target.id
    console.log(lastOperatorClicked, "operatorkliknięty")
    number1 = displayElement.innerText
    isFirstDigitClick = true
}

function onDigitButtonClick(event) {
    console.log(event.target.innerText, "digitCliknięty")

    if (isFirstDigitClick === true) {
        displayElement.innerText = event.target.innerText
        isFirstDigitClick = false
    } else {
        displayElement.innerText = displayElement.innerText + event.target.innerText
    }
}

function Init(event) {
    const buttons = document.getElementsByClassName("button")
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i]
        button.onclick = onButtonClick
    }

    const digitButtons = document.getElementsByClassName("digitButton")
    for (let i = 0; i < digitButtons.length; i++) {
        const button = digitButtons[i]
        button.onclick = onDigitButtonClick
    }

    const operatorButtons = document.getElementsByClassName("operatorButton")
    for (let i = 0; i < operatorButtons.length; i++) {
        const operatorButton = operatorButtons[i]
        operatorButton.onclick = onOperatorButtonClick
    }

    const equalButton = document.getElementById("equal")
    equalButton.onclick = onEqualButtonClick
}

