window.onload = Init;

let isFirstDigitClick = true

const displayElement = document.getElementById("display")

function onButtonClick(event) {
    console.log(event.target.innerText)
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
}
