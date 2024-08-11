// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення. 

let number1 = parseFloat(prompt('Введіть перше значення'))
let number2 = parseFloat(prompt('Введіть друге значення'))
let number3 = parseFloat(prompt('Введіть трете значення'))
let number4 = parseFloat(prompt('Введіть четверте значення'))

// сума
function getSum(num1, num2, num3, num4) {
	return num1 + num2 + num3 + num4
}
document.write(`сума ${getSum(number1, number2, number3, number4)}<br>`)

// добуток
function getMultiply(num1, num2, num3, num4) {
	return num1 * num2 * num3 * num4
}
document.write(`добуток ${getMultiply(number1, number2, number3, number4)}<br>`)

//середнє арифметичне
function getAverageArithmetic(num1, num2, num3, num4) {
	return (num1 + num2 + num3 + num4) / 4
}
document.write(`середнє арифметичне ${getAverageArithmetic(number1, number2, number3, number4)}<br>`)

// мінімальне значення
function getMinNum(num1, num2, num3, num4) {
	return Math.min(num1, num2, num3, num4)
}
document.write(`мінімальне значення ${getMinNum(number1, number2, number3, number4)}<br>`)

