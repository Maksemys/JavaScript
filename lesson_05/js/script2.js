//Вивести на екран номери місяців весни і літа (від 3 до 8)
let yearTime
for (let monthNumber = 3; monthNumber <= 8; monthNumber++) {
	if (monthNumber == 3 && monthNumber <= 5) {
		yearTime = 'Весна'
	}
	if (monthNumber == 6 && monthNumber <= 8) {
		yearTime = 'Літо'
	}
	document.write(`Пора року ${yearTime} місяць №${monthNumber}<br>`)
}
