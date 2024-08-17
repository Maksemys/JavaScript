"use strict"
// 2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
// if(confirm('Почати тестування?')) { 
// }
let userElementNum = parseInt(prompt('Скільки елементів?'))
const middleElement = userElementNum/2+0.5
let userArr = new Array(userElementNum).fill(1, 0, middleElement)
userArr.fill(7, middleElement, userElementNum+1)
document.write(`Масив: ${userArr}<br>`)
console.log(userArr)




