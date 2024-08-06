// Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).
const minNumber = 1
const maxNumber = 10
let computerNumber, answer

let userNumber = parseInt(prompt('Загадайте число від 1 до 10'))

do {
	computerNumber = minNumber + Math.floor(Math.random()*(maxNumber - minNumber + 1))
	answer = confirm(`Загадане число це ${computerNumber}?`);
} while (answer === false)
	alert(`Компьютер вгадав число! Ви загадали ${userNumber}`)