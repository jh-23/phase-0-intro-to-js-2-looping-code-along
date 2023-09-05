const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";

function writeCards(names, event) {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));


const number = 10;
function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}