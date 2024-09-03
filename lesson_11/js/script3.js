"use strict"
//Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.





// if(confirm('Почати тестування?')) { 

let battlefield = [
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0]
]



function pushShipsRandom(battlefield, rows = 6, columns = 6, ships = 5) {
	for (let num = 0; num < ships; ) {
		// Вибираємо випадкові індекси для рядка і стовпця
		let rowIndex = Math.floor(Math.random() * rows)
		let columnIndex = Math.floor(Math.random() * columns)
		if (battlefield[rowIndex][columnIndex] === 1)
			continue
		else if (battlefield[rowIndex][columnIndex] === 0) {
			// Встановлюємо одиницю в масиві
			battlefield[rowIndex][columnIndex] = 1
			num++
		}
		
	}
	return battlefield
}

console.log(pushShipsRandom(battlefield))

let userShots = 10
let ships = 5

while (userShots > 0 && ships > 0) {
	let userShotRow = parseInt(prompt('Введіть номер рядка для пострілу від 0 до 5'))
	let userShotColumn = parseInt(prompt('Введіть номер колонки для пострілу від 0 до 5'))
	userShots--
	if (battlefield[userShotRow][userShotColumn] === 1) {
		ships--
		alert(`Ви влучили! Кораблей залишилось ${ships}`)
	} else if (battlefield[userShotRow][userShotColumn] === 0) {
		alert(`Ви Не влучили! Спробуйте ще раз! Пострілів залишилось ${userShots}`)
	}
}

if (ships === 0) {
	alert('Ви виграли! Ви знищили всі кораблі!');
} else if (userShots === 0) {
	alert('Ви програли! У вас закінчилися постріли.');
}


// }

