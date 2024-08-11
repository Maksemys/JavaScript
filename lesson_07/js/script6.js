// Задача 5. Створити окремі функції, які переводять:
//1)	Сантиметри у дюйми;
//2)	Кілограми у фунти;
//3)	Кілометри у милі.

function centimetersToInches(centim) {
	return centim / 2.54
}

function kilogramsToPounds(kilogram) {
	return kilogram / 0.45359237
}

function kilometersToMiles(kilometer) {
	return kilometer / 0.62137119
}
Math.floor
let centims = parseFloat(prompt('Введіть кількість сантиметрів'))
let kilograms = parseFloat(prompt('Введіть кількість кілограм'))
let kilometers = parseFloat(prompt('Введіть кількість кілометрів'))

document.write(`${centims} см дорівнює ${centimetersToInches(centims).toFixed(3)} дюймів<br><br>`)
document.write(`${kilograms} кг дорівнює ${kilogramsToPounds(kilograms).toFixed(3)} фунтів<br><br>`)
document.write(`${kilometers} км дорівнює ${kilometersToMiles(kilometers).toFixed(3)} милі<br><br>`)








