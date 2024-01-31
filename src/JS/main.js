const arr = document.querySelectorAll('.cua')

const item = ["huou", "holo", "cua", "ga", "ca", "tom"]

function onclickHandler() {
    let dice1 = item[Math.floor(Math.random() * arr.length)]
    let dice2 = item[Math.floor(Math.random() * arr.length)]
    let dice3 = item[Math.floor(Math.random() * arr.length)]
    console.log(dice1, dice2, dice3)
    let result = []
    arr.forEach((el, index) => {
        if (index === dice1 || index === dice2 || index === dice3) {
            
            
        }
    });
    
    
    
}