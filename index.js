// Write your solution here!  

const name = ["Guadalupe", "Ollie", "Aki"];

function writeCards(name, event) {
    let newArray = [];
    for (let i = 0; i < name.length; i++) {
        newArray.push((`Thank you, ${name[i]}, for the wonderful ${event} gift!`))
    }
    return newArray
}
console.log(writeCards(["Gaudalupe", "Ollie", "Aki"], "surprise"));


const assignedNumber = 10;
function countDown(assignedNumber) {
    while (assignedNumber >= 0) {
        console.log(assignedNumber--)
    }
}
countDown(10);