"use strict"
// 3 Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.

// if(confirm('Почати тестування?')) { 
// }
let userElementNum = parseInt(prompt('Скільки елементів?'))
const middleElement = userElementNum/2+0.5
let userArr = new Array(userElementNum).fill(1, 0, 5)
userArr.fill(7, 5, userElementNum+1)
document.write(`Масив: ${userArr}<br>`)
console.log(userArr)




