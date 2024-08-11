// Задача 9. Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.

function getNegativeTemperatureNum(indicationNum) {
	let countNegativeTemp = 0
	let indicationTemp = 0
	for (let num = 1; num <= indicationNum; num++) {
		indicationTemp = parseInt(prompt(`Введіть показники температури №${num} в градусах Цельсія.`))
		if (indicationTemp < 0)
			countNegativeTemp++
	}
	return countNegativeTemp
}

let indicationNum = parseInt(prompt(`Введіть кількість показників температури`))

document.write(`Всього було введено ${indicationNum} показників температури<br><br>`)
document.write(`Кількість від’ємних показів температури дорівнює ${getNegativeTemperatureNum(indicationNum)}<br><br>`)