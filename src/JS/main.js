const arr = document.querySelectorAll('.cua')

const items = [
    {
        id: 0,
        name: 'huou'
    },
    {
        id: 1,
        name: 'holo'
    },
    {
        id: 2,
        name: 'ga'
    },
    {
        id: 3,
        name: 'ca'
    },
    {
        id: 4,
        name: 'cua'
    },
    {
        id: 5,
        name: 'tom'
    },

]

let counts = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
};

let player = {
    "point": 10000,
    setPoint: (n) => {
        return this.point = n
    }
}



function onclickHandler() {
    let result = []
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * 5)
        result.push(items[randomIndex].name)
    }
    displayResult(result)
}

function displayResult(result) {
    console.log(result.toString());
}



// function increaseCount(spanId) {
//     counts[spanId]++;
//     document.getElementById(spanId).innerHTML = counts[spanId];
// }
const value = document.getElementById('point')
value.innerHTML = `Player point: ${player.point}`
function playerSelection(animal) {
    let newText
    let newCount
    let point = player.point
    let selection
    if (player.point >= 1000) {
        
        selection = document.getElementById(`${animal}`)
        console.log(selection);
        newCount = document.createElement("span");
        newCount.className = 'overlay-text'
        newText = document.createTextNode(`${++counts[animal]}`) //update count number
        player.point = player.point - 1000
        console.log(counts[0]);
        newCount.appendChild(newText)
        selection.parentNode.insertBefore(newCount, selection)
        if (newCount.previousSibling) {
            newCount.parentNode.removeChild(newCount.previousSibling) //remove previous span
        }
        player.setPoint(player.point)
        value.innerHTML = `Player point: ${player.point}`
        console.log(player.point);
    }

}