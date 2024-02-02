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
    cnt1: 0,
    cnt2: 0,
    cnt3: 0,
    cnt4: 0,
    cnt5: 0,
    cnt6: 0,
};

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



function increaseCount(spanId) {
    counts[spanId]++;
    document.getElementById(spanId).innerHTML = counts[spanId];
}

function playerSelection(animal) {
    let counts = [];
    increaseCount();
    let selection = document.querySelector(`.${animal}`)  
    

}