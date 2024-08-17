"use strict"
// 9. Дано масив імен. Сформувати масив з перших літер цих імен.

let arrNames = ['Polina', 'Oleksiy', 'Petro', 'Oksana', 'Viktory', 'Olena', 'Anna']

// if(confirm('Почати тестування?')) { 

// створення нового масиву з правками
const arrFirstLetter = arrNames.map(element => 
	element [0]
)

document.write(`Масив: [${arrNames}]<br><br>`)
document.write(`масив з перших літер: [${arrFirstLetter}]<br><br>`)

// }