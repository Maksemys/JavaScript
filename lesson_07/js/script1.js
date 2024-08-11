// Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

function getYearTime() {
	let month = parseInt(prompt('Введіть номер місяця'))
	let yearTime
	switch (month) {
		case 12:
		case 1:
		case 2:	yearTime = `Місяць №${month} відповідає порі року Зима`
			break
		case 3:
		case 4:
		case 5:	yearTime = `Місяць №${month} відповідає порі року Весна`
			break
		case 6:
		case 7:
		case 8:	yearTime = `Місяць №${month} відповідає порі року Літо`
			break
		case 9:
		case 10:
		case 11:	yearTime = `Місяць №${month} відповідає порі року Осінь`
			break
		default:
			alert("Будь-ласка введіть номер місяця від 1 до 12!")
			break;
	}
	return yearTime 
} 

document.write(`${getYearTime()}`)
