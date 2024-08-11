// Задача 10. Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.

function getPositiveTemperatureAverage(indicationNum) {
	let sumPositiveTemp = 0
	let countPositiveTemp = 0
	let indicationTemp = 0
	let middleYearTemp = 0
	for (let num = 1; num <= indicationNum; num++) {
		indicationTemp = parseInt(prompt(`Введіть показники температури №${num} в градусах Цельсія.`))
		if (indicationTemp > 0)
			countPositiveTemp++
		if (indicationTemp > 0)
			sumPositiveTemp += indicationTemp
	}
	middleYearTemp = sumPositiveTemp / countPositiveTemp
	return middleYearTemp
}


let indicationNum = parseInt(prompt(`Введіть кількість показників температури`))

document.write(`Всього було введено ${indicationNum} показників температури<br><br>`)
document.write(`Cереднє значення для додатних показів температур дорівнює ${getPositiveTemperatureAverage(indicationNum)}<sup>o</sup>C`)