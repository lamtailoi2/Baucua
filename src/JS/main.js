const arr = document.querySelectorAll('.cua')

const item = ["huou", "holo", "cua", "ga", "ca", "tom"]

function onclickHandler() {
    let result = []
    for (let i =0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * 6)
        result.push(item[randomIndex])
    }
    displayResult(result)
}

function displayResult(result) {
    console.log(result.toString());
}

function playerSelection() {
    let selector = 
}