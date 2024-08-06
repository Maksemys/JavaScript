// Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель. 

//кількість рядків та колонок на полі
let fieldRow = 5
let fieldColumn = 5
//кількість снарядів
let userShot = 3
//росташування корабля
let shipRowPosition = Math.floor(Math.random() * fieldRow) + 1
let shipColPosition = Math.floor(Math.random() * fieldColumn) + 1

for (let i = userShot; i >= 1; i--){
	//Вводимо куди будемо стріляти
	let shotRowPosition = parseInt(prompt(`Введіть номер рядка (1-${fieldRow }) для пострілу`))
	let shotColPosition = parseInt(prompt(`Введіть номер стовпця (1-${fieldColumn}) для пострілу`))
	if (shotRowPosition === shipRowPosition && shotColPosition === shipColPosition) {
		alert('Вітаю! Ви попали в корабель')
		break
	} else
	alert(`У вас лишилось ${i-1} пострілів`)
}
document.write(`Корабель був росташований рядок №${shipRowPosition}, колонка №${shipColPosition}`)
