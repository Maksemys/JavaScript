"use strict"
// 8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

let arrCarsNum = ['AX2045BC', 'AA3122BH', 'BH3245OK', 'BI2343KI', 'AA7889HU', 'AX8765NA', 'CA9988DA']

// if(confirm('Почати тестування?')) { 

// фільтрація елементів масиву
const arrCarsNumFirstA = arrCarsNum.filter(element => 
	element [0] === 'A'
)

document.write(`Масив: [${arrCarsNum}]<br><br>`)
document.write(`починаються на «А»: [${arrCarsNumFirstA}]<br><br>`)

// }