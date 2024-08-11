// Задача 4. Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.


let number1 = parseFloat(prompt('Введіть перше число'))
let number2 = parseFloat(prompt('Введіть друге число'))
let number3 = parseFloat(prompt('Введіть третє число'))

function getResNums(num1, num2, num3) {
	//кількість парних
	let evenNum = 0
	if (num1 % 2 === 0){
		evenNum++ 
	}
	if (num2 % 2 === 0){
		evenNum++ 
	}
	if (num3 % 2 === 0){
		evenNum++ 
	}
	//кількість додатних
	let positiveNum = 0
	if (num1 >= 0){
		positiveNum++ 
	}
	if (num2 >= 0){
		positiveNum++ 
	}
	if (num3 >= 0){
		positiveNum++ 
	}
	//кількість більших за 100
	let greaterOneHundredNum = 0
	if (num1 > 100){
		greaterOneHundredNum++ 
	}
	if (num2 > 100){
		greaterOneHundredNum++ 
	}
	if (num3 > 100){
		greaterOneHundredNum++ 
	}

	return {evenNum, positiveNum, greaterOneHundredNum}
}

let analyzeNums = getResNums(number1, number2, number3)

document.write(`Введені чісла №1 = ${number1}, №2 = ${number2}, №3 = ${number3}<br><br>`)
document.write(`Кількість парних чисел = ${analyzeNums.evenNum}<br><br>`)
document.write(`Кількість додатних чисел = ${analyzeNums.positiveNum}<br><br>`)
document.write(`Кількість чисел більших за 100 = ${analyzeNums.greaterOneHundredNum}<br>`)




