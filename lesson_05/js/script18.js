// Користувача поступово вводить показники температури протягом року. Знайти середню температуру.

let sumDayTemp = 0
let dayTemp = 0
let count = 0

for (let num = 1; num <= 12; num++) {
	dayTemp = parseInt(prompt(`Введіть показники температури в градусах Цельсія місяця №${num}.`))
	if (isNaN(dayTemp)) {
		alert('Не коректні данні, введіть ще раз')
		num--
		continue
	}
	sumDayTemp += dayTemp
	count++
	if (count === 12) {
		let middleYearTemp = sumDayTemp / count
		document.write(`Середня річна температура дорівнює ${middleYearTemp.toFixed(1)} <sup>o</sup>C`)
	}
}
