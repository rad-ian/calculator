window.onload = Init;
function onButtonClick(event) {
    console.log(event.target.innerText)
}
function Init(event) {
    const buttons = document.getElementsByClassName("button")
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i]
        button.onclick = onButtonClick
    }
}
