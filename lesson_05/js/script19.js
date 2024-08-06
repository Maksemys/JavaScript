//Задача 16. Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.

let totalSum = 0
let weeksNum = parseInt(prompt(`Введіть кількість тижднів`))

for (let i = 1; i <= weeksNum; i++) {
	let weekSum = 0
	for (let dayNum = 1; dayNum <= 7; dayNum++) {
		let daySum = parseFloat(prompt(`Введіть прибуток тиждень №${i} день №${dayNum}`))
		if (isNaN(daySum)) {
			alert('Не коректні данні, введіть ще раз')
			dayNum--
			continue
		}
		weekSum += daySum
	}
	totalSum  += weekSum
	document.write(`Сума тиждня №${i} дорівнює ${weekSum}<br>`)
}
document.write(`Загальна сума дорівнює ${totalSum}`)


