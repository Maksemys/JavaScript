// Задача 1. Створити функцію, яка за номером місяця повертає його назву.

function getMonthName() {
	let monthNum = parseInt(prompt('Введіть номер місяця'))
	let monthName
	switch (monthNum) {
		case 1: monthName = `Місяць №${monthNum} це Січень`
			break
		case 2: monthName = `Місяць №${monthNum} це Лютий`
			break
		case 3: monthName = `Місяць №${monthNum} це Березень`
			break
		case 4: monthName = `Місяць №${monthNum} це Квітень`
			break
		case 5: monthName = `Місяць №${monthNum} це Травень`
			break
		case 6: monthName = `Місяць №${monthNum} це Червень`
			break
		case 7: monthName = `Місяць №${monthNum} це Липень`
			break
		case 8: monthName = `Місяць №${monthNum} це Серпень`
			break
		case 9: monthName = `Місяць №${monthNum} це Вересень`
			break
		case 10: monthName = `Місяць №${monthNum} це Жовтень`
			break
		case 11: monthName = `Місяць №${monthNum} це Листопад`
			break
		case 12: monthName = `Місяць №${monthNum} це Грудень`
		default:
			alert("Будь-ласка введіть номер місяця від 1 до 12!")
			monthNum = parseInt(prompt('Введіть номер місяця'))
			break
	}
	return monthName
} 

document.write(`${getMonthName()}`)
